import React, { useState } from 'react';

export default function Asidecontent(){

  
  const links = [
    { href: '#', text: 'Skills', 
      message: 'jyjrjrdrjtykytkdrjrktktdtdjkff - jytdhtrshntkykjukyteejtjytdjtyktdtdkytdjyrshtrsjrtjtrrsuyhkguylumhgmhgfngfdsgshgdjytg'
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
  const [activeLink, setActiveLink] = useState(0);
  const [message, setMessage] = useState(links[0].message);

  const handleLinkClick = (index: number, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActiveLink(index);
    setMessage(links[index].message); 
   
  };

  return (
    <div className='aside-link-text'>
      <ul className='aside-links'>
        {links.map((link, index) => (
          <li key={link.text}>
            <a
              href={link.href}
              style={{ color: index === activeLink ? 'blue' : 'white' }}
              onClick={(event) => handleLinkClick(index ,event)}
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

