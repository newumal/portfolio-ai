import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Journey from './sections/Journey';
import Skills from './sections/Skills';
import Qualification from './sections/Qualification';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="w-full mx-auto">
        <div className="max-w-screen-xl mx-auto">
          <Home />
          <About />
          <Journey />
          <Skills />
          <Qualification />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
