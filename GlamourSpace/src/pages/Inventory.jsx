import { useState } from 'react';
import { storage } from '../FirebaseConfig';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";


export default function Inventory() {
  const [filename, setFilename] = useState("");
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [loading, setLoading] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(downloadUrl);
    
  }

  const uplodeZip = () => {
    if (!file) return;
    
    const metadata = {
      contentType: 'file/zip',
    };

    const fileRef = ref(storage, `file/${filename}`);
    const uploadTask = uploadBytesResumable(fileRef, file, metadata);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) =>  console.log(error.message),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => setDownloadUrl(downloadUrl))
      }
    )
  }


  return (
    <div>
      <form action="form" onSubmit={handleSubmit}>
        <h3>File Name:</h3><br />
        <input type="text" onChange={(event) => setFilename(event.target.value)}/> <br />
        <h3>File: </h3> <br />
        <input type="file" onChange={(event) => setFile(event.target.files)} /> <br />
        <button type='uplode' onClick={uplodeZip}>Uplode file</button><br />
        <button type='submit'>Submit file</button>
      </form>
    </div>
  )
}
