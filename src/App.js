import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ✅ Import all pages
import Home from "./pages/Home";
import About from "./pages/About";
import Socials from "./pages/Socials";
import Blog from "./pages/Blog";

import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation Bar (visible on all pages) */}
      <Navbar />

      {/* Main Page Content */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>

      {/* Footer (visible on all pages) */}
      <Footer />
    </div>
  );
}

export default App;
