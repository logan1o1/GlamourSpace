import React from "react";

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Features
        </h2>

        {/* Features List */}
        <div className="space-y-8">
          {/* Individual Feature */}
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const featuresData = [
  {
    title: "1. Furniture Placement",
    description:
      "Visualize furniture in your space with real-time scaling, rotation, and placement using AR. Choose from a wide variety of 3D furniture models and see how they fit and look in your room before making a purchase.",
  },
  {
    title: "2. Wall Painting & Wallpaper Placement",
    description:
      "Experiment with different wall colors and textures using our real-time painting and wallpaper features. See your walls transform instantly, helping you choose the perfect color or design for your space.",
  },
  {
    title: "3. Floor Design and Covering",
    description:
      "Try various flooring and covering options, including tiles, wood, and carpet, all in real-time. Place mats and rugs to see how they complement your overall room design.",
  },
  {
    title: "4. AR Measurement Tool",
    description:
      "Measure distances and areas with precision using the integrated AR measurement tool. Ensure that your selected furniture fits perfectly within your available space before committing to a purchase.",
  },
  {
    title: "5. Lighting Simulation",
    description:
      "Simulate different lighting conditions (daylight, evening, artificial lighting) to visualize how your design elements look under various lighting scenarios. Make more informed design decisions based on how lighting will affect your space throughout the day.",
  },
  {
    title: "6. Budget and Cost Estimation",
    description:
      "Receive cost estimates based on your selected design elements, helping you stay within your budget. Compare the costs of various furniture and decor items, ensuring you make cost-effective decisions.",
  },
  {
    title: "7. 3D Model Customization",
    description:
      "Customize a vast library of 3D models and interior decor to suit your unique style and preferences. If you can't find the item you need, request custom 3D models and have them added to the app's inventory.",
  },
  {
    title: "8. Voice Command Integration",
    description:
      "Control the app hands-free with voice commands to resize, rotate, scale, or delete objects, or even navigate between features. Enjoy a more interactive and hands-free experience, especially when multitasking.",
  },
  {
    title: "9. Large Inventory of 3D Models",
    description:
      "Access a wide range of 3D models from furniture to home decor, all available for placement and customization within your space. Browse through various categories and easily filter by style, color, or type to find exactly what you're looking for.",
  },
  {
    title: "10. User-Friendly Interface",
    description:
      "The app boasts a clean, intuitive interface that simplifies the process of navigating through different design features. Easy-to-use controls ensure that both beginners and professionals can quickly get started and design their spaces without a steep learning curve.",
  },
];
