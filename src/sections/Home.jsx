import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-purple-50 via-white to-white">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-100/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left max-w-xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hello, I'm
              <span className="block text-primary mt-2">Newumal Weerasinghe</span>
            </h1>
            <p className="text-xl font-semibold text-gray-700 mb-3">
              Senior Software Engineer - Full Stack
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Expertise in React.js, Node.js, and AWS, system integration, and agile methodologies. 
              Experienced in delivering innovative solutions with a focus on continuous improvement 
              and ensuring seamless cross-platform functionality.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col space-y-2 mb-8 text-gray-600">
              <a href="mailto:newumaalweerasinghe@gmail.com" className="flex items-center gap-2 hover:text-primary">
                <FaEnvelope /> newumaalweerasinghe@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt /> Awissawella, Sri Lanka
              </div>
              <div className="flex items-center gap-2">
                <FaPhone /> +94 71 7349697
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a href="#contact" className="btn-primary">
                Get in Touch
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects
              </a>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a href="https://github.com/newumal" className="text-gray-600 hover:text-primary transform hover:scale-110 transition-all duration-300" aria-label="GitHub">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/newumal/" className="text-gray-600 hover:text-primary transform hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
                <FaLinkedin size={28} />
              </a>
            </div>
          </motion.div>
          
          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 max-w-sm w-full"
          >
            <div className="aspect-square rounded-full bg-gradient-to-br from-purple-100 to-purple-50 shadow-2xl overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Newumal Weerasinghe"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
