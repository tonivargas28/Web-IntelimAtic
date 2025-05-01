import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { navItems } from '../data';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto container-padding flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            
          </div>
          <span className={`font-bold text-xl transition-colors duration-300 ${
            scrolled ? 'text-primary-500' : 'text-white'
          }`}>IntelimAtic</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`font-medium hover:text-primary-500 transition-colors duration-300 ${
                scrolled ? 'text-secondary-900' : 'text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Contact Button - Desktop */}
        <a 
          href="#contact" 
          className="hidden md:inline-block btn-primary"
        >
          Contáctanos
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary-500 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMenuOpen ? 
            <X size={24} className={scrolled ? 'text-primary-500' : 'text-white'} /> : 
            <Menu size={24} className={scrolled ? 'text-primary-500' : 'text-white'} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto container-padding py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-secondary-900 hover:text-primary-500 font-medium py-2 px-4"
                onClick={closeMenu}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn-primary text-center"
              onClick={closeMenu}
            >
              Contáctanos
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;