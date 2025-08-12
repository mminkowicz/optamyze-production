import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PerformanceProvider } from './components/PerformanceOptimizer';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Clients from './components/Clients';
import Services from './components/Services';

import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './pages/About';

function HomePage() {
  return (
    <>
      <Hero />
      <OurStory />
      <Services />
      <Clients />
      <Contact />
    </>
  );
}

function App() {
  return (
    <PerformanceProvider>
      <div className="font-sans bg-white text-gray-900 antialiased">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </PerformanceProvider>
  );
}

export default App;
