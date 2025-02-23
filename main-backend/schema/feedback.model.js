import mongoose from "mongoose";

mongoose.set('strictPopulate', false);

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
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    comments: [
        {
            content: { type: String },
            userName: { type: String, ref: "User" },
        },
    ],
}, { timestamps: true })

const Feedback = mongoose.model("feedback", feedbackModel);
export default Feedback;