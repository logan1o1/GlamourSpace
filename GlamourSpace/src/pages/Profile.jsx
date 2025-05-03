import React, { useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { SlArrowRight, SlArrowDown } from "react-icons/sl";

export default function Profile() {
  const { authUser, logout, login } = useAuthContext();
  const user = JSON.parse(authUser);
  const navigate = useNavigate();
  const modalRef = useRef();
  const [reqBody, setReqBody] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reqModels, setReqModels] = useState([]);
  const [showDropdownFirst, setShowDropdownFirst] = useState(false);
  const [showDropdownSecond, setShowDropdownSecond] = useState(false);

  const handleToggleFirst = () => {
    setShowDropdownFirst(!showDropdownFirst);
  };

  const handleToggleSecond = () => {
    setShowDropdownSecond(!showDropdownSecond);
  };

  const deleteUser = async () => {
    try {
      setLoading(true);

      const resp = await fetch(`/api/user/delete/${user._id}`, {
        method: "DELETE",
      });

      logout();
      navigate("/sign-in");
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const getReqModels = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/inventory/getReqModels");
      const data = await response.json();
      console.log(data, user.username);
      if (data.success == false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setReqModels(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getReqModels();
  }, []);

  const reqModel = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await fetch("/api/inventory/reqModel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...reqBody,
          username: user.username,
          model: reqBody.model,
          description: reqBody.description,
        }),
      });
      const data = await response.json();

      if (modalRef.current) {
        modalRef.current.close();
      }

      setLoading(false);
      setReqBody({});
      triggerEventsChange();

      if (data.success == false) setError(data.message);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const result = await fetch(`/api/user/update/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: reqBody.username,
          email: reqBody.email,
          password: reqBody.password,
        }),
      });
      const data = await result.json();

      login(JSON.stringify(data));
      setLoading(false);
      setReqBody({});

      if (data.success == false) setError(data.message);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    setReqBody({
      ...reqBody,
      [e.target.id]: e.target.value,
    });
  };

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModalOnOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      modalRef.current.close();
    }
  };

  const signoutHandler = async () => {
    try {
      await fetch("/api/user/logout");
      logout();
      navigate("/sign-in");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center pt-4">
        <h1 className="text-2xl text-slate-800 font-bold mb-6">User Profile</h1>

        <div className=" rounded-md p-6 w-full max-w-sm">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <CgProfile className="text-slate-700" size={48} />
            </div>
          </div>

          <form onSubmit={updateUser} action="profile">
            <div className="space-y-3">
              <input
                type="text"
                id="username"
                value={reqBody.username || ""}
                placeholder={user.username}
                className="w-full border border-gray-300 rounded px-3 py-2"
                onChange={handleChange}
              />
              <input
                type="text"
                id="email"
                value={reqBody.email || ""}
                placeholder={user.email}
                className="w-full border border-gray-300 rounded px-3 py-2"
                onChange={handleChange}
              />
              <input
                type="password"
                id="password"
                value={reqBody.password || ""}
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-3 py-2"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              UPDATE
            </button>
          </form>

          <dialog
            ref={modalRef}
            onClick={closeModalOnOutsideClick}
            className="fixed z-50 top-0.3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 bg-white rounded-lg shadow-xl border border-gray-300"
          >
            <form onSubmit={reqModel} className="space-y-4" action="form">
              <div>
                <label
                  htmlFor="model"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Model name:
                </label>
                <input
                  id="model"
                  type="text"
                  placeholder="Enter model name"
                  value={reqBody.model || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Model description:
                </label>
                <input
                  id="description"
                  type="text"
                  placeholder="Enter Description"
                  value={reqBody.description || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition-colors"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </dialog>
          {user.isAdmin ? (
            ""
          ) : (
            <button
              onClick={openModal}
              className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Request a Model
            </button>
          )}

          <div className="flex flex-col items-center mt-4 space-y-2">
            <button
              onClick={deleteUser}
              className="text-red-500 hover:underline"
            >
              Delete User
            </button>
            <button
              onClick={signoutHandler}
              className="text-slate-700 hover:underline"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl mt-8 border-l-2 border-black pl-5">
        <div className="mb-8">
          <div onClick={handleToggleFirst} className="flex items-center mb-6">
            <button className="text-xl text-slate-700 pl-4 font-bold">
              Requested Models
            </button>
            {showDropdownFirst ? (
              <SlArrowDown className="ml-2 text-slate-700" />
            ) : (
              <SlArrowRight className="ml-2 text-slate-700" />
            )}
          </div>
          <div className="px-3">
            <hr className="border-t-1 border-slate-800" />
          </div>
          {showDropdownFirst && (
            <div className="flex flex-wrap gap-x-5 gap-y-5 p-5 items-start">
              {reqModels.map(
                (item) =>
                  item.username == user.username &&
                  !item.completed && (
                    <div
                      key={item._id}
                      className="bg-white shadow-md rounded-md p-2 w-64 h-32"
                    >
                      <p>
                        <span className="font-semibold">Model:</span>{" "}
                        {item.model}
                      </p>
                      <p>
                        <span className="font-semibold">Description:</span>{" "}
                        {item.description || "N/A"}
                      </p>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
        <div className="mb-8">
          <div onClick={handleToggleSecond} className="flex items-center mb-6">
            <button className="text-xl text-slate-700 pl-4 font-bold">
              Request Completed
            </button>
            {showDropdownSecond ? (
              <SlArrowDown className="ml-2 text-slate-700" />
            ) : (
              <SlArrowRight className="ml-2 text-slate-700" />
            )}
          </div>
          <div className="px-3">
            <hr className="border-t-1 border-slate-800" />
          </div>
          {showDropdownSecond && (
            <div className="flex flex-wrap gap-x-5 gap-y-5 p-5 items-start">
              {reqModels.map(
                (item) =>
                  item.username == user.username &&
                  item.completed && (
                    <div
                      key={item._id}
                      className="bg-white shadow-md rounded-md p-2 w-64 h-32"
                    >
                      <p>
                        <span className="font-semibold">Model:</span>{" "}
                        {item.model}
                      </p>
                      <p>
                        <span className="font-semibold">Description:</span>{" "}
                        {item.description || "N/A"}
                      </p>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
