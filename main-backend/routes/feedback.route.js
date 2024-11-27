import express from "express";
import { getFeddbacks, giveFeedback } from "../controllers/feedbacks.controller.js";

const feedbackRouter = express.Router()

feedbackRouter.post("/giveFeedback", giveFeedback)
feedbackRouter.get("/getFeddbacks", getFeddbacks)

export default feedbackRouter;