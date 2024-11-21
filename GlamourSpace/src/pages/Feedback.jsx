import React, { useState } from "react";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import AddReview from "../components/AddReview";

export default function Feedback() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const { authUser } = useAuthContext;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center h-full">
      <Button onClick={() => setOpen(true)} variant="contained">
        Give us a feedback
      </Button>
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
          <textarea className="p-1" name="feedback" id="1" />
          <br />
          <Button className="w-fit" variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </AddReview>
      map
    </div>
  );
}
