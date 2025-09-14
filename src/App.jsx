import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Weather from "./components/Weather";
import Features from "./pages/Features";
import Contact from "./pages/contact";
import Explore from "./pages/Explore";
import DiseaseDetector from "./components/DiseaseDetector";
import "./style/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/features/disease-detector" element={<DiseaseDetector />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
