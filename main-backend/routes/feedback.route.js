import express from "express";
import { comment, dislike, getFeddbacks, giveFeedback, like } from "../controllers/feedbacks.controller.js";
import { verifyToken } from "../middlewares/verifyUser.js";

const feedbackRouter = express.Router()

feedbackRouter.post("/giveFeedback", giveFeedback);
feedbackRouter.get("/getFeddbacks", getFeddbacks);
feedbackRouter.put("/like", like);
feedbackRouter.put("/dislike", dislike);
feedbackRouter.put("/comment", comment)

export default feedbackRouter;