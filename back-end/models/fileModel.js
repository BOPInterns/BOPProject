const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    owningCampaign: {
        type: String,
    },
    fileData: {
        type: String,
    }
});

const File = mongoose.model("File", fileSchema);

module.exports = File;