
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-webzys-purple">Webzys</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-800 hover:text-webzys-purple font-medium transition-colors">Services</a>
          <a href="#portfolio" className="text-gray-800 hover:text-webzys-purple font-medium transition-colors">Portfolio</a>
          <a href="#testimonials" className="text-gray-800 hover:text-webzys-purple font-medium transition-colors">Testimonials</a>
          <a href="#contact" className="btn-primary">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-6">
          <div className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-gray-800 hover:text-webzys-purple font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              className="text-gray-800 hover:text-webzys-purple font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-800 hover:text-webzys-purple font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="btn-primary inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
