import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-100 text-gray-900 border-r border-gray-500">
      <div className="p-4">
        <h2 className="text-l font-bold mb-4">Documentation</h2>
        <nav className="space-y-2">
          <Link
          to={"/overview"}
            className="block px-3 py-2 hover:underline font-semibold text-slate-900"
          >
            Overview
          </Link>
          <Link
          to={"/installation"}
            className="block px-3 py-2 hover:underline font-semibold text-slate-900"
          >
            Installation
          </Link>
          <Link
          to={"/features"}
            className="block px-3 py-2 hover:underline font-semibold text-slate-900"
          >
            Features
          </Link>
          <Link
          to={"/usage"}
            className="block px-3 py-2 hover:underline font-semibold text-slate-900"
          >
            Usage
          </Link>
          <Link
          to={"/supporteddevices"}
            className="block px-3 py-2 hover:underline font-semibold text-slate-900"
          >
            SupportedDevices
          </Link>
          <Link
          to={"/faqs"}
            className="block px-3 py-2 hover:underline font-semibold text-slate-900"
          >
            FAQs
          </Link>
        </nav>
      </div>
    </aside>
  );
}
