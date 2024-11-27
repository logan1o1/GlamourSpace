import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { useAuthContext } from "../context/AuthContext";
import AddReview from "../components/AddReview";
import { createSvgIcon } from "@mui/material/utils";
import {
  FaArrowUp,
  FaArrowDown,
  FaComment,
} from "react-icons/fa";

export default function Feedback() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [feedbackTxt, setFeedbackTxt] = useState("");
  const { authUser } = useAuthContext();
  const user = JSON.parse(authUser);
  const [feedbacks, setFeedbacks] = useState([]);

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

      if (data.success != false) {
        setOpen(false);
        setValue(null);
        setFeedbackTxt("");
        setLoading(false);
        setError(false);
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
        <PlusIcon />
      </button>
      <AddReview open={open} onclose={() => setOpen(false)}>
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
      {feedbacks ? 
      feedbacks.map((feed) => (
        <div className="p-5 rounded-md  mx-auto mt-6 shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <div className="ml-3 ">
              <h4 className="font-bold text-sm">{feed.username}</h4>
              <p className="text-gray-400 text-xs">Feb 22</p>
            </div>
            <Rating
              name="read-only"
              value={feed.rating}
              readOnly
            />
          </div>

          <div className="mb-4">
            <p className=" text-sm">
              {feed.feedback}
              <span className="text-blue-400 cursor-pointer hover:underline hidden">
                Read more
              </span>
            </p>
          </div>

          <div className="flex items-center border-t border-gray-700 pt-3">
            <div className="flex items-center mr-5 cursor-pointer">
              <FaArrowUp className="text-gray-400 hover:text-blue-400" />
              <span className="ml-2 text-sm text-gray-400">5K</span>
            </div>
            <div className="flex items-center mr-5 cursor-pointer">
              <FaArrowDown className="text-gray-400 hover:text-blue-400" />
            </div>
            <div className="flex items-center mr-5 cursor-pointer">
              <FaComment className="text-gray-400 hover:text-blue-400" />
              <span className="ml-2 text-sm text-gray-400">74</span>
            </div>
          </div>
        </div>
      )) : (
        <h2>No feedbacks</h2>
      )}
    </div>
  );
}
