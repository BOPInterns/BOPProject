const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
    organization: {
        type: String,
        default: "Basic Organization"
    },
    phase: {
        type: String,
        enum: ["New", "Challenge", "Project", "Showcase"],
        default: "New"
    },
    numActors: {
        type: String,
        default: ""
    },
    caseStudy: {
        type: String,
        enum: ["true", "false"],
        default: "false"
    },
    // TODO: add manual references to solution documents
    solutions: [String],
    //*** CREATE-CAMPAIGN STEP 1
    name: {
        type: String,
        required: [true, "Please provide a name for your campaign."],
        maxlength: 100
    },
    // TODO: add a field called "owner" that is a reference to the owning org's  _id field
    //       type = ObjectID
    tags: {
        type: [String],
        required: [true, "Must choose at least 1 tag"]
    },
    videoLink: String, // YouTube link
    //*** CREATE-CAMPAIGN STEP 2
    description: {
        type: String,
        required: [true, "Please provide a description."]
    },
    challenge: {
        type: String,
        required: [true, "Please provide a challenge."]
    },
    mission: {
        type: String,
        default: ""
    },
    milestones: [String],
    goals: [String],
    //*** CREATE-CAMPAIGN STEP 3
    location: {
        type: String,
        required: [true, "Please provide your location."]
    },
    reach: {
        type: String,
        required: [true, "Please provide your reach."]
    },
    stakeholderLangs: {
        type: [String],
        default: [""]
    },
    volunteerLangs: {
        type: [String],
        default: [""]
    },
    //*** CREATE-CAMPAIGN STEP 4
    otherFiles: [String],
    createdAt: {
        type: String,
        required: [true, "This campaign doesn't have a createdAt field :("]
    }
})

const Campaign = mongoose.model("Campaign", campaignSchema);

module.exports = Campaign;