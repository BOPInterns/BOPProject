const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs");

const mongoURL = "mongodb+srv://BoPInterns:Pratibimb123@db1.l4iyumt.mongodb.net/";
const JWT_SECRET = "B14F70A18B2DBAB4D1B2D34CD7EBB943F78A86BB15E2D0E85810867B6254A1D0";

mongoose
    .connect(mongoURL, { 
        useNewUrlParser: true 
    })
    .then(() => {
        console.log("successfully connected to mongo");
    })
    .catch((e) => console.log(e));


app.listen(9000, () => { console.log("Server started on port 9000") });

const User = require("./schemas/userInfo");

app.post("/register", async(req,res) => {
    const {firstName, lastName, email, password, phoneNumber, emailNotif, textNotif} = req.body;
    console.log(firstName + " " + lastName);
    async function sendData(){
        var uI = await User.create({
            firstName,
            lastName,
            phoneNumber,
            textNotif,
            emailNotif,
            email,
            password,
        });
    }
    sendData();
    res.send({status: "OK"});
});

app.post("/login", async(req,res) => {
    // check for empty email or password fields
    const {email, password} = req.body;
    if (!req.body.email) {
        return res.status(400).json({error: "Email required"});
    } else if (!req.body.password) {
        return res.status(400).json({error: "Password required"});
    }

    const user = await User.findOne({email});
    if (!user) {
        // 401 = Unauthorized
        return res.status(401).json({error: "User not found"});
    } else if (password != user.password) {
        // 401 = Unauthorized
        return res.status(401).json({error: "Incorrect password"});
    } else {
        console.log("Login successful");
        res.status(200).json({
            email,
            password
        });
    }
});

app.post("/forgot-password", async(req, res) => {
    const {email} = req.body;
    try{
        const existingUser = await User.findOne({ email });
        if(!existingUser){
            return res.json({status:"No account with this email address has been registered."});
        }

        const secret = JWT_SECRET + existingUser.password;
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, secret, {
            expiresIn: "10m",
        });
        const link = `http://localhost:9000/reset-password/${existingUser._id}/${token}`;
        
        //copied code to sent email
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'bop.hub.interns@gmail.com',
              pass: 'qskgqeunggcrjwbr'
            }
          });
          
          var mailOptions = {
            from: 'bop.hub.interns@gmail.com',
            to: email,
            subject: 'BOP Hub Password Reset',
            text: link
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          /////////////////////////////////
        
        console.log(link);
    }catch (error) {

    }
});

app.get('/reset-password/:id/:token', async(req, res) => {
    const {id, token} = req.params;
    console.log(req.params);
    const existingUser = await User.findOne({_id:id});
    if(!existingUser){
        return res.json({status:"No account with this email address has been registered."});
    }
    const secret = JWT_SECRET + existingUser.password;
    try {
        const verify = jwt.verify(token, secret);
        res.render("index", {email:verify.email, status: "Not Verified"});
    } catch (error) {
        res.send("Not Verified");
    }
}); 

app.post('/reset-password/:id/:token', async(req, res) => {
    const {id, token} = req.params;
    const {password}=req.body

    const existingUser = await User.findOne({_id:id});
    if(!existingUser){
        return res.json({status:"No account with this email address has been registered."});
    }
    const secret = JWT_SECRET + existingUser.password;
    try {
        const verify = jwt.verify(token, secret);
        const encryptedPassword = await bcrypt.hash(password, 10);
        await User.updateOne({
            _id: id
        },{
            $set: {
                password: encryptedPassword,
            }
        });

        // res.json({status: "Password Updated."});
        res.render("index", {email: verify.email, status: "Verified"});
    } catch (error) {
        // res.send("Not Verified");
        res.json({status: "Error Updating Password."})
    }
}); 