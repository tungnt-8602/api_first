import Product from "../models/productModel.js";
import express from "express";
import {body, validationResult} from 'express-validator'


// const productController = {
//   getAllProducts: async (req, res) => {
//     const p1 = new Product({
//       name: "P1",
//       quantity: 100,
//       price: 20.4,
//       image: "logo1.png",
//     });
//     const p2 = new Product({
//       name: "P2",
//       quantity: 200,
//       price: 10.4,
//       image: "logo2.png",
//     });
//     const list = [p1];
//     list.push(p2);
//     res.status(200).json(list);
//   },
// };

const userValidation = {
  userValidation: async (req, res) => {
    // debugger
    const err = validationResult(req)
    if(!err.isEmpty()){
        return res.status(400).json({errors: err.array()});
    }
    res.send("Login success")
  }
}

export default userValidation;
// export default productController;
