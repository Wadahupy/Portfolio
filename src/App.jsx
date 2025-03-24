import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage section="home" />} />
      <Route path="/about" element={<HomePage section="about" />} />
      <Route path="/works" element={<HomePage section="works" />} />
      <Route path="/contact" element={<HomePage section="contact" />} />
    </Routes>
  );
};

export default App;
