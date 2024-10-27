import { type } from "express/lib/response";
import mongoose from "mongoose";

const feedbackModel = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    feedback:{
        type: String,
    },
    rating:{
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    upvote:{
        type: Number,
    },
    downvote:{
        type: Number
    },
    reply:{
        type: Array
    }
})

const Feedback = mongoose.model("feedback", feedbackModel);
export default Feedback;