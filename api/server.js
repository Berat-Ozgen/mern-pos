const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");

dotenv.config();

// routes
const categoryRoute = require("./routes/categories");

const PORT = process.env.PORT || 5000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("Failed to connect");
  }
};

// middlewares
app.use(express.json());
app.use(cors());

app.use("/api/category", categoryRoute);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
  connect();
});
