const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");

dotenv.config();

// routes
const categoryRoute = require("./routes/categories");
const productRoute = require("./routes/products.js");
const billRoute = require("./routes/bills.js");
const authRoute = require("./routes/auth.js");

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
app.use("/api/products", productRoute);
app.use("/api/bills", billRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
  connect();
});
