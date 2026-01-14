import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navugation";
import Home from "./home";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <div className="max-w-6xl mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
