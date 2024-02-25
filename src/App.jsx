// import React from "react";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-slate-300/20 h-full">
      <Router>
        {/* {!isLoading && <Navbar />} */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setIsLoading={setIsLoading} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
