import mongoose from "mongoose";

const feedbackModel = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: [
        {
            content: { type: String },
            user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            createdAt: { type: Date, default: Date.now },
        },
    ],
}, { timestamps: true })

const Feedback = mongoose.model("feedback", feedbackModel);
export default Feedback;