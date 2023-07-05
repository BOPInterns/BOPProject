const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcryptjs");
var nodemailer = require("nodemailer");
const validator = require("validator");
const dotenv = require("dotenv");
const User = require("./models/userModel");
const Campaign = require("./models/campaignModel");
const Solution = require("./models/solutionModel");
const Service = require("./models/serviceModel");
const File = require("./models/fileModel");
const Organization = require("./models/organizationModel");
const Offer = require("./models/offerModel");

const app = express();

dotenv.config();


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());


// CONNECT TO DB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("successfully connected to mongo");
  })
  .catch((e) => console.log(e));

// START SERVER
app.listen(9000, () => {
  console.log("Server started on port 9000");
});

//gets org data for the landing page
app.post("/get-org-data", async(req, res) => {
    try{
        const org = await Organization.findOne({name: req.body.name});
        res.send({status: "ok", data: org});
    }catch (err){
        console.log("error retrieving organization data")
    }
});

// gets offer data for org landing page
app.post("/get-offer-data", async(req, res) => {
  try{
    const  offers = await Offer.find({org: req.body.org});
    res.send({status: "ok", data: offers});
  }catch (err){
    console.log(err);
  }
});

//gets campaign data by owning org name
app.post("/get-camp-by-org", async (req, res) => {
  try {
    const selected = await Campaign.find({ organization: req.body.name });
    res.send({ status: "ok", data: selected });
  } catch (err) {
    console.log("error retrieving campaign data");
  }
});

//adds file to db from create campaign process
app.post("/upload-file", async (req, res) => {
  const { fileData } = req.body;
  try {
    await File.create({
      fileData,
    });
    res.send({ status: "ok", data: fileData });
  } catch (err) {
    res.send({ status: "error uploading file", data: err });
  }
});

// adds user account info into db
app.post("/register", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      textNotif,
      emailNotif,
    } = req.body;

    //if (!firstName || !lastName || !email || !password) { throw Error("Please fill in all required fields."); }
    if (!validator.isEmail(email)) throw Error("Invalid email");
    else if (!validator.isStrongPassword(password))
      throw Error("Password is not strong enough");

    const passwordEncr = await bcrypt.hash(password, 11);

    // check if email is already linked to an account
    const exists = await User.findOne({ email });
    if (exists) {
      throw Error("Email is already linked to an account");
    }
    if (firstName == "" || lastName == "") {
      throw Error("Please provide a valid full name");
    }

    var newUser = await User.create({
      firstName,
      lastName,
      email,
      password: passwordEncr,
      phoneNumber,
      textNotif,
      emailNotif,
      KYC: {
        verified: false,
      },
    });
    res.status(201).json({
      status: "success",
      data: newUser,
    });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

// validates email and password, allows or prevents login accordingly
app.post("/login", async (req, res) => {
  try {
    // validation for empty email or password fields
    const { email, password } = req.body;
    if (!email) {
      throw Error("Email required");
    } else if (!password) {
      throw Error("Password required");
    }

    // validation for valid email
    if (!validator.isEmail(email)) {
      throw Error("Invalid or Unregistered email");
    }

    // search db for the email address
    const user = await User.findOne({ email });
    if (!user) {
      throw Error("User not found");
    }

    if (await bcrypt.compare(password, user.password)) {
      // correct password entered
      const token = jwt.sign({}, process.env.JWT_SECRET);

      if (res.status(201)) {
        console.log("Login successful");
        return res.status(201).json({ user });
        // return res.status(201).json({data: token});
      } else {
        throw Error("Unknown login error");
      }
    } else {
      throw Error("Invalid password");
    }
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

// sends email to user's email address to reset password
app.post("/forgot-password", async(req, res) => {
    const {email, OTP} = req.body;
    try{
        if (!validator.isEmail(email)) {return res.json({error: "This is not a valid email"})};

        const existingUser = await User.findOne({ email });
        if(!existingUser){
            return res.json({status:"No account with this email address has been registered."});
        }

        const secret = process.env.JWT_SECRET + existingUser.password;
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, secret, {
            expiresIn: "10m",
        });
        //const link = `http://localhost:9000/reset-password/${existingUser._id}/${token}`;

        //copied code to sent email ///////
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'bop.hub.interns@gmail.com',
              pass: 'qskgqeunggcrjwbr'
            }
          });
          
          var mailOptions = {
            from: 'bop.hub.interns@gmail.com',
            to: email,
            subject: 'BOP Hub Password Reset',
            text: "Please use the following one time code to reset your password   \n" + OTP[0]+OTP[1]+OTP[2]+OTP[3],
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          ////////////////////////////////////
        
        res.send({status: 'ok', code: OTP});
    }catch (error) {
        console.log(error);
    }
});

