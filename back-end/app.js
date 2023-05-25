const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log("Hello from the middleware!");
});

// app.post("/register", async(req,res) => {
//     const {fname, lname, email, pword} = req.body;
    
//     try{
//         await User.create({
//             firstName: fname,
//             lastName: lname,
//             userEmail: email,
//             password: pword,
//         });
//         res.send({status: "OK"});
//     } catch (error){
//         res.send({status: "error with register"})
//     }
// })


// app.get("/api", (req, res) =>{
//     res.json({ "users": ["userOne", "userTwo", "userThree"] });
// });

module.exports = app;