import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { useAuthContext } from "../context/AuthContext";
import AddReview from "../components/AddReview";
import { createSvgIcon } from "@mui/material/utils";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Feedback() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [feedbackTxt, setFeedbackTxt] = useState("");
  const { authUser } = useAuthContext();
  const user = JSON.parse(authUser);
  const navigate = useNavigate();
  const [likes, setLikes] = useState(0);
  const [feedbacks, setFeedbacks] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [liked, setLiked] = useState(false); // Tracks if the user liked
  const [disliked, setDisliked] = useState(false); // Tracks if the user disliked

  const handleUpvote = () => {
    if (liked) {
      setLikes(likes - 1); // Remove like if already liked
      setLiked(false);
    } else {
      setLikes(likes + 1 + (disliked ? 1 : 0)); // Add like and undo dislike if applicable
      setLiked(true);
      setDisliked(false); // Reset dislike state
    }
  };

  const handleDownvote = () => {
    if (disliked) {
      setLikes(likes + 1); // Remove dislike if already disliked
      setDisliked(false);
    } else {
      setLikes(likes - 1 - (liked ? 1 : 0)); // Add dislike and undo like if applicable
      setDisliked(true);
      setLiked(false); // Reset like state
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
          likes: likes,
        }),
      });

      const data = await response.json();

      if (data.success != false) {
        setOpen(false);
        setValue(null);
        setFeedbackTxt("");
        setLoading(false);
        setError(false);
        navigate("/feedbacks");
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
  }, []);

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

  return (
    <div className="flex flex-col items-center justify-center h-full">
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
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-5">
          <div className="max-w-4xl mx-auto">
            {/* Feedback Cards in Column Layout */}
            <div className="flex flex-col gap-4">
              {feedbacks.map((feed, index) => (
                <div
                  key={index}
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
                      className="flex items-center text-gray-500 hover:text-blue-500 mr-4"
                      onClick={() => handleUpvote(feed.id)}
                    >
                      <FaArrowUp />
                      <span className="ml-2">{feed.likes}</span>
                    </button>
                    <button
                      className="flex items-center text-gray-500 hover:text-blue-500"
                      onClick={() => handleDownvote(feed.id)}
                    >
                      <FaArrowDown />
                    </button>
                  </div>
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
