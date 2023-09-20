import User from "../models/user.js";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
const app = express();

import mongoose from "mongoose";
dotenv.config();
// const login = ({email, password}) =>{

// }
const login = async ({ email, password }) => {
    const user = await User.findOne({ email: email }).exec();
    if (!user) {
      throw new Error("User existed!");
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch == true) {
        const payload = {
          email: user.email,
          password: user.password,
        //   data: user
        };
        const secretKey = process.env.SECRET_KEY
        //const secretKey = process.env.SECRET_JWT_KEY

        const token = await jwt.sign(payload, secretKey, {
          expiresIn: "3d", //Time to live
        });
        return {
          ...user.toObject(),
          password: "deo show",
          token,
        };
      } else {
        throw new Error("wrong email");
      }
    }
};

const register = async ({ name, email, password, phoneNumber, address }) => {
  // debugger
  const userExited = await User.findOne({ email }).exec();
  if (userExited != null) {
    throw new Error("User exited");
  }
  //Hash password before create user
  const hashPassword = await bcrypt.hash(
    password,
    parseInt(process.env.SECRET_KEY)
  );

  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
    phoneNumber,
    address,
  });
  return {
    ...newUser._doc,
    password: "cc",
  };
};

export default {
  login,
  register,
};
