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

const app = express();

dotenv.config();

//dotenv.config({ path: "./config.env" });

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
//app.use(express.urlencoded({}));

app.set("view engine", "ejs");

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

//gets campaign data for campiagn center page / marketplace
app.get("/get-campaign-data", async (req, res) => {
  try {
    const allCampaigns = await Campaign.find({ data: req.data });
    res.send({ status: "ok", data: allCampaigns });
  } catch (err) {
    console.log("error retrieving campaign data");
  }
});

//gets solution data for the marketplace
app.get("/get-solution-data", async (req, res) => {
  try {
    const allSolutions = await Solution.find({ data: req.data });
    res.send({ status: "ok", data: allSolutions });
  } catch (err) {
    console.log("error retrieving solution data");
  }
});

//gets service for marketplace
app.get("/get-service-data", async (req, res) => {
  try {
    const allServices = await Service.find({ data: req.data });
    res.send({ status: "ok", data: allServices });
  } catch (err) {
    console.log("error retrieving service data");
  }
});

//adds file to db from creat campaign process
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

app.get('/', (req, res) => {
    
})

app.post("/forgot-password", async(req, res) => {
    const {email, OTP} = req.body;
    console.log(OTP)
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
        
        // console.log(link);
        res.send({status: 'ok', code: OTP});
    }catch (error) {
        console.log(error);
        res.send(error);
      }
    });

// app.get('/reset-password/:id/:token', async(req, res) => {
//     const {id, token} = req.params;
//     console.log(req.params);
//     const existingUser = await User.findOne({_id:id});
//     if(!existingUser){
//         return res.json({status:"No account with this email address has been registered."});
//     }
//     const secret = process.env.JWT_SECRET + existingUser.password;
//     try {
//         const verify = jwt.verify(token, secret);
//         res.render("index", {email:verify.email, status: "Not Verified"});
//     } catch (error) {
//         res.send("Not Verified");
//     }
// }); 

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

app.post('/create-campaign-step-5', async (req, res) => {
    try {
        const {
            organization, status, numActors, deadline, caseStudy, solutions,
            name, tags, videoLink, // STEP 1
            description, challenge, mission, milestones, goals, // STEP 2
            location, reach, stakeholderLangs, volunteerLangs, // STEP 3
        } = req.body;
    
        var newCampaign = await Campaign.create({
            organization, status, numActors, deadline, caseStudy, solutions,
            name, tags, videoLink, // STEP 1
            description, challenge, mission, milestones, goals, // STEP 2
            location, reach, stakeholderLangs, volunteerLangs, // STEP 3
        });

        res.status(201).json({
            status: "success",
            data: newCampaign
        });
    } catch (err) { res.status(401).json({error: err.message}); }
});

// update the user's info in the DB
app.post("/my-account", async (req, res) => {
  try {
    //const user = User.findOne(email);
    const { firstName, lastName, email, phoneNumber, password } = req.body;

    // if (!validator.isStrongPassword(password)) { throw Error("Password is not strong enough"); }
    // const passwordEncr = await bcrypt.hash(password, 11);

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
    console.log(updatedUser.email);
    res.status(201).json({ updatedUser });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

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
    )
      throw Error("Please fill out all fields");

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

app.post("/get-campaign-data", async (req, res) => {
  try {
    //const {orgFilter, campaignFilter, statusFilter, regDateFilter, tagsFilter} = req.body;
    const { orgFilter, campaignFilter, statusFilter } = req.body;
    console.log("orgFilter = " + orgFilter);
    // .lean() returns a regular JS object
    const data = await Campaign.find({
      organization: new RegExp(orgFilter, "i"),
      name: new RegExp(campaignFilter, "i"),
      status: new RegExp(statusFilter, "i"),
    }).lean();
    console.log("data found");
    res.status(200).json({ data });
    console.log("response sent");
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});
