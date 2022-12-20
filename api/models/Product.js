const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: {
    Type: String,
    require: true,
  },
  img: {
    Type: String,
    require: true,
  },
  price: {
    Type: Number,
    require: true,
  },
  category: {
    Type: String,
    require: true,
  },
});

const Product = mongoose.model("products", ProductSchema);
module.exports = Product;
