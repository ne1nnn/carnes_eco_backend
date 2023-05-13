const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  stock: {
    type: Number,
    required: false,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
