import React from "react";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import MyWork from "./pages/MyWork";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/mywork" element={<MyWork />} />
      </Routes>
    </Router>
  );
};

export default App;
