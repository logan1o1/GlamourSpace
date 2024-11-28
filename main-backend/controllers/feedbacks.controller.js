import Feedback from "../schema/feedback.model.js";


export const giveFeedback = async (req, resp, next) => {
    const { username, feedback, rating, likes } = req.body;
    const newFeedback = new Feedback({ username, feedback, rating, likes });
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

// export const createComment = async (req, resp, next) => {
//     try {
//         const postId = req.params.id;
//         const { content } = req.body;

//         const post = await Feedback.findByIdAndUpdate(
//             postId,
//             {
//                 $push: { comments: { user: req.user._id, content } },
//             },
//             { new: true }
//         ).populate("author", "name email username headline profilePicture");

//         resp.status(200).json(post);
//     } catch (error) {
//         console.error("Error in createComment controller:", error);
//         next(error);
//     }

// }

// export const likePost = async (req, resp, next) => {
//     try {
//         const postId = req.params.id;
//         const post = await Feedback.findById(postId);
//         const userId = req.user._id;

//         if (post.likes.includes(userId)) {
//             // unlike the post
//             post.likes = post.likes.filter((id) => id.toString() !== userId.toString());
//         } else {
//             // like the post
//             post.likes.push(userId);
//         }

//         await post.save();

//         resp.status(200).json(post);
//     } catch (error) {
//         console.error("Error in likePost controller:", error);
//         next(error)
//     }
// }