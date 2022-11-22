import mongoose from "mongoose";

const LotsSchema = new mongoose.Schema(
  {
    displayname: {
      type: String,
      required: true,
      unique: true,
    },
    Typeoflot :{
        type: Array,
        required: true,

    }
  },
  { timestamps: true }
);

export default mongoose.model("Lots", LotsSchema);
