import mongoose from "mongoose";

const Schema = mongoose.Schema;

const OtbModelSchema = new Schema({
  email: String,
  code: String,
});

export default mongoose.model("Otbcode", OtbModelSchema);
