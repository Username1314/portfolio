import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechRibbon from './components/TechRibbon';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TechRibbon />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
