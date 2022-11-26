const walletSchema = new mongoose.Schema({
  balance: {
    type: Number,
    default: 10000,
  },
  sends: [
    {
      amountsentAmountsent: {
        type: Number,
      },
      reciverId: {
        type: String,
      },
      senderId: {
        type: String,
      },
      senderNmae: {
        type: String,
      },
      receiverNmae: {
        type: String,
      },
    },
    { timestamps: true },
  ],
  receives: [
    {
      amountRecived: {
        type: Number,
      },
      SenderuserId: {
        type: String,
      },
      senderNmae: {
        type: String,
      },
    },
    { timestamps: true },
  ],
});

export default mongoose.model("Wallet", walletSchema);