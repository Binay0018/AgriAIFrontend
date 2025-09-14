import VoiceAssistant from "../components/VoiceAssistant";

function DiseaseDetector() {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-green-800 font-medium">Upload Crop Image:</label>
      <input
        type="file"
        className="block w-full text-gray-700 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 p-2"
      />
      <button className="bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-green-800 hover:shadow-lg transition-all duration-200 mt-2">
        Detect Disease
      </button>
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-green-200 to-green-500 font-sans p-10">
      
      <h1 className="text-5xl font-bold text-green-900 mb-12 drop-shadow-lg">
        AgriAI Frontend
      </h1>

      {/* Disease Detector Section */}
      <div className="w-full max-w-4xl mb-10 bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
        <h2 className="text-2xl font-semibold text-green-800 mb-6">Disease Detector</h2>
        <DiseaseDetector />
      </div>

      {/* Voice Assistant Section */}
      <div className="w-full max-w-4xl mb-10 bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
        <h2 className="text-2xl font-semibold text-green-800 mb-6">Voice Assistant</h2>
        <VoiceAssistant />
      </div>

    </div>
  );
}

export default Home;
