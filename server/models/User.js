import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword:{
      type: String,

    },
    img: {
      type: String,
    },
    accountBalance: {
      type: Number,
      default: 10000,
    },
    storeBalance: {
      type: Number,
      default: 10000,
    },
    fromGoogle: {
      type: Boolean,
      default: false,
    },
  
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
