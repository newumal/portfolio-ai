import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Journey from './sections/Journey';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Qualification from './sections/Qualification';
import Contact from './sections/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar links={[
          { name: 'Home', href: 'home' },
          { name: 'About', href: 'about' },
          { name: 'Projects', href: 'projects' },
          { name: 'Contact', href: 'contact' }
        ]} />
        <main className="w-full">
          <div className="mx-auto">
            <Home />
            <About />
            <Journey />
            <Skills />
            <Projects />
            <Qualification />
            <Contact />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
