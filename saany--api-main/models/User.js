import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    confirmPassword: {
      type: String,
    },
    img: {
      type: String,
    },
    sellerBlance: {
      type: Number,
      default: 0,
    },
    wallet: {
      balance: {
        type: Number,
        default: 10000,
      },
      walletId: mongoose.ObjectId,
      amountsfrom: {
        type: Number,
      },
      sends: [
        {
          amountsent: {
            type: Number,
          },
          reciverAc: {
            type: String,
          },
          senderId: {
            type: String,
          },
          senderName: {
            type: String,
          },
          receiverNmae: {
            type: String,
          },
          createAt: {
            type: Date,
            default: Date.now,
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
          createAt: {
            type: Date,
            default: Date.now,
          },
        },
        { timestamps: true },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);

/*db.collection.find({
  $expr: {
    $gt: [
      "$points",
      "$opp_points"
    ]
  }
})
Models.post.Post.findOneAndUpdate({ _id: res._id }, { $inc: { views: 1 } }, {new: true },function(err, response) {
  if (err) {
  callback(err);
 } else {
  callback(response);

  ///////////
      const checkBlance = await checkhTheSenderexists.find({
        $expr: {
          $gt: [checkhTheSenderexists.wallet.balance, amount],
        },
      });
 }*/
