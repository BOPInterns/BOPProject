const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
    name: String,
    owner: String,
    // tags: String array,
    description: String,
    challenge: String,
    reach: String,
    location: String,
    // goals: String array,
    // milestones: String array,
    // status: enum options,
    numActors: Number,
    // stakeholderLangs: String array,
    // volunteerLangs: String array,
    video: String, // YT link
    // otherFiles: File object array,
    deadline: Date,
    caseStudy: Boolean,
    // solutions: String array?? IDK
})

const Campaign = mongoose.model("Campaign", campaignSchema);

module.exports = Campaign;