import { createError } from "../error.js";
import Orders from "../models/Orders.js";
import User from "../models/User.js";
import Video from "../models/Video.js";

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can update only your account!"));
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted.");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can delete only your account!"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const subscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json("Subscription successfull.");
  } catch (err) {
    next(err);
  }
};

export const unsubscribe = async (req, res, next) => {
  try {
    try {
      await User.findByIdAndUpdate(req.user.id, {
        $pull: { subscribedUsers: req.params.id },
      });
      await User.findByIdAndUpdate(req.params.id, {
        $inc: { subscribers: -1 },
      });
      res.status(200).json("Unsubscription successfull.");
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

export const like = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { likes: id },
      $pull: { dislikes: id },
    });
    res.status(200).json("The video has been liked.");
  } catch (err) {
    next(err);
  }
};

export const dislike = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { dislikes: id },
      $pull: { likes: id },
    });
    res.status(200).json("The video has been disliked.");
  } catch (err) {
    next(err);
  }
};
//create Orders
export const crateOrder = async (req, res, next) => {
  const NewOrder = new Orders({ userId: req.params.id, ...req.body });
  try {
    const savedOrder = await NewOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    next(err);
  }
};

///get orders by userid

export const getOrder = async (req, res, next) => {
  const userid = req.params.id;
  const getorders = await Orders.find({ userId: userid });
  try {
    if (!getorders) {
      res.status(404).json("did not find order");
    } else {
      res.status(200).json(getorders);
    }
  } catch (err) {
    next(err);
  }
};
//get order by id

export const getorderbyid = async (req, res, next) => {
  const orderId = req.params.id;
  const getorderwithid = await Orders.findById({
    _id: orderId,
  });
  try {
    if (!getorderwithid) {
      res.status(404).json("  not found");
    } else {
      res.status(200).json(getorderwithid);
    }
  } catch (err) {
    next(err);
  }
};

