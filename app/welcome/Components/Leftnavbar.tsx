import React, { useState, useEffect } from 'react';

export default function Leftnavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0); 
  const [activeLink, setActiveLink] = useState(0); 

  const links = [
    { href: '#', text: 'Home' },
    { href: '#', text: 'About' },
    { href: '#', text: 'Service' },
    { href: '#', text: 'Portfolio' },
    { href: '#', text: 'Blog' },
    { href: '#', text: 'Contacts' },
  ];

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
    if (windowWidth <= 833) { 
      setIsOpen(false); 
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth); 
      }
    };

    if (typeof window !== 'undefined') { 
      setWindowWidth(window.innerWidth); 
      window.addEventListener('resize', handleResize); 
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize); 
      }
    };
  }, []);

  return (
    <div className={`left-navbar ${windowWidth <= 833 ? 'mobile' : ''}`}> 
      <button className="menu-button" onClick={toggleMenu}>
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <ul className={`nav-links ${isOpen && windowWidth <= 833 ? 'open' : ''}`}> 
        {links.map((link, index) => (
          <li key={link.text}>
            <a 
              href={link.href} 
              className={activeLink === index ? 'active' : ''} 
              onClick={() => handleLinkClick(index)} 
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}