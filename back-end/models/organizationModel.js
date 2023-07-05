const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: [true, "Organization needs at least one owner."]
    },
    name: {
        type: String,
        required: [true, "Please provide a name for your solution."],
        maxlength: 100
    },
    statement: {
        type: String,
        required: [true, "Please provide an organization statement."]
    },
    type: {
        type: String,
        required: [true, "Please provide an organization type."]
    },
    hq: {
        type: String,
        required: [true, "Please provide an organization HQ location."]
    },
    webLink: {
        type: String,
        required: [true, "Please provide an organization webiste Link."]
    },
    numEmployees: {
        type: Number,
        required: [true, "Please provide current number of employees."]
    },
    endorsements: {
        type: Number,
        default: 0,
    },
    dateJoined: {
        type: String,
        required: [true, "Please provide an organization statement."]
    },

    // stuff that is below the top part, unsure if this is precisely what they need
    presentation: String,
    vidLink: String,
    focus: String,
    interests: [String],
    offers: [String],
    opRegions: [String]
});

const Organization = mongoose.model("Organization", organizationSchema);

module.exports = Organization;