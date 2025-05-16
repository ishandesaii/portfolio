import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
//import Testimonial from './components/Testimonial';



function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;