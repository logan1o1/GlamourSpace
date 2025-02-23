import jwt from "jsonwebtoken";
import { handleError } from "./error.js";
import { log } from "console";

export const verifyToken = (req, resp, next) => {
  const token = req.cookies.access_token;
  
  if (!token) return next(handleError(401, "Unauthorized"));
  console.log(token);
  

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(handleError(403, "Forbidden"));

    req.user = user;
    next();
  });
};