import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoDetails from "./pages/VideoDetails";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      
      <Navbar />

      
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

       
        <Route path="/video/:id" element={<VideoDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
