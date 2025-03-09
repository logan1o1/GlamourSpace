import express from "express";
import {deleteAcc, login, logout, signup, updateUser } from "../controllers/users.controller.js";
import { verifyToken } from "../middlewares/verifyUser.js";

const userRouter = express.Router();

userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.get("/logout", logout)
userRouter.delete("/delete/:id",  deleteAcc)
userRouter.put("/update/:id", updateUser)

export default userRouter;