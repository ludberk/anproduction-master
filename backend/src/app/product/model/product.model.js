import mongoose from "mongoose";

var productModel = new mongoose.Schema(
    {
        text:{
            type: String,
            minlength: 3,
            maxLength: 150,
            required: true,
            trim: true
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
        images: [{
            type: String
        }]
    },
    { timestamps: true, }
);

export const ProductModel = mongoose.model(
    "ProductModel",
    productModel
);