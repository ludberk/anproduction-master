const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    furniture: {
      type: Boolean,
      default: false,
      required: true,
    },
    ironWork: {
      type: Boolean,
      default: false,
      required: true,
    },
    images: {
      type: Array,
    }
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Product", productSchema);
