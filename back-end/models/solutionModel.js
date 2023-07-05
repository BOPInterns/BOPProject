const mongoose = require("mongoose");

const solutionSchema = new mongoose.Schema({
    organization: {
        type: String,
        default: "Basic Organization"
    },
    name: {
        type: String,
        required: [true, "Please provide a name for your solution."],
        maxlength: 100
    },
    tags: {
        type: [String],
        required: [true, "Must choose at least 1 tag"]
    },
    numEndorsements: Number,
    overview: {
        type: String,
        required: [true, "Please provide a solution overview."]
    },
    explanation: {
        type: String,
        required: [true, "Please provide a solution explanation."]
    },
    mission: String,
    focusAreas: {
        type: [String],
        default: [""]
    },
    needs: {
        type: [String],
        default: [""]
    },
    technologies: {
        type: [String],
        default: [""]
    },
    createdAt: {
        type: String,
        required: [true, "This solution doesn't have a createdAt field :("]
    }
})

const Solution = mongoose.model("Solution", solutionSchema);

module.exports = Solution;