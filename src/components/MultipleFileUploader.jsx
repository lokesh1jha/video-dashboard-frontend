import React, { useState } from "react";
import './css/FileUploader.css'

const ImageUploader = () => {
  const [files, setFiles] = useState(null);
  const [status, setStatus] = useState("initial");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const validFiles = Array.from(selectedFiles).filter(file =>
        file.type.startsWith("image/")
      );
      if (validFiles.length > 0) {
        setStatus("initial");
        setFiles(validFiles);
        setErrorMessage("");
      } else {
        setFiles(null);
        setErrorMessage("Please select image files only.");
      }
    }
  };

  const handleUpload = async () => {
    if (files) {
      setStatus("uploading");

      const formData = new FormData();

      files.forEach((file) => {
        formData.append("files", file);
      });

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
          Choose image files
        </label>
        <input
          id="file"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />
      </div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {files &&
        files.map((file, index) => (
          <section key={index}>
            File number {index + 1} details:
            <ul>
              <li>Name: {file.name}</li>
              <li>Type: {file.type}</li>
              <li>Size: {file.size} bytes</li>
            </ul>
          </section>
        ))}

      {files && (
        <button onClick={handleUpload} className="submit">
          Upload {files.length > 1 ? "files" : "a file"}
        </button>
      )}
    
      <Result status={status} />
      <br />
    </>
  );
};

const Result = ({ status }) => {
  if (status === "success") {
    return <p>✅ Images uploaded successfully!</p>;
  } else if (status === "fail") {
    return <p>❌ Image upload failed!</p>;
  } else if (status === "uploading") {
    return <p>⏳ Uploading started...</p>;
  } else {
    return null;
  }
};

export default ImageUploader;
