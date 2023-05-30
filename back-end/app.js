// Rachel testing stuff out, feel free to ignore
const express = require("express");
const campaignRouter = require("./routes/campaignRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();
app.use(express.json());
//app.use(express.static(`${__dirname}/../front-end`));

app.use((req, res, next) => {
    console.log("Hello from the middleware!");
    next();
  });

// TODO: get the write URL paths from front-end
app.use("/campaigns", campaignRouter);
app.use("/users", userRouter);

module.exports = app;