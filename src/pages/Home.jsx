import DiseaseDetector from "../components/DiseaseDetector";
import VoiceAssistant from "../components/VoiceAssistant";
import Weather from "../components/Weather";

function Home() {
  return (
    <div className="home">
      <h1>AgriAI Frontend</h1>
      <DiseaseDetector />
      <VoiceAssistant />
      <Weather />
    </div>
  );
}

export default Home;
