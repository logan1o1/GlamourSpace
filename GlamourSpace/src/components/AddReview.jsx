import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { useAuthContext } from "../context/AuthContext";

export default function AddReview({open, onclose, children}) {
  const [value, setValue] = useState(null);
  const { authUser } = useAuthContext;

  return (
    <div onClick={onclose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
      <div onClick={(e) => {e.stopPropagation()}} className={`bg-white rounded-xl shadow p-6 transition-all ${open ? "scale-500 opacity-100" : "scale-125 opacity-0"}`}>
      {children}
      </div>
    </div>
  );
}
