import React, { useState } from 'react';

export default function Asidecontent(){

  const [activeLink, setActiveLink] = useState(0);
  const [message, setMessage] = useState('');

  const links = [
    { href: '#', text: 'Skills', 
      message: 'jyjrjrdrjtykytkdrjrktktdtdjkff'
     },
    { href: '#', text: 'Awards',
       message: 'ytjtjrsjttkyoukfuyfjytdtrjtr' 
      },
    { href: '#', text: 'Experience',
       message: 'ydrjdkuykutdjrsjytkkyyrse' 
      },
    { href: '#', text: 'Education & Certification', 
      message: 'fdzhfyouyfytsdjjdrtx'
     }
  ];

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
    setMessage(links[index].message); 
  };

  return (
    <div>
      <ul className='aside-links'>
        {links.map((link, index) => (
          <li key={link.text}>
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
      <p>{message}</p> 
    </div>
  );
};

