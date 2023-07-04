const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
    org: {
        type: String,
        required: [true, "Offer needs to belong to an organization."]
    },
    name: {
        type: String,
        required: [true, "Offer needs a name"]
    },
    description: {
        type: String,
        required: [true, "Offer needs a description."]
    }
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;