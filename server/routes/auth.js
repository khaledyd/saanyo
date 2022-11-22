import express from "express";
import { googleAuth, signin, signup, lots } from "../controllers/auth.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

const router = express.Router();

//CREATE A USER
router.post("/signup",signup)

//SIGN IN
router.post("/signin", signin)

//GOOGLE AUTH
router.post("/google", googleAuth)

//LOT CREATION
router.post("/lots", lots)


export default router;
