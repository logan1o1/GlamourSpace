import React from 'react'
import { Link } from 'react-router-dom'
// import Installation from '../Docs/Installation'
// import Overview from '../Docs/Overview'
// import Usage from '../Docs/Usage'
// import SupportedDevices from '../Docs/SupportedDevices'
// import FAQs from '../Docs/FaQs'
// import Features from '../Docs/Features'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-100 via-blue-50 to-blue-100 min-h-screen flex flex-col items-center justify-center px-6">
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
        <img
          src="https://via.placeholder.com/600x400"
          alt="AR Interior Designing Illustration"
          className="rounded-xl shadow-lg w-full md:w-3/4 lg:w-1/2"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Link
          to="#download"
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

      {/* <Overview/>
      <Installation/>
      <Usage/>
      <Features/>
      <SupportedDevices/>
      <FAQs/> */}
    </div>
  )
}
