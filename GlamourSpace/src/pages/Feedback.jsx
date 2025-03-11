import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { useAuthContext } from "../context/AuthContext";
import AddReview from "../components/AddReview";
import { createSvgIcon } from "@mui/material/utils";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEventContext } from "../context/EventContext";

export default function Feedback() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [feedbackTxt, setFeedbackTxt] = useState("");
  const [commentText, setCommentText] = useState("");
  const { authUser } = useAuthContext();
  const user = JSON.parse(authUser);
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [openReplyId, setOpenReplyId] = useState(null);
  const { eventsChanged, triggerEventsChange } = useEventContext();
  const [userAlreadyLiked, setUserAlreadyLiked] = useState(false)

  const handleToggleReply = (id) => {
    if (openReplyId === id) {
      setOpenReplyId(null);
    } else {
      setOpenReplyId(id);
    }
  };

  const onCloseFn = () => {
    setOpen(false);
    setClicked(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/feedback/giveFeedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          feedback: feedbackTxt,
          rating: value,
        }),
      });
      const data = await response.json();
      setLoading(false);
      triggerEventsChange();
      if (data.success != false) {
        setOpen(false);
        setValue(null);
        setFeedbackTxt("");
        setLoading(false);
        setError(false);
        navigate("/feedbacks");
        return;
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const getFeedbacks = async () => {
    try {
      setLoading(true);
      const resp = await fetch("/api/feedback/getFeddbacks", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await resp.json();

      if (data) {
        setLoading(false);
        setFeedbacks(data);
      }
    } catch (error) {
      setLoading(false);
      setError(false);
    }
  };

  useEffect(() => {
    getFeedbacks();
  }, [eventsChanged]);

  const PlusIcon = createSvgIcon(
    // credit: plus icon from https://heroicons.com
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>,
    "Plus"
  );

  const likeFeedback = async (id) => {
    feedbacks.map((feedback) => {
      if (feedback._id == id && feedback.likes.includes[user._id]) setUserAlreadyLiked(true);
    }
    );
    if (userAlreadyLiked) {
      return;
    }
    console.log("userAlreadyLiked");

    try {
      setLoading(true);
      const response = await fetch("/api/feedback/like", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          feedbackId: id,
          userId: user._id,
        }),
      });
      const data = await response.json();
      console.log(data, "like data");
      setLoading(false);
      if (data.success == false) setError(data.message);
      triggerEventsChange();
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const dislikeFeedback = async (id) => {
    const userAlreadyLiked = feedbacks.some((feedback) =>
      feedback.likes.includes(user._id)
    );
    if (!userAlreadyLiked) {
      return;
    }
    try {
      setLoading(true);
      const response = await fetch("/api/feedback/dislike", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          feedbackId: id,
          userId: user._id,
        }),
      });
      const data = await response.json();
      console.log(data);
      setLoading(false);
      if (data.success == false) setError(data.message);
      triggerEventsChange();
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const commentFunc = async (id) => {
    try {
      setLoading(true);
      const response = await fetch("/api/feedback/comment", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          feedbackId: id,
          userName: user.username,
          content: commentText,
        }),
      });
      const data = await response.json();
      console.log(data);
      setLoading(false);
      if (data.success == false) setError(data.message);
      triggerEventsChange();
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center">
      <button
        className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center text-xl hover:bg-blue-600"
        onClick={() => setOpen(true)}
      >
        <PlusIcon onClick={() => setClicked(true)} />
      </button>
      <AddReview open={open} onclose={onCloseFn}>
        <form
          onSubmit={handleSubmit}
          className="w-60 text-xl flex flex-col items-center justify-center"
          action="feedback"
        >
          <h3>Please rate our product:</h3>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <h3>Please give us a feedback:</h3>
          <textarea
            value={feedbackTxt}
            onChange={(event) => setFeedbackTxt(event.target.value)}
            className="p-1"
            name="feedback"
            id="1"
          />
          <br />
          <Button className="w-fit" variant="contained" type="submit">
            {loading ? "loading..." : "Post"}
          </Button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
      </AddReview>
      <br />
      {feedbacks ? (
        <div className="min-h-screen p-5">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-4">
              {feedbacks.map((feed) => (
                <div
                  key={feed._id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h4 className="font-bold text-sm">{feed.username}</h4>
                      <p className="text-gray-400 text-xs">Feb 22</p>
                    </div>
                    <Rating name="read-only" value={feed.rating} readOnly />
                  </div>

                  <p className="text-gray-600 text-sm">{feed.feedback}</p>

                  <div className="flex items-center border-t border-gray-300 pt-3 mt-2">
                    <button
                      onClick={() => likeFeedback(feed._id)}
                      className="flex items-center text-gray-500 hover:text-blue-500 mr-4"
                    >
                      <FaArrowUp />
                    </button>
                    <button
                      onClick={() => dislikeFeedback(feed._id)}
                      className="flex items-center text-gray-500 hover:text-blue-500"
                    >
                      <FaArrowDown />
                    </button>
                    <span className="ml-1">{feed.likes.length} likes</span>

                    <div className="ml-auto flex items-center space-x-2">
                      <p className="text-sm text-gray-500">
                        {feed.comments.length}
                      </p>
                      <button
                        onClick={() => handleToggleReply(feed._id)}
                        className="text-sm text-gray-500 hover:underline"
                      >
                        Replies
                      </button>
                    </div>
                  </div>

                  {openReplyId === feed._id && (
                    <>
                      <div className="mt-2 ml-4">
                        <textarea
                          value={commentText}
                          onChange={(event) =>
                            setCommentText(event.target.value)
                          }
                          className="w-full border border-gray-300 rounded p-2 text-sm"
                          placeholder="Add a public reply..."
                        />
                        <div className="flex space-x-2 mt-2">
                          <button
                            onClick={() => setOpenReplyId(null)}
                            className="text-sm text-gray-500 hover:underline"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => {
                              commentFunc(feed._id);
                              setOpenReplyId(null);
                              return;
                            }}
                            className="text-sm text-blue-500 hover:underline"
                          >
                            Reply
                          </button>
                        </div>
                      </div>
                      {feed.comments && feed.comments.length > 0 && (
                        <div className="mt-4 ml-4 space-y-2">
                          {feed.comments.map((comment) => (
                            <div
                              key={feed._id}
                              className="flex items-start space-x-2"
                            >
                              <div>
                                <p className="text-sm font-semibold">
                                  {comment.userName}
                                </p>
                                <p className="text-sm text-gray-700">
                                  {comment.content}
                                </p>
                                <p className="text-xs text-gray-400">
                                  {comment.createdAt}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h2>No feedbacks</h2>
      )}
    </div>
  );
}
