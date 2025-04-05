import React from "react";
import { Link } from 'react-router-dom';


export default function Installation() {
  return (
    <div className="min-h-screen from-gray-100 via-blue-50 to-blue-100 px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Installation
        </h2>

        <div className="space-y-2">
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              1. Download the App
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Visit our website's landing page at <Link className="text-blue-600" to={"https://glamour-space.onrender.com"}>www.glamour-space.com</Link> to
              download the latest version of Glamour Space AR. Note: The app is
              not yet available on the Google Play Store but will be launched
              there in the future.
            </p>
          </div>
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              2. Install the Application
            </h3>
            <p className="text-gray-700 leading-relaxed">
              - Once the download is complete, open the file to install the app
              on your Android <br />
              - Ensure that your device allows installations from unknown
              sources. <br />- To enable this, go to Settings {
                ">"
              } Security {">"} Allow installation from unknown sources.
            </p>
          </div>
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              4. Enable Permissions
            </h3>
            <p className="text-gray-700 leading-relaxed">
              - Grant access to your device’s camera for AR functionality.{" "}
              <br />- Enable storage permissions to save your screenshots and
              projects.
            </p>
          </div>
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              5. Personalize Settings
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Tailor the app's settings to your preferences, such as selecting
              measurement units or default design options.
            </p>
          </div>
          <p className="text-center">You're all set! Begin exploring the innovative features of Glamour Space AR and start creating your dream spaces.</p>
        </div>
        <div className="text-right mt-8">
          <Link to={"/features"} className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Next -{">"}
          </Link>
        </div>
      </div>
    </div>
  );
}