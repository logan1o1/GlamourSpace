import bcryptjs from "bcryptjs";
import User from "../schema/user.model.js"
import { handleError } from "../middlewares/error.js";
import jwt from "jsonwebtoken";
import generateAndSetTokens from "../middlewares/GenerateAndSetCookies.js";

export const signup = async (req, resp, next) => {
    const { username, email, password } = req.body;
    const hashPassword = bcryptjs.hashSync(password, 5);
    const newUser = new User({ username, email, password: hashPassword });
    try {
        if (newUser) {
            const result = await newUser.save()
            resp.status(200).send(result)
        } else resp.status(400).send("User couldn't be created")
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
        generateAndSetTokens(validUser._id, resp);
        resp.status(200).json(validUser);
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
    try {
        await User.findByIdAndDelete(req.params.id);
        resp.status(200).clearCookie("access_token").json("User has been deleted...");
    } catch (error) {
        next(error);
    }
}

export const updateUser = async (req, resp, next) => {
    try {
        const validUser = await User.findById(req.params.id);
        if (!validUser) return next(handleError(404, "User not found"));

        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 5);
      
            const updatedUser = await User.findByIdAndUpdate(
              req.params.id,
              {
                $set: {
                  username: req.body.username,
                  email: req.body.email,
                  password: req.body.password,
                },
              },
              { new: true }
            );
      
            const { password, ...rest } = updatedUser._doc;
            resp.status(200).json(rest);
        } else{
            next(handleError(402, "Please fill the password section with the correct password before updating, for security purposes"))
        }
    } catch (error) {
        next(error)
    }
}