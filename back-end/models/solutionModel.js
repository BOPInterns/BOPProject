const mongoose = require("mongoose");

const solutionSchema = new mongoose.Schema({
    organization: String,
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
    focusAreas: [String],
    needs: [String],
    technologies: [String],
    createdAt: {
        type: String,
        required: [true, "When was this solution created?"]
    }
})

const Solution = mongoose.model("Solution", solutionSchema);

module.exports = Solution;