const express = require('express');
const mongoose = require('mongoose')
const app = express();

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

require("./schemas/userInfo");

const User = mongoose.model("UserInfo");

app.post("/register", async(req,res) => {
    const {fname, lname, email, pword} = req.body;
    
    try{
        await User.create({
            firstName: fname,
            lastName: lname,
            userEmail: email,
            password: pword,
        });
        res.send({status: "OK"});
    } catch (error){
        res.send({status: "error with register"})
    }
})


app.get("/api", (req, res) =>{
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});

