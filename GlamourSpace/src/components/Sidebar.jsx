import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {}
      <button
        onClick={toggleSidebar}
        className=" md:hidden absolute top-16 left-1 z-50 bg-gray-800 text-white w-10 h-10 rounded flex items-center justify-center shado "
      >
        Menu
      </button>

      <aside
        className={`w-64 md:static min-h-screen bg-gray-100 text-gray-900 border-r border-gray-500 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-4`}
      >
        <div className="p-4">
          <h2 className="text-l font-bold mb-4">Documentation</h2>
          <nav className="space-y-2">
            <Link
              to={"/overview"}
              className="block px-3 py-2 hover:underline font-semibold text-slate-700"
            >
              Overview
            </Link>
            <Link
              to={"/installation"}
              className="block px-3 py-2 hover:underline font-semibold text-slate-700"
            >
              Installation
            </Link>
            <Link
              to={"/features"}
              className="block px-3 py-2 hover:underline font-semibold text-slate-700"
            >
              Features
            </Link>
            <Link
              to={"/usage"}
              className="block px-3 py-2 hover:underline font-semibold text-slate-700"
            >
              Usage
            </Link>
            <Link
              to={"/supporteddevices"}
              className="block px-3 py-2 hover:underline font-semibold text-slate-700"
            >
              SupportedDevices
            </Link>
            <Link
              to={"/faqs"}
              className="block px-3 py-2 hover:underline font-semibold text-slate-700"
            >
              FAQs
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}

// className={` absolute md:static top-0 left-0 h-full w-64 bg-gray-100 text-gray-900 border-r border-gray-500  `}
