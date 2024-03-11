const express = require("express");

const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const subscriberRoute = require("./routes/subscribers");

dotenv.config(); // config of dotenv
// do this so when we upload this pj, ppl can't see our db connection (password,...)

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("db connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
app.use("/api/subscribers", subscriberRoute);

app.listen(8080, () => {
  console.log("server is running");
});
