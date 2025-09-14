import { Link } from "react-router-dom";
import DiseaseDetector from "../components/DiseaseDetector";
import VoiceAssistant from "../components/VoiceAssistant";

function Home() {
  const features = [
    {
      title: "Disease Detector",
      description: "Upload your crop image and detect diseases automatically.",
      route: "/features/disease-detector",
      icon: "🌱",
    },
    {
      title: "Voice Assistant",
      description: "Interact with our AI assistant using your voice.",
      route: "/features/voice-assistant",
      icon: "🎙️",
    },
    {
      title: "Weather Forecast",
      description: "Get real-time weather updates for your crops.",
      route: "/Weather",
      icon: "☀️",
    },
    {
      title: "Explore Crops",
      description: "Learn more about crop care and best practices.",
      route: "/explore",
      icon: "🌾",
    },
  ];

  const steps = [
    { step: "Upload Image", desc: "Upload a photo of your crop." },
    { step: "AI Detects Disease", desc: "Our AI analyzes and identifies problems." },
    { step: "Get Recommendations", desc: "Receive expert guidance and solutions." },
  ];

  const stats = [
    { label: "Crops Analyzed", value: "1200+" },
    { label: "Farmers Helped", value: "500+" },
    { label: "Diseases Detected", value: "50+" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 to-green-500 font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-green-900 drop-shadow-lg mb-4">
          AgriAI
        </h1>
        <p className="text-xl md:text-2xl text-green-800 mb-8">
          Smart Farming Assistant: Detect crop diseases and get AI-powered recommendations.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            to="/features"
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Explore Features
          </Link>
          <Link
            to="/contact"
            className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Features Overview */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-green-900 mb-10 text-center">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Link key={feature.title} to={feature.route}>
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-2 text-green-800">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-green-100 py-16 px-4">
        <h2 className="text-3xl font-bold text-green-900 mb-10 text-center">How It Works</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-green-700">{item.step}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Demo / Preview */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-900 mb-10 text-center">Try a Quick Demo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-green-800">Disease Detector</h3>
            <DiseaseDetector />
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-green-800">Voice Assistant</h3>
            <VoiceAssistant />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-200 py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold text-green-900 mb-2">{stat.value}</p>
              <p className="text-green-800 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} AgriAI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
