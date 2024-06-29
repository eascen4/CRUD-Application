import express from "express";
import { createUser, deleteUser, getUsers } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get('/', getUsers)
userRouter.post('/', createUser)
userRouter.post('/delete', deleteUser)

export {userRouter}