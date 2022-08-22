const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: [true, "Product name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "Product price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    // required: [true, "Product name must be provided"],
    default: Date.now(),
  },
  company: {
    type: String,
    // required: [true, "Product name must be provided"],
    enum: {
      values: ["Google", "Microsoft", "Amazon", "ConnectUp", "Facebook"],
      message: "{value} not supported",
    },
  },
});
module.exports = mongoose.model("Product", productSchema);
