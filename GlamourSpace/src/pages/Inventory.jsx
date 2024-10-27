import { useEffect, useState } from "react";
import { storage } from "../FirebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { model } from "mongoose";
import { Link } from "react-router-dom";

export default function Inventory() {
  const [filename, setFilename] = useState("");
  const [file, setFile] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(true);
  const [models, setModels] = useState([]);

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
      setLoading(false);
      const data = await res.json();
      if (data.success == false) setError(data.message);
    } catch (error) {
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

    getModels()
  }, [])


  return (
    <div>
      {isAdmin ? (
        <form action="form" onSubmit={handleSubmit}>
          <h3>File Name:</h3>
          <br />
          <input
            type="text"
            onChange={(event) => setFilename(event.target.value)}
          />{" "}
          <br />
          <h3>File: </h3> <br />
          <input
            type="file"
            onChange={(event) => setFile(event.target.files)}
          />{" "}
          <br />
          <button type="uplode" onClick={uplodeZip}>
            Uplode file
          </button>
          {uploadProgress > 0 && (
            <progress value={uploadProgress} max="100" className="mt-2" />
          )}
          <br />
          <button type="submit">Submit file</button>
        </form>
      ) : (
        <div className="space-x-2">
          {models.length > 0 &&
            models.map((model) => <Link to={model.file}>{model.name}</Link>)}
        </div>
      )}
    </div>
  );
}
