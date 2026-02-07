import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full px-8 md:px-[8vw] py-8 z-50 flex justify-between items-center transition-all duration-500 ${scrolled ? 'py-6 bg-black-deep/90 backdrop-blur-md' : ''}`}>
      <Link to="/" className="font-serif text-2xl font-bold tracking-widest uppercase text-ivory">
        Alexander <span className="text-gold-metallic">Ross</span>
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

      {/* Mobile Menu Icon (Placeholder for now) */}
      <div className="md:hidden text-ivory">
        <div className="space-y-2">
          <span className="block w-8 h-[1px] bg-white"></span>
          <span className="block w-6 h-[1px] bg-white ml-auto"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
