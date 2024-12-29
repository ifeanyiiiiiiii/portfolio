import React, {useState} from "react"

export default function Leftnavbar(){

  const [activeLink, setActiveLink] = useState(null);

  const links = [
    { href: '#', text: 'Home' },
    { href: '#', text: 'About' },
    { href: '#', text: 'Service' },
    { href: '#', text: 'Portfolio' },
    { href: '#', text: 'Blog' },
    { href: '#', text: 'Contact' },
    
  ];

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <ul className="links">
      {links.map((link, index) => (
        <li key={link.href}>
          <a
            href={link.href}
            style={{ color: index === activeLink ? 'blue' : 'black' }}
            onClick={() => handleLinkClick(index)}
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );



}