import React from "react";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import OneCard from "./components/OneCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/food/:id" element={<OneCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
