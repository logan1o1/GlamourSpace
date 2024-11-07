import express from "express";
import {login, logout, signup } from "../controllers/users.controller.js";
import { verifyToken } from "../middlewares/verifyUser.js";

const userRouter = express.Router();

userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.get("/logout", logout)
// userRouter.delete("/delete/:id", verifyToken, deleteAcc)

export default userRouter;