const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  category: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  imageurl: { type: String, required: false, trim: true },
  availableQty: { type: Number, required: true, default: 0 }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
