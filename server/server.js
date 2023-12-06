const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.port || 3000;
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
  })
  .then(() => console.log("connect to mongodb sucessfully"))
  .catch((err) => console.log("unable to connect to mongodb, get err", err));
const app = express();
app.use(express.json({ extend: true }));
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));
//route
const variablesRoute = require("./route/variable.route");
app.use("/api/variable", variablesRoute);
//start the server
app.listen(port, () => {
  console.log("listen to port ", port);
});
