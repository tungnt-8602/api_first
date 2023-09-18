import express from "express";
import {body, validationResult} from 'express-validator'

import {userController} from "../controllers/index.js"

const userRouter = express.Router();

//Activities ->  user object
userRouter.get('/', async (req, res) => {
    res.send("Get all users");
});

userRouter.get('/:id', async (req, res) => {
    res.send("Get user by userid");
});

userRouter.post('/register', async (req, res) => {
    res.send("Register a new user");
});

userRouter.post('/login', 
    body("email").isEmail().withMessage("Invalid email type"),
    body("password").isLength({min:5}).withMessage("Invalid password length (> 5)"),
    userController.loginUser
    );

userRouter.put('/edit', async (req, res) => {
    res.send("Edit an user profile");
});

export default userRouter