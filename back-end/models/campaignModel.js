const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
    name: String,
    owner: String,
    tags: [String],
    description: String,
    challenge: String,
    reach: String,
    location: String,
    goals: [String],
    milestones: [String],
    // status: enum options,
    numActors: Number,
    stakeholderLangs: [String],
    volunteerLangs: [String],
    video: String, // YT link
    otherFiles: [String],
    deadline: Date,
    caseStudy: Boolean,
    solutions: [String]
})

const Campaign = mongoose.model("Campaign", campaignSchema);

module.exports = Campaign;