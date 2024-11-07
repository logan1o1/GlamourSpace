import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        const results = await fetch("/api/user/login", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await results.json();
        if (data.success == false) {
          setLoading(false);
          setError(data.message);
          return;
        }
        localStorage.setItem("auth_user", data.username);
        
        setLoading(false);
        setError(null);
        navigate("/feedbacks");
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
  
    return (
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="border p-2 rounded-lg"
            id="username"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-lg"
            id="password"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-slate-700 text-white p-2 rounded-lg hover:opacity-90 disabled:opacity-80 uppercase"
          >
            {loading ? "loading..." : "Sign in"}
          </button>
          {/* <OAuth/> */}
        </form>
        <div className="flex gap-2 mt-5">
          <p>Don't have an account?</p>
          <Link to="/sign-up">
            <span className="text-blue-600">Sign up</span>
          </Link>
        </div>
        {error && <p className="text-red-600">{error}</p>}
      </div>
    );
}