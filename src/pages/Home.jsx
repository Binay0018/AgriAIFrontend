import { Link } from "react-router-dom";
import DiseaseDetector from "../components/DiseaseDetector";
import VoiceAssistant from "../components/VoiceAssistant";
import CropRecommendation from "../components/CropRecommendation";
import Chatbot from "../components/Chatbot"; // Chatbot component

function Home() {
  const features = [
    { title: "Disease Detector", description: "Upload your crop image and detect diseases automatically.", route: "/features/disease-detector", icon: "🌱", color: "from-green-400 to-green-600" },
    { title: "Voice Assistant", description: "Interact with our AI assistant using your voice.", route: "/features/voice-assistant", icon: "🎙️", color: "from-green-300 to-green-500" },
    { title: "Weather Forecast", description: "Get real-time weather updates for your crops.", route: "/Weather", icon: "☀️", color: "from-yellow-400 to-yellow-500" },
    { title: "Explore Crops", description: "Learn more about crop care and best practices.", route: "/explore", icon: "🌾", color: "from-green-200 to-green-400" },
    { title: "Crop Recommendation", description: "Get AI suggestions for the best crops to grow.", route: "/features/crop-recommendation", icon: "🧑‍🌾", color: "from-green-500 to-green-700" },
  ];

  const diseaseSteps = [
    { step: "Upload Image", desc: "Upload a photo of your crop to analyze its condition." },
    { step: "AI Detects Disease", desc: "Our AI identifies the disease affecting your crop." },
    { step: "Get Recommendations", desc: "Receive expert guidance on how to treat the disease." },
  ];

  const cropSteps = [
    { step: "Input Soil & Weather Info", desc: "Provide information about your soil type and local weather." },
    { step: "AI Suggests Crops", desc: "The AI recommends crops suitable for your conditions." },
    { step: "Get Guidance", desc: "Receive tips on optimal planting and care for the suggested crops." },
  ];

  const stats = [
    { label: "Crops Analyzed", value: "1200+" },
    { label: "Farmers Helped", value: "500+" },
    { label: "Diseases Detected", value: "50+" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 to-green-500 font-sans relative">
      
      {/* Hero Section */}
      <section className="text-center py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#ffffff_0%,_#a7f3d0_80%)] opacity-20 -z-10"></div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 drop-shadow-lg mb-4">AgriAI</h1>
        <p className="text-xl md:text-2xl text-green-800 mb-8">Smart Farming Assistant: Detect crop diseases and get AI-powered recommendations.</p>
        <div className="flex justify-center gap-6">
          <Link to="/explore" className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition transform hover:-translate-y-1 hover:shadow-lg">Explore</Link>
          <Link to="/contact" className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition transform hover:-translate-y-1 hover:shadow-lg">Contact Us</Link>
        </div>
      </section>

      {/* Features Overview */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-green-900 mb-12 text-center">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Link key={feature.title} to={feature.route}>
              <div className={`bg-gradient-to-r ${feature.color} text-white p-8 rounded-3xl shadow-2xl hover:scale-105 transform transition-all duration-300 cursor-pointer`}>
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/90">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-green-100 py-20 px-4">
        <h2 className="text-3xl font-bold text-green-900 mb-12 text-center">How It Works</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Disease Detection Steps */}
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-6 text-center md:text-left">Disease Detection</h3>
            <div className="grid grid-cols-1 gap-6">
              {diseaseSteps.map((item, index) => (
                <div key={index} className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                  <h4 className="text-xl font-semibold mb-2 text-green-700">{item.step}</h4>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Crop Recommendation Steps */}
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-6 text-center md:text-left">Crop Recommendation</h3>
            <div className="grid grid-cols-1 gap-6">
              {cropSteps.map((item, index) => (
                <div key={index} className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                  <h4 className="text-xl font-semibold mb-2 text-green-700">{item.step}</h4>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      {/* Footer */}
      <footer className="bg-green-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} AgriAI. All rights reserved.</p>
      </footer>

      {/* Chatbot */}
      <Chatbot />

    </div>
  );
}

export default Home;
