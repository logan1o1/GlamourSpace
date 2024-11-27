import React from 'react'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-100 via-blue-50 to-blue-100 min-h-screen flex flex-col items-center justify-center px-6">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Welcome to <span className="text-blue-600">GlamourSpaceAR</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          Transform your space into a stunning interior design experience with 
          Augmented Reality.
        </p>
      </header>

      {/* Illustration */}
      <div className="flex items-center justify-center mb-8">
        <img
          src="https://via.placeholder.com/600x400"
          alt="AR Interior Designing Illustration"
          className="rounded-xl shadow-lg w-full md:w-3/4 lg:w-1/2"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Download Button */}
        <a
          href="#download"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Download 
        </a>
        {/* Documentation Button */}
        <a
          href="#documentation"
          className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transition"
        >
          Get Started
        </a>
        <a
          href="#feedback"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Give us a feedback
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-600 text-sm">
        © 2024 GlamourSpaceAR. All rights reserved.
      </footer>
    </div>
  )
}
