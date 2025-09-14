import { useState } from "react";
import Ax from "../helper/axios";
function DiseaseDetector() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleUpload = async () => {
    if (!file) return alert("Please select an image");
    setResult("");

    try {
      const formData = new FormData();
      formData.append("image", file);
      
      const { data } = await Ax.post("/upload-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(data?.disease || "No disease detected");
    } catch (error) {
      console.error("Error uploading file:", error);
      setResult("Something went wrong");
    }
  };

  return (
    <div className="disease-detector">
      <h2>Crop Disease Detector</h2>
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          className="block w-full text-sm text-gray-600
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-green-100 file:text-green-700
                     hover:file:bg-green-200"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      <button onClick={handleUpload}>Detect Disease</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default DiseaseDetector;
