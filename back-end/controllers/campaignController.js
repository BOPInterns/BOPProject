// Rachel testing stuff out, feel free to ignore
const Campaign = require("./../models/campaignModel");

exports.createCampaign = async (req, res) => {
    try {
        const newCampaign = await Campaign.create(req.body);

        res.status(201).json({
            status: "success",
            data: {
                campaign: newCampaign
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "Unsuccessful campaign creation"
        });
    }
}

exports.getAllCampaigns = async (req, res) => {
    try {
        // find() returns an array of all campaign documents as JS objects
        const campaigns = await Campaign.find();

        res.status(200).json({
            status: "success",
            results: campaigns.length,
            data: {
                campaigns
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        });
    }
}

exports.getCampaign = async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id);
        // Campaign.findOne({ _id: req.params.id });
        // would work the same as the code above

        res.status(200).json({
            status: "success",
            data: {
                campaign
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
}

exports.updateCampaign = async (req, res) => {
    try {
        const campaign = Campaign.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: "success",
            data: {
                campaign
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
}

exports.deleteCampaign = async (req, res) => {
    try {
        await Campaign.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: "success",
            data: null
          });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
}