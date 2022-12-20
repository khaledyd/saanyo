import { createError } from "../error.js";
import Orders from "../models/Orders.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

//update user
export const update = async (req, res, next) => {
  const userId = req.body.userId;
  if (req.params.id == userId) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
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

//delete user
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
//get user by id
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
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
      if (!buyerdata) {
        res.status(401).json("buyer not exists");
      } else {
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
                  balance: buyersnewBalance,
                  sends: buyerdata.wallet.sends,
                  receives: buyerdata.wallet.receives,
                },
              },
            },
            { new: true }
          );

          /// update the sellers balance
          const newsellerBlance = sellerdata.sellerBlance + total;
          const updatethesellersbalances = await User.findByIdAndUpdate(
            //sellerdata._id,
            sellerid,
            {
              $inc: {
                sellerBlance: total,
              },
            }
          );
          console.log(newsellerBlance);
          console.log(req.body);

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
export const sendMoney = async (req, res, next) => {
  const checkh = await User.findOne({ _id: req.params.id });
  try {
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
          const balance = checkh.wallet.balance;
          const reciverBlanace = reciverId.wallet.balance;
          console.log(balance);
          const amountsent = req.body.wallet.sends;
          const amount = amountsent[0].amountsent;
          const sentamount = amount;
          console.log(sentamount);

          if (balance < sentamount) {
            res.status(403).json("insufficient funds");
          } else {
            const newSenderblance = balance - sentamount;
            const newReciverBlance = reciverBlanace + sentamount;
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
              { $set: { "wallet.balance": newReciverBlance } }
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
  } catch (err) {
    res.status(404).json("user not found");
  }
};



export const latesttrasections = async (req, res, next) => {
  const finduser = await User.findById(req.params.id);
  try {
    if (!finduser) {
      res.status(404).json("not found");
    } else {
      const sends = finduser.wallet.sends;
      const receives = finduser.wallet.receives;
      const merge = (a1, a2) => {
        return a1
          .map((x) => {
            const y = a2.find((item) => x._id === item._id);
            if (y) {
              return Object.assign({}, x, y);
            } else return x;
          })
          .concat(a2.filter((item) => a1.every((x) => x._id !== item._id)));
      };

      const arr3 = merge(sends, receives);
      const last = new Date(Math.max(...arr3.map((e) => new Date(e.createAt))));

      res.status(200).json(last);
    }
  } catch (err) {
    res.status(500).json("server error");
  }
};





