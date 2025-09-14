import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Weather from "./components/Weather";
// import Features from "./pages/Features";
// import Contact from "./pages/Contact";
// import Explore from "./pages/Explore";
import "./style/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
