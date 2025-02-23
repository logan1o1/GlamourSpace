import { useEffect, useState } from "react";
import { storage } from "../FirebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useEventContext } from "../context/EventContext";

export default function Inventory() {
  const [filename, setFilename] = useState("");
  const [file, setFile] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [models, setModels] = useState([]);
  const { authUser } = useAuthContext();
  const [reqBody, setReqBody] = useState({});
  const user = JSON.parse(authUser);
  const { eventsChanged, triggerEventsChange } = useEventContext();

  const handleChange = (e) => {
    setReqBody({
      ...reqBody,
      [e.target.id]: e.target.value,
    });
  };

  const reqModel = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/inventory/reqModel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...reqBody,
          username: reqBody.username,
          model: reqBody.model,
          description: reqBody.description,
        }),
      });
      const data = await response.json();
      console.log(data);
      setLoading(false);
      if (data.success == false) setError(data.message);
      setReqBody({});
      triggerEventsChange()
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (filename == "" || downloadUrl == "") return;
      setLoading(true);
      const res = await fetch("/api/inventory/uploadModels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: filename,
          file: downloadUrl,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success == false) setError(data.message);
      setFilename("");
      setDownloadUrl("");
      setFile([]);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const uplodeZip = () => {
    if (!file) return;

    const fileRef = ref(storage, `${file[0].name}`);
    const uploadTask = uploadBytesResumable(fileRef, file[0]);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => console.log(error.message),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) =>
          setDownloadUrl(downloadUrl)
        );
      }
    );
  };

  const downloadZip = (downloadUrl) => {
    if (downloadUrl) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  useEffect(() => {
    const getModels = async () => {
      try {
        const res = await fetch("/api/inventory/getModels", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (data.success == false) setError(data.message);
        setModels(data);
        console.log(models.map((d) => d.name));
      } catch (error) {
        setError(error.message);
      }
    };

    getModels();
  }, [eventsChanged]);

  return (
    <div>
      {user ? (
        user.isAdmin ? (
          <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center px-4 py-10">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Upload .zip File
              </h2>
              <form action="form" onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="filename"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    File Name:
                  </label>
                  <input
                    id="filename"
                    type="text"
                    placeholder="Enter file name"
                    value={filename}
                    onChange={(event) => setFilename(event.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    File (.zip):
                  </label>
                  <input
                    type="file"
                    onChange={(event) => setFile(event.target.files)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={uplodeZip}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition-colors"
                  >
                    Upload File
                  </button>

                  {uploadProgress > 0 && (
                    <progress
                      value={uploadProgress}
                      max="100"
                      className="w-2/3 h-4 rounded-lg border border-gray-300"
                    />
                  )}
                  <span>{Math.floor(uploadProgress)}%</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md transition-colors"
                >
                  Submit File
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="min-h-screen bg-blue-50 flex justify-center">
            <div className="max-w-6xl w-full py-12 px-4">
              <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
                Available Models
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {models.length > 0 ? (
                  models.map((model) => (
                    <div
                      key={model._id}
                      className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer w-60"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 truncate">
                        {model.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2 truncate">
                        {model.description}
                      </p>
                      <Link
                        to={model.file}
                        className="block mt-4 bg-blue-500 text-white text-center px-4 py-2 rounded hover:bg-blue-600"
                        download
                      >
                        Download
                      </Link>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">
                    No models available at the moment.
                  </p>
                )}
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-6 mt-6 text-center">
                Request a Model
              </h1>
              <form onSubmit={reqModel} className="space-y-4 " action="form">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Username:
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Enter username"
                    onChange={handleChange}
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
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Model description:
                  </label>
                  <input
                    id="description"
                    type="text"
                    placeholder="Enter Description"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        )
      ) : (
        <h2 className="text-2xl text-gray-800 text-center mb-8">
          Please Signin to view this page
        </h2>
      )}
    </div>
  );
}
