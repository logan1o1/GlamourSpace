import React from "react";
import { Link } from "react-router-dom";

export default function Home ()
{
  return (
    <div className="bg-gradient-to-br from-gray-100 via-blue-50 to-blue-100 min-h-screen flex flex-col items-center justify-center px-4 py-10 w-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Welcome to <span className="text-blue-600">GlamourSpaceAR</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          Transform your space into a stunning interior design experience with
          Augmented Reality.
        </p>
      </header>

      <div className="flex items-center justify-center mb-8">
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-5/6 ">
          <img
            src="https://res.cloudinary.com/dxf7nv9mt/image/upload/v1755855355/WhatsApp_Image_2025-08-22_at_14.57.42_028e3687_wk4swv.jpg"
            alt="Modern Living Room AR"
            className="rounded-xl shadow-lg object-cover w-full h-56 md:h-64 lg:h-72 transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://res.cloudinary.com/dxf7nv9mt/image/upload/v1755855279/WhatsApp_Image_2025-08-22_at_14.57.43_95860725_tuwjk9.jpg"
            alt="AR Furniture Placement"
            className="rounded-xl shadow-lg object-cover w-full h-56 md:h-64 lg:h-72 transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://res.cloudinary.com/dxf7nv9mt/image/upload/v1755855279/WhatsApp_Image_2025-08-22_at_14.57.43_d862fd46_kxzzas.jpg"
            alt="AR Decor Preview"
            className="rounded-xl shadow-lg object-cover w-full h-56 md:h-64 lg:h-72 transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://res.cloudinary.com/dxf7nv9mt/image/upload/v1755855279/WhatsApp_Image_2025-08-22_at_14.58.33_b04acf55_y8tcxp.jpg"
            alt="AR Decor Preview"
            className="rounded-xl shadow-lg object-cover w-full h-56 md:h-64 lg:h-72 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Link
          to="https://drive.google.com/file/d/1C2Ph0Y_SF_Xe_8ym15zS6lc3DSx8vQh_/view?usp=sharing"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Download
        </Link>
        <Link
          to="/overview"
          className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transition"
        >
          Get Started
        </Link>
        <Link
          to="/feedbacks"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Give us a feedback
        </Link>
      </div>
      <div className="bg-blue-100 max-w-5xl mx-auto shadow-md mt-4 rounded-lg p-6">
        <h4>*Note:</h4>
        <p>
          Not all mobile phones have AR support, so please check the <Link className="text-blue-500" to={ "/supporteddevices" }>Supported
            devices</Link> section to see if your device has the required features or
          not, if it doesn't have the required features, then there is no point
          in downloading the application.
        </p>
      </div>
    </div>
  );
}
