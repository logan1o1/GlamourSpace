import React, { useEffect, useRef, useState } from "react";

export default function RequestedModels() {
  const [reqModels, setReqModels] = useState([]);
  const [fileURL, setFileURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(null);
  const [error, setError] = useState(null);
  const modalRef = useRef();

  const uploadFiles = async (event) => {
    setUploading(true);
    const file = event.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload_zip");
    data.append("cloud_name", "dxf7nv9mt");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dxf7nv9mt/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const fileLink = await res.json();
    setFileURL(fileLink.url);

    setUploading(false);
  };

  const completeReq = async (reqId) => {
    try {
      setLoading(true);

      const response = await fetch(`/api/inventory/completeReqModel/${reqId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file: fileURL }),
      });
      const data = await response.json();
      if (!data.success) setError(data.message);
      setFileURL("");
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModalOnOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      modalRef.current.close();
    }
  };

  const getReqModels = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/inventory/getReqModels");
      const data = await response.json();
      if (data.success == false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setReqModels(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getReqModels();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div className="min-h-screen">
      <div className="flex justify-center flex-wrap gap-x-4 gap-y-4 p-4">
        {reqModels.map(
          (item) =>
            !item.completed && (
              <div
                key={item._id}
                className="bg-white shadow-md rounded-md p-2 w-64 h-40 flex flex-col justify-between"
              >
                <div>
                  <p>
                    <span className="font-semibold">Username:</span>{" "}
                    {item.username}
                  </p>
                  <p>
                    <span className="font-semibold">Model:</span> {item.model}
                  </p>
                  <p>
                    <span className="font-semibold">Description:</span>{" "}
                    {item.description || "N/A"}
                  </p>
                </div>

                <dialog
                  ref={modalRef}
                  onClick={closeModalOnOutsideClick}
                  className=" fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 bg-white rounded-lg shadow-xl border border-gray-300 "
                >
                  <form className="space-y-4" action="form">
                    <div>
                      <label
                        htmlFor="model"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Username:
                      </label>
                      <input
                        id="model"
                        type="text"
                        placeholder="Enter model name"
                        value={item.username || ""}
                        readOnly
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="model"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Model name:
                      </label>
                      <input
                        id="model"
                        type="text"
                        placeholder="Enter model name"
                        value={item.model || ""}
                        readOnly
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        File (.zip):
                      </label>
                      <input
                        type="file"
                        onChange={uploadFiles}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      {uploading === true && <p>Uploading...</p>}
                      {uploading === false && (
                        <p className="text-green-600">Successfully Uploaded</p>
                      )}
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={() => completeReq(item._id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition-colors"
                      >
                        Upload Model
                      </button>
                    </div>
                  </form>
                </dialog>

                <button
                  onClick={openModal}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition-colors"
                >
                  Submit Request
                </button>
              </div>
            )
        )}
      </div>
    </div>
  );
}
