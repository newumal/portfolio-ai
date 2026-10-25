import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Philosophy from './sections/Philosophy';
import Journey from './sections/Journey';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import YouTube from './sections/YouTube';
import Qualification from './sections/Qualification';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-ink text-chalk">
      <Analytics />
      <Navbar />
      <main>
        <Home />
        <About />
        <Philosophy />
        <Journey />
        <Skills />
        <Projects />
        <YouTube />
        <Qualification />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
