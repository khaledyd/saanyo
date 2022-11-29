import mongoose from "mongoose";
const salesSchema = new mongoose.Schema({
  productId: {
    type: String,
    unique: true,
  },
  quantity: {
    type: Number,
  },
  amountPayed: {
    type: Number,
    
  
  },
  buyernme: {
    type: String,
  },
  buyerPhoneNumber: {
    type: Number,
  },
  buyerAddress: {
    type: String,
  },
  total: {
    type: Number,
  },
});
const prodctSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    productTitle: {
      type: String,
    },
    price: {
      type: Number,
    },
    sales: [salesSchema],
  },

  { timestamps: true }
);

export default mongoose.model("Orders", prodctSchema);
