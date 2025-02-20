import express from "express";
import { getFeddbacks, giveFeedback } from "../controllers/feedbacks.controller.js";
import { verifyToken } from "../middlewares/verifyUser.js";

const feedbackRouter = express.Router()

feedbackRouter.post("/giveFeedback", verifyToken, giveFeedback)
feedbackRouter.get("/getFeddbacks", getFeddbacks)
// feedbackRouter.post("/:id/comment", createComment);
// feedbackRouter.post("/:id/like", likePost);

export default feedbackRouter;