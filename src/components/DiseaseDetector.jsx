import { useState } from "react";
import Ax from "../helper/axios";
import diseases from "../helper/diseases.json"; // your JSON file

function DiseaseDetector() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);

  // Function to handle text-to-speech
  const speakResult = (text) => {
    if (!window.speechSynthesis) return; // browser doesn't support TTS
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US"; // language
    window.speechSynthesis.speak(utterance);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile)); // create image preview
    } else {
      setPreview(null);
    }
    setResult(null); // clear previous result
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image");
      return;
    }

    setResult({ loading: true });

    try {
      const formData = new FormData();
      formData.append("file", file); // must match FastAPI parameter name

      const { data } = await Ax.post("/api/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Map class to friendly name and description
      const prediction = data.class;
      const confidence = (data.confidence * 100).toFixed(2);
      const friendlyName = diseases[prediction]?.name || prediction;
      const description = diseases[prediction]?.description || "";

      setResult({ friendlyName, description, confidence });

      // Speak the result
      speakResult(`Prediction: ${friendlyName}. Confidence: ${confidence} percent. .description:${description}`);
    } catch (error) {
      console.error("Error uploading file:", error);
      const errorMsg = error.response?.data?.detail || "Something went wrong";
      setResult({ error: errorMsg });
      speakResult(`Error: ${errorMsg}`);
    }
  };

  return (
    <div className="disease-detector p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Crop Disease Detector</h2>

      <input
        type="file"
        accept="image/*"
        className="block w-full text-sm text-gray-600
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-green-100 file:text-green-700
                   hover:file:bg-green-200 mb-4"
        onChange={handleFileChange}
      />

      {preview && (
        <div className="mb-4">
          <img src={preview} alt="Preview" className="w-full h-auto rounded shadow" />
        </div>
      )}

      <button
        onClick={handleUpload}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4"
      >
        Detect Disease
      </button>

      {result?.loading && <p>Detecting...</p>}

      {result?.error && <p className="text-red-500">Error: {result.error}</p>}

      {result?.friendlyName && (
        <div className="bg-green-50 p-4 rounded shadow">
          <p className="font-bold text-lg">{result.friendlyName}</p>
          <p>Confidence: {result.confidence}%</p>
          <p className="text-gray-700 mt-2">{result.description}</p>
        </div>
      )}
    </div>
  );
}

export default DiseaseDetector;
