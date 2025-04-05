import React from "react";
import { Link } from 'react-router-dom';


export default function FAQs() {
  return (
    <div className="min-h-screen from-gray-100 via-blue-50 to-blue-100 px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          FAQs
        </h2>
        <div className="space-y-2">
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              1. Is Glamour Space AR free to use?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes, the core features of Glamour Space AR are free. Premium
              subscriptions unlock additional tools, including advanced budget
              comparison and custom model requests.
            </p>
          </div>
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              2. Can I use Glamour Space AR for designing commercial spaces?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Absolutely! The app is versatile and can be used for both
              residential and commercial projects.
            </p>
          </div>
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              3. How accurate is the floor mapping feature?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Glamour Space AR utilizes advanced ARCore technology for accurate
              mapping. However, for critical dimensions, we recommend verifying
              with a physical measuring tool.
            </p>
          </div>
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              4. Can I import my own design elements into the app?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes! Our "Import from Inventory" feature allows you to upload your
              own 3D models or design assets.
            </p>
          </div>
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              5. What happens if my device doesn’t support ARCore?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              If your device lacks ARCore support, you won’t be able to use AR
              functionalities. However, you can still browse the catalog and
              save screenshots of preconfigured designs.
            </p>
          </div>
          <div className="rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              6. How do I get in touch for support or feature requests?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Reach out via the Help & Support section in the app or email us at 
              <Link className="text-blue-600 pl-1" to={"mailto:glamourspacear@gmail.com"}>support@glamourspaceAR.com</Link>.
            </p>
          </div>
        </div>
        <div className="text-right mt-8">
          <Link to={"/supporteddevices"} className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Next -{">"}
          </Link>
        </div>
      </div>
    </div>
  );
}
