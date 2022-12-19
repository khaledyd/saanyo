import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";
import Otbcode from "../models/Otbcode.js";
import nodemailer from "nodemailer";

/// sign up

export const signup = async (req, res, next) => {
  try {
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const saltt = await bcrypt.genSalt(10);
    const hashedPasss = await bcrypt.hash(req.body.confirmPassword, saltt);

    if (password !== confirmPassword) {
      return res.status(500).send({ message: "Passwords Must be same" });
    }

    const newUser = new User({
      displayName: req.body.displayName,
      email: req.body.email,
      password: hashedPass,
      confirmPassword: hashedPasss,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

//signin

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = await bcrypt.compare(req.body.password, user.password);

    if (!isCorrect) return next(createError(400, "Wrong Credentials!"));

    const token = jwt.sign({ id: user._id }, process.env.jwt);
    const { password, ...others } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};

//veryfy otp

export const verify = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json("Wrong credentials!");
    }
    const userr = await Otbcode.findOne({ code: req.body.code });
    if (!userr) {
      res.status(400).json("Wrong credentials!");
    } else {
      const userrr = await Otbcode.findOne({ email: req.body.email });
      if (user.email === userrr.email) {
        const { password, ...others } = user._doc;
        res.status(200).json(others);
      }
    }
  } catch (err) {
    res.status(500).json("wrong credentials");
  }
};

/////send otp

export const SendOtb = async (req, res) => {
  const email = req.body.email;

  // Check if email exists
  const userExists = await User.findOne({ email });
  if (!userExists)
    return res.status(400).send({ message: "email not registered" });

  console.log(userExists.email);

  // Delete previous OTP codes;
  const previousOTPs = await Otbcode.find({ email: email });

  for (let previousOTP of previousOTPs) {
    Otbcode.findOneAndDelete(email, function (err, result) {
      if (err) {
        console.log(err);
      }
    });
  }
  const generatedOTP = Math.floor(1000 + Math.random() * 9000);
  try {
    await Otbcode.create({
      email: userExists.email,
      code: generatedOTP,
    });
    sendEmail(generatedOTP, userExists.email);
  } catch (error) {
    console.log(error);
  }
  return res.status(200).send({ message: "OTP Sent" });
};

/// send email

function sendEmail(code, receiver) {
  const yourEmail = process.env.email;
  const yourPassword = process.env.appPassword;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: yourEmail,
      pass: yourPassword,
    },
  });
  const mailOptions = {
    from: yourEmail,
    to: `${receiver}`,
    subject: "Verification Code",
    text: `Dear User, your verification code is ${code}.`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    }
  });
}
