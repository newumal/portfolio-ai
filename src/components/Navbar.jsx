import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
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
          className="cursor-pointer font-display text-lg font-bold tracking-tight text-chalk"
        >
          {site.shortName}
          <span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {nav.map((item) =>
            item.href ? (
              <a
                key={item.name}
                href={item.href}
                download={item.download}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-fog transition-colors hover:text-chalk"
              >
                <FaDownload className="h-3 w-3" />
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.to}
                href={`#${item.to}`}
                spy
                smooth
                offset={-90}
                duration={500}
                className="cursor-pointer text-sm font-medium text-fog transition-colors hover:text-chalk"
                activeClass="!text-chalk"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <button
          onClick={() => setIsOpen((v) => !v)}
          className="p-2 text-chalk lg:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-3 overflow-hidden rounded-2xl border border-line bg-panel/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col p-3">
              {nav.map((item) =>
                item.href ? (
                  <a
                    key={item.name}
                    href={item.href}
                    download={item.download}
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-fog hover:bg-panel2 hover:text-chalk"
                  >
                    <FaDownload className="h-3.5 w-3.5" />
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.to}
                    href={`#${item.to}`}
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
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
