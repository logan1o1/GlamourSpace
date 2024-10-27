import bcryptjs from "bcryptjs";
import User from "../schema/user.model.js"
import { handleError } from "../middlewares/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, resp, next) => {
    const { username, email, password } = req.body;
    const hashPassword = bcryptjs.hashSync(password, 5);
    const newUser = new User({ username, email, password: hashPassword });
    try {
        if (newUser) {
            const result = await newUser.save()
            resp.status(200).send(result)
        } else resp.status(404).send("User doesn't exist")
    } catch (error) {
        next(error)
    }

}

export const login = async (req, resp, next) => {
    const { username, password } = req.body;
    try {
        const validUser = await User.findOne({ username });
        if (!validUser) return next(handleError(404, "User not found"));
        const isValidPassword = bcryptjs.compareSync(password, validUser.password);
        if (!isValidPassword) return next(handleError(401, "Wrong password"));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        // const { password: pass, ...rest } = validUser._doc;
        resp.cookie("access_token", token, { httponly: true }).status(200).json(validUser)
    } catch (error) {
        next(error)
    }
}

export const logout = async (req, resp, next) => {
    try {
        resp.clearCookie("access_token");
        resp.status(200).json("User has been signed out...")
    } catch (error) {
        next(error)
    }
}

export const deleteAcc = async (req, resp, next) => {
    if (req.user.id !== req.params.id) next(handleError(401, "you can only delete your own account"));
  try {
    await User.findByIdAndDelete(req.params.id);
    resp.status(200).clearCookie("access_token").json("User has been deleted...");
  } catch (error) {
    next(error);
  }
}