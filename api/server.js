const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("Failed to connect");
  }
};
asdasds;

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
  connect();
});
