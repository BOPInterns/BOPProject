const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  organization: {
    type: String,
    default: "Basic Organization"
  },
  name: {
    type: String,
    required: [true, "Please provide a name for your solution."],
    maxlength: 100,
  },
  description: {
    type: String,
    required: [true, "Please provide a solution overview."],
  },
  tags: {
    type: [String],
    required: [true, "Must choose at least 1 tag"],
  },
  price: String,
  createdAt: {
    type: String,
    required: [true, "This campaign doesn't have a createdAt field :("]
  }
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
