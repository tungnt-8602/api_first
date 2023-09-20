import User from "../models/user.js";
import bcrypt from "bcrypt";
import * as dotenv from 'dotenv';
import express from 'express';
const app = express()

import mongoose from 'mongoose';
dotenv.config();
const login = ({email, password}) =>{
    console.log(`Email: ${email}, Password: ${password}`);
}

const register = async({
    name,
    email, 
    password,
    phoneNumber,
    address
}) =>{
    // debugger
    const userExited = await User.findOne({ email}).exec()
    if(userExited != null){
        throw new Error("User exited")
    }
    //Hash password before create user
    const hashPassword = await bcrypt.hash(password, parseInt(process.env.SECRET_KEY))

    const newUser = await User.create({name, email, password: hashPassword, phoneNumber, address})
    return {
        ...newUser._doc,
        password: "cc"
    }
}

export default {
    login,
    register
}