// make purchase
export const buysomethingnow = async (req, res) => {
  const orderExists = await Orders.findOne({ _id: req.params.id });
  if (!orderExists) {
    res.status(404).json("The order does not exist");
  } else {
    try {
      const sellerid = orderExists.userId;
      const buyerId = req.body.buyerId;
      const buyerdata = await User.findOne({ _id: req.body.buyerId });
      const sellerdata = await User.findOne({ _id: req.body.sellerid });
      /*const alldata = {
        buyer: buyerdata,
        seller: sellerdata,
      }
       console.log(sellerdata);*/
      //if (!buyerdata && sellerdata) {
        //res.status(404).json("buyer not exists");
      //}// else if (buyerdata && !sellerdata) {
        //res.status(404).json("The seller may not exists");
     // } else if (!buyerdata && !sellerdata) {
       // res.status(404).json("the both are exists");
      //
      if (!buyerdata) {
        res.status(401).json("buyer not exists");
      }
      else {
        const quantity = req.body.sales[0].quantity;
        const amountPayed = orderExists.price;
        const total = amountPayed * quantity;
        const buyernme = req.body.sales[0].buyernme;
        const buyerAddress = req.body.sales[0].buyerAddress;
        const buyerPhoneNumber = req.body.sales[0].buyerPhoneNumber;
        if (buyerdata.wallet.balance < total) {
          res.status(403).json("Not enough balance");
        } else {
          const updateThesales = await Orders.findByIdAndUpdate(
            orderExists._id,
            {
              $push: {
                sales: {
                  quantity: quantity,
                  amountPayed: amountPayed,
                  total: total,
                  buyernme: buyernme,
                  buyerAddress: buyerAddress,
                  buyerPhoneNumber: buyerPhoneNumber,
                },
              },
            },
            { new: true }
          );
          //update the buyer's balance
          const buyersnewBalance = buyerdata.wallet.balance - total;

          const updatethebuyersblance = await User.findByIdAndUpdate(
            buyerdata._id,
            {
              $set: {
                wallet: {
                  "balance": buyersnewBalance,
                  sends: buyerdata.wallet.sends,
                  receives: buyerdata.wallet.receives,
              
                },
              },
            },
            { new: true}
          );

          /// update the sellers balance
          const newsellerBlance = sellerdata.sellerBlance + total;
          const updatethesellersbalances = await User.findByIdAndUpdate(
            //sellerdata._id,
            sellerid,
            {
              $inc: {
                "sellerBlance": total ,
              },
            },
          
          );
          console.log(newsellerBlance);
          console.log(req.body)

          res.status(200).json(updateThesales);
        }

        //res.status(200).json({ data1: sellerdata, data2: buyerdata });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

//send money

/*export const sendMoney = async (req, res, next) => {
  const idpramas = req.params.id;
  const usersending = await User.findOne({ _id: idpramas });
  if (!usersending._id !== idpramas) {
    res.status(403).json("wrong id");
  } else {
    const Id = req.params.id;
    const user = await User.findById({ Id });
    const email = req.body.email;
    const findreviceid = await User.findd({ email });
    if (!findreviceid) {
      res.status(403).json("reciver not found");
    } else {
      try {
        const senderBalance = user.wallet.balance;
        const amount = req.body.amountSent;
        if (senderBalance < amount) {
          res.status(403).json("insufficient funds");
        } else {
          const newblance = senderBalance - amount;
          const updatedBlanced = await User.findByIdAndUpdate(
            req.params.id,

            { $set: { balance: newblance } },
            { new: true }
          );
          res.status(200).json(updatedBlanced);
          const reciverid = findreviceid.id;
          const reciverBlance = findreviceid.wallet.balance;
          const newBlanceofreciver = reciverBlance + amount;
          const updatedReciverblance = await User.findByIdAndUpdate(
            { reciverid },
            { $set: { balance: newBlanceofreciver } }
          );
          res.status(200).json(updatedReciverblance);
        }
      } catch (err) {
        next(err);
      }
    }
  }
};*/
export const sendMoney = async (req, res, next) => {
  const checkh = await User.findOne({ _id: req.params.id });

  if (!checkh) {
    res.status(404).json("user not found");
  } else {
    const reciverId = await User.findOne({ _id: req.body.id });
    if (!reciverId) {
      res.status(404).json("reciver not found");
    } else {
      console.log("found this user");
      let { ...others } = reciverId._doc;
      try {
        const balance = Number(checkh.wallet.balance);
        const reciverBlanace = reciverId.wallet.balance;
        console.log(balance);
        const amountsent = req.body.wallet.sends;
        const amount = amountsent[0].amountsent;
        const sentamount = amount;
        console.log(sentamount);

        if (balance < amount) {
          res.status(403).json("insufficient funds");
        } else {
          const newSenderblance = balance - amount;
          const newReciverBlance = reciverBlanace + amount;
          console.log(newSenderblance);

          const updatedBlanced = await User.findByIdAndUpdate(
            req.params.id,

            {
              $set: { "wallet.balance": newSenderblance },
            },
            { new: true }
          );
          const reciverId = req.body.id;
          ///update the sende data
          const updatethearray = await User.findByIdAndUpdate(
            req.params.id,

            {
              $push: {
                "wallet.sends": {
                  $each: [
                    {
                      amountsent: sentamount,
                      reciverAc: reciverId,
                      receiverNmae: req.body.wallet.sends[0].receiverNmae,
                    },
                  ],
                },
              },
            },
            { new: true }
          );

          ///reciver's   data process and ssaing the data needed

          const reciverupdatedBlance = await User.findByIdAndUpdate(
            req.body.id,
            { $set: { "wallet.balance": newReciverBlance } },
            { new: true }
          );

          const updaterecivedarraydata = await User.findByIdAndUpdate(
            req.body.id,
            {
              $push: {
                "wallet.receives": {
                  $each: [
                    {
                      amountRecived: sentamount,
                      SenderuserId: req.params.id,
                      senderNmae: checkh.displayName,
                    },
                  ],
                },
              },
            },

            { new: true }
          );
          res.status(200).json(updatethearray);
        }
      } catch (err) {
        next(err);
      }
    }
  }
};
/// new funcion for send money

export const purchase = async (req, res, next) => {
  try {
    const checkhorder = await Orders.findById(req.params.id);
    if (!checkhorder) {
      res.status(404).json("did not found");
    } else {
      const buyerId = req.body.buyerId;
      const finduser = await User.findById({ _id: buyerId });
      if (!finduser) {
        res.status(403).json("id not found");
      } else {
        const updatessales = await Orders.findByIdAndUpdate(
          req.params.id,
          {
            $push: {
              sales: {
                buyerId: buyerId,
            
              },
            },
          },
          { new: true }
        );
        res.status(200).json(updatessales);
      }
    }
  } catch (err) {
    res.status(500).json("server error");
  }
};

/*const orderexists = await Orders.findById(req.params.id);
    if (!orderexists) {
      res.status(404).json("order not found");
    } else {
      const quantity = req.body.sales[0].quantity;
      const total = quantity * orderexists.price;
      if (total > req.user.wallet.balance) {
        res.status(400).json("not enough funds");
      } else {
        const updatedsales = await Orders.findByIdAndUpdate(
          req.params.id,
          {
            $push: {
              sales: {
                quantity: quantity,
                total: total,
                amountPayed: orderexists.price,
              },
            },
          },
          { new: true }
        );
        res.status(200).json(updatedsales);
      }




    }*/
