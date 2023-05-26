const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const JWT_SECRET = "gh&ssdfm%fmv&fkj@sjP[9fvz.i*HTSV<SJDeouwoijcdj12350&){skdfs}dfh3$)asdflk1-sdf=sFHDMC+ut";

const app = express();
app.use(express.json());
app.use(cors());

const mongoURL = "mongodb+srv://BoPInterns:Pratibimb123@db1.l4iyumt.mongodb.net/";

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
    try {
        const {firstName, lastName, email, password, phoneNumber, emailNotif, textNotif} = req.body;
        console.log(firstName + " " + lastName);

        if (!validator.isEmail(email)) { throw Error("Invalid email"); }
        else if (!validator.isStrongPassword(password)) { throw Error("Password is not strong enough"); }

        const passwordEncr = await bcrypt.hash(password, 11);

        // check if email is already linked to an account
        const exists = await User.findOne({email});
        if (exists) { throw Error("Email is already linked to an account"); }

        var uI = await User.create({
            firstName,
            lastName,
            phoneNumber,
            textNotif,
            emailNotif,
            email,
            password: passwordEncr,
        });
        res.send({status: "OK"});
    } catch (err) { res.status(401).json({error: err.message}); }
});

app.post("/login", async(req,res) => {
    try {
        // validation for empty email or password fields
        const {email, password} = req.body;
        if (!email) { throw Error("Email required"); } 
        else if (!password) { throw Error("Password required"); }

        // validation for valid email
        if (!validator.isEmail(email)) { throw Error("Invalid email"); }

        const user = await User.findOne({email});
        if (!user) { throw Error("User not found"); }

        if (await bcrypt.compare(password, user.password)) {
            // correct password entered
            const token = jwt.sign({}, JWT_SECRET);

            if (res.status(201)) {
                console.log("Login successful");
                return res.status(201).json({data: token});
            } else {
                return res.status(401).json({error: "Error"});
            }
        } else { throw Error("Invalid password"); }
    } catch (err) { res.status(401).json({error: err.message}); }
});