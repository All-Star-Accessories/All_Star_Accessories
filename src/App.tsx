import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  useEffect(() => {
    document.title = 'All-Star Accessories | Premium Audio & Video Solutions';
  }, []);

  return (
    <div className="min-h-screen bg-dark-300 text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;