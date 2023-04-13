const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: Buffer,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  recipe: {
    type: String,
    required: false,
  },
  imgId: {
    type: String,
    require: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
