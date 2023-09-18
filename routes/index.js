import userRouter from "./user.js";
import productRouter from "./product.js";
import express from "express";
const commonApp = express();

commonApp.use('/products', productRouter);
commonApp.use('/users', userRouter);

export default commonApp;

