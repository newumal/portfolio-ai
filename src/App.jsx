import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Philosophy from './sections/Philosophy';
import Journey from './sections/Journey';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Qualification from './sections/Qualification';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-ink text-chalk">
      <Navbar />
      <main>
        <Home />
        <About />
        <Philosophy />
        <Journey />
        <Skills />
        <Projects />
        <Qualification />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
