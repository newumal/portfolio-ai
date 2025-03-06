import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaArrowRight, FaVolumeUp } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const fullName = "Newumal Weerasinghe";
  const controls = useAnimation();

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTypingComplete(true);
        controls.start({
          backgroundPosition: ["0%", "100%"],
          transition: { duration: 2, repeat: Infinity }
        });
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Add audio functionality
  const playName = () => {
    const audio = new Audio('/name-pronunciation.mp3'); // Add your audio file
    audio.onplay = () => setIsPlaying(true);
    audio.onended = () => setIsPlaying(false);
    audio.play().catch(error => console.log("Audio playback failed:", error));
  };

  return (
      <section id="home" className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-100/20 to-transparent rounded-full blur-3xl dark:from-purple-900/20" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-3xl dark:from-blue-900/20" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Column - Text Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8"
            >
              <div className="space-y-3 sm:space-y-4 min-h-[40px] sm:min-h-0">
                <span className="hidden sm:inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 dark:bg-purple-900/30 text-primary rounded-full text-xs sm:text-sm font-medium">
                  Welcome to my portfolio
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight dark:text-white">
                  Hey, I'm
                  <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4">
                    <div className="min-w-0">
                      <motion.span
                          className="block mt-1 sm:mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-primary leading-normal"
                          animate={controls}
                      >
                        {displayText}
                        {!isTypingComplete && (
                            <motion.span
                                animate={{opacity: [1, 0]}}
                                transition={{duration: 0.5, repeat: Infinity}}
                                className="inline-block ml-[2px] w-[2px] sm:w-[3px] h-[36px] sm:h-[48px] bg-primary align-middle"
                            >
                              |
                            </motion.span>
                        )}
                      </motion.span>
                    </div>

                    {/* Speaker Icon */}
                    {isTypingComplete && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={playName}
                            className="p-1.5 sm:p-2 mt-4 sm:mt-7 rounded-full bg-purple-100 dark:bg-purple-900/30 text-primary hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all flex-shrink-0"
                            title="Listen to pronunciation"
                        >
                          <FaVolumeUp className={`w-5 h-5 sm:w-6 sm:h-6 ${isPlaying ? 'animate-pulse' : ''}`} />
                        </motion.button>
                    )}
                  </div>
                </h1>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                  Senior Software Engineer - Full Stack with AI Integration
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
                  Full-stack developer with a growing interest in AI technologies. Experienced in building
                  MERN stack and SaaS applications, focusing on scalability, design patterns, and algorithms
                  while following best practices. Expert in React, Node.js, AWS, SQL, and NoSQL databases.
                  Skilled in taking leadership roles with a good attitude.
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col space-y-2 sm:space-y-3">
                <motion.a
                    whileHover={{x: 5}}
                    href="mailto:newumaalweerasinghe@gmail.com"
                    className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  <FaEnvelope className="text-primary"/>
                  <span className="break-all">newumaalweerasinghe@gmail.com</span>
                </motion.a>
                <motion.div
                    whileHover={{x: 5}}
                    className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-400"
                >
                  <FaMapMarkerAlt className="text-primary" />
                  <span>Colombo, Sri Lanka</span>
                </motion.div>
                <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-400"
                >
                  <FaPhone className="text-primary" />
                  <span>+94 71 7349697</span>
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="group flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-white rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Get in Touch
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </ScrollLink>

                <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-primary hover:text-primary transition-all duration-300 text-sm sm:text-base"
                >
                  View Projects
                </ScrollLink>
              </div>

              <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start">
                <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/newumal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 hover:text-primary dark:text-gray-400 transition-all"
                >
                  <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/newumal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 hover:text-primary dark:text-gray-400 transition-all"
                >
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 max-w-[280px] sm:max-w-md w-full mt-8 lg:mt-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-transparent dark:from-purple-900/30 rounded-full blur-2xl" />
                <div className="relative rounded-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-2xl overflow-hidden">
                  <img
                      src="/profile.jpg"
                      alt="Newumal Weerasinghe"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Home;
