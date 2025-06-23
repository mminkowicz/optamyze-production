import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Transformation from './components/Transformation';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import About from './pages/About';      // ← make sure this file exists
// (Removed the broken import for ./pages/Home)

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Transformation />
      <Testimonials />
      <CTA />
    </>
  );
}

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
