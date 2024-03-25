import React, { useState } from "react";
import './css/FileUploader.css'

const VideoUploader = () => {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState("initial");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        if (selectedFile.type.startsWith("video/")) {
          setStatus("initial");
          setFile(selectedFile);
          setErrorMessage("");
        } else {
          setFile(null);
          setErrorMessage("Please select a video file.");
        }
      }
    };
  
    const handleUpload = async () => {
      if (file) {
        setStatus("uploading");
  
        const formData = new FormData();
        formData.append("file", file);
  
        try {
          const result = await fetch("https://httpbin.org/post", {
            method: "POST",
            body: formData,
          });
  
          const data = await result.json();
  
          console.log(data);
          setStatus("success");
        } catch (error) {
          console.error(error);
          setStatus("fail");
        }
      }
    };
  
    return (
      <>
        <div className="input-group">
          <label htmlFor="file" className="sr-only">
            Choose a video file
          </label>
          <input id="file" type="file" accept="video/*" onChange={handleFileChange} />
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {file && (
          <section>
            File details:
            <ul>
              <li>Name: {file.name}</li>
              <li>Type: {file.type}</li>
              <li>Size: {file.size} bytes</li>
            </ul>
          </section>
        )}
  
        {file && (
          <button onClick={handleUpload} className="submit">
            Upload video
          </button>
        )}
  
        <Result status={status} />
        <br />
      </>
    );
  };
  
  const Result = ({ status }) => {
    if (status === "success") {
      return <p>✅ Video uploaded successfully!</p>;
    } else if (status === "fail") {
      return <p>❌ Video upload failed!</p>;
    } else if (status === "uploading") {
      return <p>⏳ Uploading video...</p>;
    } else {
      return null;
    }
  };
  
  export default VideoUploader;