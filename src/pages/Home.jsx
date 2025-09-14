import DiseaseDetector from "../components/DiseaseDetector";
import VoiceAssistant from "../components/VoiceAssistant";

function Home() {
  return (
    <div className="home">
      <h1>AgriAI Frontend</h1>
      <DiseaseDetector />
      <VoiceAssistant />
    </div>
  );
}

export default Home;
