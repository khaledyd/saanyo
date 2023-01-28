import express from "express";
import { signin, signup, verify, SendOtb } from "../controllers/auth.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

const router = express.Router();

//CREATE A USER
router.post("/signup", signup);

//SIGN IN
router.post("/signin", signin);


//veryfy OTP
router.post("/verify", verify);

//SEND OTP
router.post("/SendOtb", SendOtb);

export default router;
