import React, { useState } from 'react';

const GlassNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Get current path to highlight active link
  const currentPath = window.location.hash || '#home';

  return (
    <nav className="glass-navbar">
      <div className="container">
        <div className="logo">
          {/* Company logo will go here */}
          <img src="/next.svg" alt="Company Logo" width={40} height={40} />
        </div>
        
        <button 
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" className={currentPath === '#home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" className={currentPath === '#about' ? 'active' : ''}>About</a></li>
          <li><a href="#services" className={currentPath === '#services' ? 'active' : ''}>Services</a></li>
          <li><a href="#contact" className={currentPath === '#contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default GlassNavbar;