import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { TfiMenu } from "react-icons/tfi";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { authUser, logout } = useAuthContext();
  const user = JSON.parse(authUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your search logic here if needed
  };

  return (
    <header className="bg-slate-300 shadow-md z-50 w-full">
      <div className="max-w-6xl mx-auto px-3 py-3 flex justify-between items-center">
        <Link to="/" className="font-bold md:flex items-center space-x-2">
          <img
            src="/Logo.jpg"
            alt="logo"
            className="w-9 h-9 rounded-xl shadow-lg"
          />
          <div className="hidden md:block text-2xl text-slate-800">
            <span className="text-slate-700 font-mono">Glamour</span>
            <span className="text-slate-900 font-mono">Space</span>
            <span className="text-slate-700 font-mono">AR</span>
          </div>
        </Link>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-200 p-2 rounded-xl flex items-center w-28 sm:w-64 mr-2"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600 cursor-pointer" />
          </button>
        </form>

        <ul className="hidden md:flex gap-4 items-center">
          <Link to="/">
            <li className="hover:underline text-slate-700">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:underline text-slate-700">About</li>
          </Link>
          <Link to="/feedbacks">
            <li className="hover:underline text-slate-700">Feedback</li>
          </Link>
          {user && (
            <>
              <Link to="/store">
                <li className="hover:underline text-slate-700">Inventory</li>
              </Link>
              {user.isAdmin && (
                <Link to="/requested-models">
                  <li className="hover:underline text-slate-700">
                    Requested Models
                  </li>
                </Link>
              )}
            </>
          )}
        </ul>

        <div className="md:hidden relative group">
          <TfiMenu size={24} className="cursor-pointer" />
          <ul className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
            <Link to="/">
              <li className="hover:underline text-slate-700 py-1">Home</li>
            </Link>
            <Link to="/about">
              <li className="hover:underline text-slate-700 py-1">About</li>
            </Link>
            <Link to="/feedbacks">
              <li className="hover:underline text-slate-700 py-1">Feedback</li>
            </Link>
            {user && (
              <>
                <Link to="/store">
                  <li className="hover:underline text-slate-700 py-1">
                    Inventory
                  </li>
                </Link>
                {user.isAdmin && (
                  <Link to="/requested-models">
                    <li className="hover:underline text-slate-700 py-1">
                      Requested Models
                    </li>
                  </Link>
                )}
              </>
            )}
          </ul>
        </div>

        {authUser ? (
          <CgProfile
            className="ml-3 cursor-pointer text-slate-700 text-2xl"
            onClick={() => navigate("/profile")}
          />
        ) : (
          <Link to="/sign-in" className="ml-3 hover:underline text-slate-700">
            Sign-in
          </Link>
        )}
      </div>
    </header>
  );
}
