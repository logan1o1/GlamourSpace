import React from "react";

export default function SupportedDevices() {
  return (
    <div className="from-gray-100 via-blue-50 to-blue-100 min-h-screen px-4 py-8">
      <div className="max-w-5xl mx-auto rounded-lg p-6">

      <h2 className="text-xl font-semibold text-slate-700 mb-2">Supported Devices</h2>
      <p className="text-gray-700 leading-relaxed">
        Glamour Space AR supports a wide range of Android devices: <br />
        Operating System: Android 8.0 (Oreo) or higher. <br />
        Compatibility: Devices with ARCore support. <br />
        Hardware: Minimum 2GB RAM and a functional rear camera. <br />
        For best performance, we recommend using newer devices released after 2022.. <br />
      </p>
      </div>
    </div>
  );
}
