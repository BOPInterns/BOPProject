// Rachel testing stuff out, feel free to ignore
const express = require("express");
//const userRouter = require("./routes/userRoutes");
const campaignRouter = require("./routes/campaignRoutes");

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/../front-end`));

app.use((req, res, next) => {
    console.log("Hello from the middleware!");
    next();
  });

app.use("/campaigns", campaignRouter);
//app.use("/users", userRouter);

module.exports = app;