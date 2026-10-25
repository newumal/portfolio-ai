import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import Projects from './sections/Projects';
import YouTube from './sections/YouTube';
import Journey from './sections/Journey';
import About from './sections/About';

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
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
