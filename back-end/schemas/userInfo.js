const mongoose = require("mongoose");

const UserInfoSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userEmail: String,
    password: String,
}, {
    collection: "UserInfo",
});

mongoose.model("UserInfo", UserInfoSchema);