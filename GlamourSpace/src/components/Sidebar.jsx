import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-screen bg-slate-100 text-gray-900 border-r border-black transition-transform duration-300 ${
          isOpen ? "translate-x-0 w-48" : "-translate-x-full"
        } md:translate-x-0 z-40 pt-20`}
      >
        <button
          onClick={toggleSidebar}
          className={`absolute -right-5 top-24 z-50 bg-white rounded-full p-2 border border-gray-200 shadow-md hover:bg-gray-50 transition-all`}
        >
          {isOpen ? (
            <SlArrowLeft className="text-slate-900 text-sm" />
          ) : (
            <SlArrowRight className="text-slate-900 text-sm" />
          )}
        </button>

        <div className={`p-4 ${!isOpen && "hidden"}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg text-slate-800 font-bold">Documentation</h2>
          </div>
          <nav className="space-y-2">
            {["Overview", "Installation", "Features", "Usage", "FAQs", "SupportedDevices"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block px-3 py-2 hover:underline font-semibold text-slate-700 hover:bg-gray-200 rounded transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}