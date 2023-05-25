const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
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