import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { TfiMenu } from "react-icons/tfi";

export default function Navbar({ toggleSidebar }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { authUser, logout } = useAuthContext();
  // const [value, setValue] = React.useState("fruit");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const signoutHandler = async () => {
    try {
      await fetch("/api/user/logout");
      logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className=" bg-slate-300 shadow-md z-50">
      <button
        className="fixed pl-1 pt-5 w-5 h-5 inline-block rounded-full "
        onClick={toggleSidebar}
      >
        <TfiMenu size={24} />
      </button>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
          to="/"
        >
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

        <ul className="hidden md:flex gap-4 ">
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
          <Link to="/requested-models">
            <li className="hidden sm:inline hover:underline text-slate-800">
              Requsted Models
            </li>
          </Link>
        </ul>
        <select
          onChange={(event) => {
            navigate(event.target.id);
          }}
          className="flex gap-4 md:hidden"
        >
          <option
            id=""
            className="hidden sm:inline hover:underline text-slate-800"
          >
            Home
          </option>
          <option
            id="about"
            className="hidden sm:inline hover:underline text-slate-800"
          >
            About
          </option>
          <option
            id="feedbacks"
            className="hidden sm:inline hover:underline text-slate-800"
          >
            Feedback
          </option>
          <option
            id="store"
            className="hidden sm:inline hover:underline text-slate-800"
          >
            Inventory
          </option>
        </select>
        {authUser ? (
          <BiLogOut
            onClick={signoutHandler}
            className="hover:cursor-pointer text-slate-800 text-xl"
          />
        ) : (
          <Link to={"/sign-in"} className="hover:underline text-slate-800">
            Sign-in
          </Link>
        )}
      </div>
    </header>
  );
}
