import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  // const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  // const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="bg-slate-300 shadow-md ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white' to="/">
          <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
            <span className="text-slate-600 font-mono">Glamour</span>
            <span className="text-slate-800 font-mono"> Space</span>
            <span className="text-slate-600 font-mono"> AR</span>
          </h1>
        </Link>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-200 p-2 rounded-xl flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600 cursor-pointer" />
          </button>
        </form>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline hover:underline text-slate-800">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:underline text-slate-800">
              About
            </li>
          </Link>
          <Link to="/feedbacks">
            <li className="hidden sm:inline hover:underline text-slate-800">
              Feedback
            </li>
          </Link>
          <Link to="/store">
            <li className="hidden sm:inline hover:underline text-slate-800">
              Inventory
            </li>
          </Link>
          <Link to="/sign-in" className="hover:underline text-slate-800">Sign-in</Link>
          {/* {currentUser ? (
            <Link
              className="hover:underline text-slate-800"
            >Log-out</Link>
          ) : (
            <Link to={"/signin"} className="hover:underline text-slate-800">Sign-in</Link>
          )} */}
        </ul>
      </div>
    </header>
  );
}
