import Product from "../models/productModel.js";
import express from "express";
import { body, validationResult } from "express-validator";
import { userRepository } from "../repositories/index.js";
const getAllUsers = async(req, res) => {};

const getUserById = async(req, res) => {};

const loginUser = async (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  }
  const { email, password } = req.body;
  //Call repository of user
  userRepository.login({ email, password });
  res.send("Login success");
};

const registerUser = async(req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  }
  const { name, email, password, phoneNumber, address} = req.body;
  //Destructoring object
  userRepository.register({ name, email, password, phoneNumber, address});
};

export default {getAllUsers, loginUser, getUserById, registerUser};
