import React from "react";

export default function Features() {
  return (
    <div className="min-h-screen from-gray-100 via-blue-50 to-blue-100 px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
          Glamour Space AR equips you with innovative tools to simplify and
          enhance your interior design process:
        </h3>
        <div className="space-y-2">
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              1. Virtual Furniture Placement
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Visualize furniture in your space with real-time scaling,
              rotation, and placement using AR. <br />
              Choose from a wide variety of 3D furniture models and see how they
              fit and look in your room before making a purchase.
            </p>
          </div>
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              2. Floor Mapping
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Map your floor plan accurately using AR technology. <br />
              Experiment with various floor materials, textures, and layouts.
            </p>
          </div>
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              3. Request Models
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Can't find the furniture or decor item you need? Submit a request
              for custom models tailored to your design vision.
            </p>
          </div>
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              4. Import from Inventory
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Use your own 3D models or assets by importing them into the app's
              design library.
            </p>
          </div>
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              5. Budget Comparison
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Compare prices of various furniture pieces, flooring materials,
              and more to stay within your budget. <br />
              Make informed decisions with a breakdown of costs for each design
              option.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
