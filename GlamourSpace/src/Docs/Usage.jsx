import React from "react";
import { Link } from 'react-router-dom';


export default function Usage() {
  return (
    <div className="min-h-screen from-gray-100 via-blue-50 to-blue-100 px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Usages
        </h2>
        <h4 className="text-xl font-semibold text-slate-800 text-center">
          Unlock the full potential of Glamour Space AR by following these
          simple steps:
        </h4>

        <div className="space-y-2">
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              1. Scan Your Space
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Use your device’s camera to scan the room or area you wish to
              design. The app's AR functionality ensures precise spatial
              recognition for accurate object placement and layout.
            </p>
          </div>
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              2. Start Designing
            </h3>
            <p className="text-gray-700 leading-relaxed">
              - Access the extensive catalog of furniture and decor items to
              place virtually in your room. <br />
              - Map out your floors using the *Floor Mapping* feature to
              experiment with textures and materials. <br />
              - Utilize the *Request Models* feature to request customized
              furniture or decor tailored to your specific requirements. <br />
              - Import your own 3D models using the *Import from Inventory*
              option for complete personalization. <br />
            </p>
          </div>
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              3. Evaluate Your Design Choices
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Use the *Budget Comparison Tool* to assess various options for
              furniture, flooring, and decor. Compare prices and make
              cost-effective decisions without compromising on style.
            </p>
          </div>
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              4. Capture Your Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Save your designs by taking screenshots of your room with the
              added virtual objects. These screenshots can be used for future
              reference, sharing with collaborators, or exploring alternative
              layouts.
            </p>
          </div>
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              5. Explore More Features
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Browse through additional in-app tools and tutorials to make the
              most of Glamour Space AR. The app is designed to empower you,
              whether you're creating a single-room concept or tackling
              large-scale projects.
            </p>
          </div>
        </div>
        <div className="text-right mt-8">
          <Link to={"/faqs"} className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Next -{">"}
          </Link>
        </div>
      </div>
    </div>
  );
}
