import mongoose from "mongoose";

const userModel = new mongoose.Schema(
    {
      userName: {
        type: String,
        minLength: 3,
        maxLenght: 50,
        unique: true,
        required: [true, "User name is required"],
      },
      password: {
        type: String,
        minLength: 3,
        required: [true, "Password is required"],
      },
      isBlocked: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );

  export const UserModel = mongoose.model(
    "UserModel",
    userModel
  );