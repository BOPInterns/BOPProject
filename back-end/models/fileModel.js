const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    owningCampaign: String,
    fileData: String
});

const File = mongoose.model("File", fileSchema);

module.exports = File;