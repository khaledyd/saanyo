import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

// Define a model
const OtbModelSchema = new Schema({
  email: String,
  code: String
});

// Compile model from schema
export default  mongoose.model("Otbcode", OtbModelSchema);