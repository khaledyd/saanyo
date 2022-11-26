import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,

      unique: true,
    },
    email: {
      type: String,

      unique: true,
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
    wallet: {
      balance: {
        type: Number,
        default: 10000,
      },
      walletId: mongoose.ObjectId,

      sends: [
        {
          amountsentAmountsent: {
            type: Number,
          },
          reciverId: {
            type:String
          },
          senderId: {
            type: String
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
