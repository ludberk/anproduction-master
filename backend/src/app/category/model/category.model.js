
import mongoose from "mongoose";

var categoryModel = new mongoose.Schema(
    {
        title: {
          type: String,
          required: true,
          minlength: 2,
          maxLength: 150,
          trim: true,
        },
        text:{
            type: String,
            maxLength: 200,
            trim: true,
            default: null,
 
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
          default: null
        }
      },
      {
        timestamps: true,
      }
);

export const CategoryModel = mongoose.model(
    "CategoryModel",
    categoryModel
);