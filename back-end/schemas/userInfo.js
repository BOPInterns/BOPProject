const mongoose = require("mongoose");

const UserInfoSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String, 
    textNotif: Boolean,
    emailNotif: Boolean, 
    email: String,
    password: String,
}, {
    collection: "UserInfo",
});

const UserInfo = mongoose.model("UserInfo", UserInfoSchema);

module.exports = UserInfo;