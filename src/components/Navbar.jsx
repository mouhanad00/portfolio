import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Work', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full px-8 md:px-[8vw] py-8 z-50 flex justify-between items-center transition-all duration-500 ${scrolled ? 'py-6 bg-black-deep/90 backdrop-blur-md' : ''}`}>
      <Link to="/" className="font-serif text-2xl font-bold tracking-widest uppercase text-ivory z-50">
        Mohamed <span className="text-gold-metallic">Akram</span>
      </Link>

      <div className="hidden md:flex gap-12">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`font-sans text-xs tracking-[0.2em] uppercase text-ivory/70 hover:text-ivory relative group transition-colors duration-300 ${location.pathname === link.path ? 'text-ivory' : ''}`}
          >
            {link.name}
            <span className={`absolute -bottom-2 left-0 h-[1px] bg-gold-metallic transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-ivory z-50 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <div className="space-y-2 relative w-8 h-5">
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
            className="block w-8 h-[1px] bg-white absolute top-0"
          ></motion.span>
          <motion.span
            animate={isMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
            className="block w-6 h-[1px] bg-white ml-auto absolute top-2 right-0"
          ></motion.span>
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-8 h-[1px] bg-white absolute bottom-0"
          ></motion.span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black-deep z-40 flex flex-col items-center justify-center gap-12"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Link
                  to={link.path}
                  className={`font-serif text-4xl tracking-widest uppercase transition-colors duration-300 ${location.pathname === link.path ? 'text-gold-metallic' : 'text-ivory/70 hover:text-ivory'}`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Social or additional links could go here */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 flex gap-8 text-ivory/40 text-xs tracking-[0.2em] uppercase"
            >
              <a href="#" className="hover:text-gold-metallic transition-colors">Instagram</a>
              <a href="#" className="hover:text-gold-metallic transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-gold-metallic transition-colors">Vimeo</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

