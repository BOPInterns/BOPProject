// Rachel testing stuff out, feel free to ignore
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env"});

// connect to the DB
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true 
    })
    .then(() => {
        console.log("successfully connected to mongo");
    })
    .catch((err) => console.log(err));

app.listen(9000, () => {
    console.log("Server started on port 9000");
});