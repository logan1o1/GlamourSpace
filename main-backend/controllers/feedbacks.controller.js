import Feedback from "../schema/feedback.model.js";


export const giveFeedback = async (req, resp, next) => {
    const { username, feedback, rating } = req.body;
    const newFeedback = new Feedback({ username, feedback, rating });
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

export const like = async (req, resp, next) => {
    const {userId} = req.body
    try {
        const result = await Feedback.findByIdAndUpdate(req.body.feedbackId,{
            $push:{likes: userId}
        }, {new: true})

        if (!result) {
            resp.status(422).send("Issue while liking")
        }
        resp.status(200).json(result);
    } catch (error) {
        next(error);
    }
}
export const dislike = async (req, resp, next) => {
    const {userId} = req.body
    try {
        const result = await Feedback.findByIdAndUpdate(req.body.feedbackId,{
            $pull:{likes: userId}
        }, {new: true})

        if (!result) {
            resp.status(422).send("Issue while disliking")
        }
        resp.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

export const comment = async (req, resp, next) => {
    const comment = {
        userName: req.body.userName,
        content: req.body.content
    };
    try {
        const result = await Feedback.findByIdAndUpdate(req.body.feedbackId, {
            $push: {comments: comment}
        }, {new: true})
        // .populate("comments.postedBy", "_id username", { strictPopulate: false })

        if (!result) {
            resp.status(422).send("Issue while commenting");
        }
        resp.status(200).json(result);
    } catch (error) {
       next(error) 
    }
}

