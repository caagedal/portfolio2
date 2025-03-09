// src/components/Header.jsx
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body scroll when menu is open
    document.body.style.overflow = isMenuOpen ? '' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-20">
      <h1 className="text-2xl md:text-3xl font-bold">
        <span className="text-teal">_</span>caagedal
      </h1>
      
      <div>
        <nav className="hidden md:block">
          <ul className="flex gap-10">
            <li>
              <HashLink 
                smooth 
                to="#projects" 
                className="hover:text-teal transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal hover:after:w-full after:transition-all after:duration-300"
              >
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink 
                smooth 
                to="#about" 
                className="hover:text-teal transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal hover:after:w-full after:transition-all after:duration-300"
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink 
                smooth 
                to="#contact" 
                className="hover:text-teal transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal hover:after:w-full after:transition-all after:duration-300"
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>
        
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-teal text-2xl"
          aria-label="Toggle menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out flex flex-col items-center justify-center md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className="flex flex-col gap-8 text-2xl text-center">
          <li>
            <HashLink 
              smooth 
              to="#projects" 
              onClick={closeMenu} 
              className="text-teal hover:text-white transition-colors duration-300"
            >
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink 
              smooth 
              to="#about" 
              onClick={closeMenu} 
              className="text-teal hover:text-white transition-colors duration-300"
            >
              About
            </HashLink>
          </li>
          <li>
            <HashLink 
              smooth 
              to="#contact" 
              onClick={closeMenu} 
              className="text-teal hover:text-white transition-colors duration-300"
            >
              Contact
            </HashLink>
          </li>
        </ul>
        <button 
          onClick={closeMenu} 
          className="absolute top-6 right-6 text-teal text-3xl"
          aria-label="Close menu"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </header>
  );
}