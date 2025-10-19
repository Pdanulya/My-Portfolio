import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './UI/ScrollToTop';
import Navbar from "./UI/Navbar";
import MobileMenu from './UI/MobileMenu';
import React, { useState, useEffect } from 'react';
import LoginScreenAnimation from "./UI/LoginScreenAnimation";
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import ProjDetails from './sections/ProjDetails';
import { Contact } from "./sections/Contact";
import Footer from "./sections/Footer";
import Blogs from "./sections/Blogs";
import Gallery from "./sections/Gallery";


export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      {!isLoading && <LoginScreenAnimation onComplete={() => setIsLoading(true)} />}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <Routes>
        {/* Main homepage route */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Skills />
              <Projects />
              <Blogs />
              <Gallery />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Project details route */}
        <Route path="/projects/:projectId" element={<ProjDetails />} />
      </Routes>    
    </Router>
    
  );
}