// resets the user's password (including encryption)
app.post('/reset-password', async(req, res) => {
    const {email, password, confirmation} = req.body;

    if(password != confirmation){return res.json({error: "Please enter the same password in both fields."})}
    if (!(validator.isStrongPassword(password))) {return res.json({error: "Password is not strong enough"})}

    const existingUser = await User.findOne({email:email});
    if(!existingUser){
        return res.json({status:"No account with this email address has been registered."});
    }
    try {
        const encryptedPassword = await bcrypt.hash(password, 10);
        await User.updateOne({
            email: email
        },{
            $set: {
                password: encryptedPassword,
            }
        });

        return res.json({status: "password changed"});
        //res.render("index", {email: verify.email, status: "Verified"});
    } catch (error) {
        res.json({status: "Error Updating Password."})
    }
});

// loads the new campaign into the db
app.post("/create-campaign-step-5", async (req, res) => {
  try {
    const today = new Date().toJSON().slice(0, 10);
    var {
      organization,
      status,
      numActors,
      caseStudy,
      solutions,
      name,
      tags,
      videoLink, // STEP 1
      description,
      challenge,
      mission,
      milestones,
      goals, // STEP 2
      location,
      reach,
      stakeholderLangs,
      volunteerLangs, // STEP 3
    } = req.body;

    if (stakeholderLangs.length === 0)
      stakeholderLangs = [""];
    if (volunteerLangs.length === 0)
      volunteerLangs = [""];

    var newCampaign = await Campaign.create({
      organization,
      status,
      numActors,
      caseStudy,
      solutions,
      name,
      tags,
      createdAt: today,
      videoLink, // STEP 1
      description,
      challenge,
      mission,
      milestones,
      goals, // STEP 2
      location,
      reach,
      stakeholderLangs,
      volunteerLangs, // STEP 3
    });

    res.status(201).json({
      status: "success",
      data: newCampaign,
    });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

// update the user's info in the DB
app.post("/my-account", async (req, res) => {
  try {
    //const user = User.findOne(email);
    const { firstName, lastName, email, phoneNumber } = req.body;

    // update user info in the DB
    const filter = { email: email };
    const update = {
      $set: {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
      },
    };

    const updatedUser = await User.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.status(201).json({ updatedUser });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

// update the user object in the db with the given KYC info
app.post("/kyc-verification-form", async (req, res) => {
  try {
    const {
      userId,
      address,
      city,
      state,
      zipcode,
      country,
      gender,
      nationality,
      selfie,
    } = req.body;

    // validate that all fields are filled out
    if (
      address === " " ||
      city === "" ||
      state === "" ||
      zipcode === "" ||
      country === "" ||
      gender === "" ||
      nationality === "" ||
      selfie === undefined
    ) throw Error("Please fill out all fields");

    const filter = { _id: userId };
    const update = {
      $set: {
        "KYC.verified": true,
        "KYC.address": address,
        "KYC.city": city,
        "KYC.state": state,
        "KYC.zipcode": zipcode,
        "KYC.country": country,
        "KYC.gender": gender,
        "KYC.nationality": nationality,
        "KYC.selfie": selfie,
      },
    };

    const kycUser = await User.findOneAndUpdate(filter, update, { new: true });
    res.status(201).json({ kycUser });
  } catch (err) {
    res.status(401).json({ err: err.message });
  }
});

// gets campaign data for marketplace based on the applied filters
app.post("/get-campaign-data", async (req, res) => {
  try {
    const { 
      regDateFilter, campNameFilter, campOrgFilter, campTagsFilter,
      campPhaseFilter, campCSFilter, campMissionFilter, campNumActorsFilter, 
      campLocationFilter, campReachFilter, campStakeholderLangFilter, campVolunteerLangFilter 
    } = req.body;

    const data = await Campaign.find({
      organization: new RegExp(campOrgFilter, "i"),
      phase: new RegExp(campPhaseFilter, "i"),
      numActors: new RegExp(campNumActorsFilter, "i"),
      caseStudy: new RegExp(campCSFilter, "i"),
      name: new RegExp(campNameFilter, "i"),
      mission: new RegExp(campMissionFilter, "i"),
      location: new RegExp(campLocationFilter, "i"),
      reach: new RegExp(campReachFilter, "i"),
      tags: new RegExp(campTagsFilter, "i"),
      stakeholderLangs: new RegExp(campStakeholderLangFilter, "i"),
      volunteerLangs: new RegExp(campVolunteerLangFilter, "i"),
      createdAt: new RegExp(regDateFilter, "i")
    }).lean(); // .lean() returns a regular JavaScript object
    res.status(200).json({ data });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

// gets solution data for marketplace based on the applied filters
app.post("/get-solution-data", async (req, res) => {
  try {
    const {solOrgFilter, solNameFilter, solTagsFilter, regDateFilter,
           solFocusFilter, solNeedsFilter, solTechFilter} = req.body;
    const data = await Solution.find({
      organization: new RegExp(solOrgFilter, "i"),
      name: new RegExp(solNameFilter, "i"),
      tags: new RegExp(solTagsFilter, "i"),
      createdAt: new RegExp(regDateFilter, "i"),
      focusAreas: new RegExp(solFocusFilter, "i"),
      needs: new RegExp(solNeedsFilter, "i"),
      technologies: new RegExp(solTechFilter, "i")
    }).lean();
    res.status(200).json({data});
  } catch (err) {
    res.status(401).json({error: err.message});
  }
});

// gets service data for marketplace based on the applied filters
app.post("/get-service-data", async (req, res) => {
  try {
    const { regDateFilter, servOrgFilter, servNameFilter, servTagsFilter, servPriceFilter } = req.body;
    const data = await Service.find({
      organization: new RegExp(servOrgFilter, "i"),
      name: new RegExp(servNameFilter, "i"),
      tags: new RegExp(servTagsFilter, "i"),
      createdAt: new RegExp(regDateFilter, "i"),
      price: new RegExp(servPriceFilter, "i")
    }).lean();
    res.status(200).json({data});
  } catch (err) {
    res.status(401).json({error: err.message});
  }
});

// search logic for querying the db
app.post("/search", async (req, res) => {
  try {
    const searchTerms = req.body.terms;
    const regexTerms = searchTerms.map(term => new RegExp(`.*${term}.*`, 'i'));
    console.log(searchTerms);
    console.log(regexTerms)

    //search campaigns
    const campData = await Campaign.find({
      $or: [
        {name: { $in: regexTerms }}, 
        {organization: { $in: regexTerms }},
        {challenge: { $in: regexTerms }},
        {tags: { $elemMatch: { $in: regexTerms } }}
      ]
    }).lean();

    //search solutions
    const solData = await Solution.find({
      $or: [
        {name: { $in: regexTerms }}, 
        {organization: { $in: regexTerms }},
        {tags: { $elemMatch: { $in: regexTerms } }}
      ]
    }).lean();

    //search services
    const servData = await Service.find({
      $or: [
        {name: { $in: regexTerms }}, 
        {organization: { $in: regexTerms }},
        {tags: { $elemMatch: { $in: regexTerms } }}
      ]
    }).lean();

    res.send({campData: campData, solData: solData, servData: servData});
  } catch (err) {
    res.status(401).json({error: err.message});
  }
});

// finds a campaign by its id
app.post("/campaign-page", async (req, res) => {
  try {
    const {id} = req.body;
    const data = await Campaign.findById(id);
    if (!data)
      throw Error("data does not exist :(");
    res.status(200).json({data});
  } catch (err) {
    res.status(401).json({error: err.message});
  }
});

// gets the OpenAI API key from the .env file for use in the frontend
app.get("/get-openai-api-key", async (req, res) => {
  try{
    res.send({data: process.env.OPENAI_API_KEY});
  }catch (err) {
    res.send("Error retreiving API key: ", err);
  }
});