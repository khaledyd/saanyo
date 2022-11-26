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
  const NewOrder = new Orders({ userId: req.user.id, ...req.body });
  try {
    const savedOrder = await NewOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    next(err);
  }
};
// make purchase
export const buysomethingnow = async (req, res) => {
  try {
    const event = await Orders.findById(req.params.id);

    if (!event) {
      res.status(403).json("wrong event id");
    } else {
      try {
        /*let data = {
          quantity: req.body.quantity,
          amountPayed: req.body.amountPayed,
          buyernme: req.body.buyernme,
          buyerPhoneNumber: req.body.buyerPhoneNumber,
          buyerAddress: req.body.buyerAddress,
          total: quantity * amountPayed,
        };*/

        const updatedEvent = await Orders.findByIdAndUpdate(
          req.params.id,

          {
            $push: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedEvent);
      } catch (err) {
        next();
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//send money

export const sendMoney = async (req, res, next) => {
  let user = await User.findById(req.params.id === req.user.id);
  if (!user) {
    res.send("User does not exist sender ");
  } else {
    const reciverId = req.body.reciver;
    const checkhTheSenderexists = await User.findOne(reciverId);
    if (!checkhTheSenderexists) {
      res.send("User does not exist ");
    } else {
      const { amount } = req.body.amount;
      if (user.wallet.balance < amount) {
        res.send("balance not enought ");
      } else {
        try {
          const updatedbalance = await checkhTheSenderexists.findOneAndUpdate({
            $inc: { [checkhTheSenderexists.wallet.balance]: amount },
          });
          res.status(200).json(updatedbalance);
        } catch (err) {
          return next();
        }
      }
    }
  }
};
/// new funcion for send money

