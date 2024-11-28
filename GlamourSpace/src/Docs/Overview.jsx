import React from 'react'

export default function Overview() {
  return (
    <div className="min-h-screen bg-blue-50 flex  justify-center px-4">
      <div className="max-w-4xl w-full">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Overview
        </h2>
        {/* Content */}
        <div className="text-gray-700 space-y-6">
          <p className="leading-relaxed text-justify">
            <strong className="text-blue-600">Glamour Space AR</strong> is a
            cutting-edge augmented reality (AR) application designed to
            revolutionize the way you interact with and design your living
            spaces. By leveraging the power of AR,{" "}
            <strong className="text-blue-600">Glamour Space AR</strong> allows
            you to visualize, customize, and experiment with interior design
            elements in real-time, directly within your environment. Whether
            you’re placing furniture, choosing wall colors, or exploring
            flooring options,{" "}
            <strong className="text-blue-600">Glamour Space AR</strong> helps
            you bring your design ideas to life before making any decisions.
          </p>
          <p className="leading-relaxed text-justify">
            With an intuitive and user-friendly interface,{" "}
            <strong className="text-blue-600">Glamour Space AR</strong> offers a
            seamless and immersive experience, allowing homeowners, interior
            designers, and real estate professionals to easily plan and
            visualize their dream spaces.{" "}
            <strong className="text-blue-600">Glamour Space AR</strong> combines
            advanced features such as real-time object placement, cost
            estimation, lighting simulation, and 3D model customization, all in
            a single platform, helping you make informed design choices and
            avoid costly mistakes.
          </p>
          <p className="leading-relaxed text-justify">
            Whether you're a novice or an expert,{" "}
            <strong className="text-blue-600">Glamour Space AR</strong>{" "}
            empowers you to create personalized, functional, and aesthetically
            pleasing spaces with ease and efficiency.
          </p>
        </div>
      </div>
    </div>
  )
}
