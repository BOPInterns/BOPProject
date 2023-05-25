const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

// dotenv saves the variables in config.env as Node.js environment variables
dotenv.config({path: "./config.env"});

// connect to the DB
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("connected to mongo!");
    })
    .catch((err) => console.log(err));

// start the app
const port = 9000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});