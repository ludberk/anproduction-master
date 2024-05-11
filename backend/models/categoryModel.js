const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
var categorySchema = new mongoose.Schema(
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
    image: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Category", categorySchema);
