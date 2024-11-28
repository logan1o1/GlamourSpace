import React, { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";



const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState("overview");

  const menuItems = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "instalation", label: "Installation" },
    { id: "usages", label: "Usage" },
    { id: "supportedDevices", label: "Supported Devices" },
    { id: "faqs", label: "FAQs" },
    { id: "contact-support", label: "Contact Support" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-50 bg-slate-300 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 z-40`}
    >
      {/* Sidebar Header */}
      <div className="p-4 font-bold text-lg flex justify-between items-center">
        <span>Get Started</span>
        <button
          className=" focus:outline-none"
          onClick={toggleSidebar}
        >
          <TfiMenu size={24} />
        </button>
      </div>

      {/* Menu Items */}
      <ul className="mt-4">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer p-2 pl-4 ${
              activeItem === item.id
                ? "bg-gray-700 text-white"
                : "hover:bg-gray-600"
            }`}
            onClick={() => setActiveItem(item.id)}
          >
            <Link to={item.id}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
