const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "A first name must be provided!"]
    },
    lastName: {
        type: String,
        required: [true, "A last name must be provided!"]
    },
    // TODO: parse phone number to make it only consist of digits, change type to number
    phoneNumber: String,
    textNotifs: {
        type: Boolean,
        default: false
    },
    emailNotifs: {
        type: Boolean,
        default: false
    },
    // TODO: check for valid email
    userEmail: {
        type: String,
        required: [true, "Please provide an email."],
        unique: [true, "This email is already linked to an account!"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password."],
        minlength: [8, "Password must be at least 8 characters long."]
    },
// }, {
//     collection: "User",
// }
});

const User = mongoose.model("User", userSchema);

module.exports = User;