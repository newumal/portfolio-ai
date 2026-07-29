import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { nav, site } from '../data/content';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-line bg-ink/80 py-3 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-editorial items-center justify-between px-6 sm:px-8">
        <Link
          to="home"
          smooth
          duration={500}
          className="group flex cursor-pointer items-center gap-2 font-display text-lg font-bold tracking-tight text-chalk"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
            <FaCode className="h-4 w-4" />
          </span>
          {site.shortName}
          <span className="text-accent">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy
              smooth
              offset={-90}
              duration={500}
              className="cursor-pointer text-sm font-medium text-fog transition-colors hover:text-chalk"
              activeClass="!text-chalk"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth
            offset={-90}
            duration={500}
            className="cursor-pointer rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="p-2 text-chalk md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-3 overflow-hidden rounded-2xl border border-line bg-panel/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col p-3">
              {nav.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy
                  smooth
                  offset={-90}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-fog transition-colors hover:bg-panel2 hover:text-chalk"
                  activeClass="!text-chalk"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
