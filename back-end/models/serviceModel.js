const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  organization: {
    type: String,
    default: "Basic Organization"
  },
  name: {
    type: String,
    required: [true, "Please provide a name for your service."],
    maxlength: 100,
  },
  description: {
    type: String,
    required: [true, "Please provide a service overview."],
  },
  tags: {
    type: [String],
    required: [true, "Must choose at least 1 tag"],
  },
  price: {
    type: String,
    default: ""
},
  createdAt: {
    type: String,
    required: [true, "This service doesn't have a createdAt field :("]
  }
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
