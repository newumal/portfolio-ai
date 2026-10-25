import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import Projects from './sections/Projects';
import YouTube from './sections/YouTube';
import Journey from './sections/Journey';
import Skills from './sections/Skills';
import About from './sections/About';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-ink text-chalk">
      <Analytics />
      <Navbar />
      <main>
        <Home />
        <Projects />
        <YouTube />
        <Journey />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
