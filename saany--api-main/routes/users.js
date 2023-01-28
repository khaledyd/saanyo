import express from "express";
import {
  update,
  deleteUser,
  getUser,
  crateOrder,
  buysomethingnow,
  sendMoney,
  getOrder,
  getorderbyid,
  latesttrasections,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//update user
router.put("/:id", update);

//delete user
router.delete("/:id", verifyToken, deleteUser);

//get a user
router.get("/find/:id", getUser);




//create Order 
router.post("/createorder/:id",  crateOrder);

//make purchase
router.put("/buysomethingnow/:id", buysomethingnow);

//send money
router.put("/sendMoney/:id", sendMoney);

//get order of that user
router.get("/getorder/:id", getOrder);

//get order by id 
router.get("/getorderbyid/:id", getorderbyid);

//latest transections

router.get("/latesttrasections/:id", latesttrasections);

export default router;
