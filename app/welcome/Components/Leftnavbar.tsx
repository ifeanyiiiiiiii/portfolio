import React, {useState} from "react"

export default function Leftnavbar(){

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
  };

  return (
    <ul className="nav-links">
      {links.map((link, index) => (
        <li key={link.text}>
          <a
            href={link.href}
            style={{ color: index === activeLink ? 'blue' : 'white' }}
            onClick={() => handleLinkClick(index)}
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );



}