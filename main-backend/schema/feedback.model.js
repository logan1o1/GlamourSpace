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
        default: 0
    },
    downvote:{
        type: Number,
        default: 0
    },
    reply:{
        type: Array,
        default: []
    }
})

const Feedback = mongoose.model("feedback", feedbackModel);
export default Feedback;