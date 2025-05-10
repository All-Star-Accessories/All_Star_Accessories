import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services', dropdown: true },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-300/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4">
        <a href="#home" className="text-2xl font-bold text-white flex items-center">
          <span className="text-primary">All-Star</span>
          <span className="ml-1">Accessories</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <div className="flex items-center cursor-pointer nav-link">
                  <span>{link.name}</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </div>
              ) : (
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              )}

              {link.dropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-dark-100 rounded-md shadow-lg overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100">
                  <a
                    href="#automotive-services"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-primary hover:text-white"
                  >
                    Automotive
                  </a>
                  <a
                    href="#home-services"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-primary hover:text-white"
                  >
                    Home
                  </a>
                </div>
              )}
            </div>
          ))}
          <Button
            variant="primary"
            className="ml-4"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-200 animate-fade-in">
          <div className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div>
                    <div
                      className="flex items-center justify-between py-2 text-gray-300"
                      onClick={toggleServices}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </div>
                    {servicesOpen && (
                      <div className="pl-4 pt-2 pb-1 space-y-2 border-l border-gray-700">
                        <a
                          href="#automotive-services"
                          className="block py-2 text-gray-400 hover:text-primary"
                          onClick={toggleMenu}
                        >
                          Automotive
                        </a>
                        <a
                          href="#home-services"
                          className="block py-2 text-gray-400 hover:text-primary"
                          onClick={toggleMenu}
                        >
                          Home
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="block py-2 text-gray-300 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <Button
              variant="primary"
              className="w-full mt-4"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
                toggleMenu();
              }}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;