import express from "express";
import {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
  crateOrder,
  buysomethingnow,
  sendMoney,
  getOrder,
  getorderbyid,
  purchase

} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//update user
router.put("/:id", verifyToken, update);

//delete user
router.delete("/:id", verifyToken, deleteUser);

//get a user
router.get("/find/:id", getUser);

//subscribe a user
router.put("/sub/:id", verifyToken, subscribe);

//unsubscribe a user
router.put("/unsub/:id", verifyToken, unsubscribe);

//like a video
router.put("/like/:videoId", verifyToken, like);

//dislike a video
router.put("/dislike/:videoId", verifyToken, dislike);
router.post("/createorder/:id", verifyToken, crateOrder);

router.put("/buysomethingnow/:id", verifyToken, buysomethingnow);
router.put("/sendMoney/:id", sendMoney);
router.get("/getorder/:id", getOrder);
router.get("/getorderbyid/:id", getorderbyid);
router.put("/purchase/:id",verifyToken, purchase);


export default router;
