import Feedback from "../schema/feedback.model.js";


export const giveFeedback = async (req, resp, next) => {
    const { username, feedback, rating } = req.body;
    const newFeedback = new Feedback({username, feedback, rating});
    try {
        if (newFeedback) {
            const savedFeedback = await newFeedback.save();
            resp.status(200).send(savedFeedback);
        } else resp.status(404).send("Please check the required fields")
    } catch (error) {
        next(error);
    }
}

export const getFeddbacks = async (req, resp, next) => {
    try {
        const feedbacks = await Feedback.find()
        resp.status(200).json(feedbacks);
    } catch (error) {
        next(error)
    }
}