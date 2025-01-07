import { ClassNames } from "@emotion/react"
import React, {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import Leftnavbar from "./Leftnavbar"
import cvFilePath from './documents/Emma\'s CV.pdf';

export default function Header(){
    const [filePath, setFilePath] = useState(""); 

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvFilePath; 
    link.download = "Emma\'s CV.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    return(
        <div className="nav-bar">
            <section className="navbar-left">
                <div className="site-logo">
                     <FontAwesomeIcon className="site-logo-icon"
                     icon={faMugHot} 
                     color="white" 
                     size="2x"
                     style={{ backgroundColor: 'transparent' }} />
                       
                </div>
                <div>
                    <Leftnavbar />  
                </div>
            </section>
            <section className ="navbar-right">
                <div className="social-media-links">
                    
                    <a href="">
                        <FontAwesomeIcon className="social-media-imgs"
                         icon={faFacebookF}
                         color="white" 
                         style={{ backgroundColor: 'transparent' }} />
                    </a>
                    <a href="">
                    <FontAwesomeIcon className="social-media-imgs"
                        icon={faLinkedinIn} 
                        color="white" 
                        style={{ backgroundColor: 'transparent' }} 
                    />
                    </a>
                    <a href="">
                        <FontAwesomeIcon className="social-media-imgs"
                        icon={faInstagram} 
                        color="white" 
                        style={{ backgroundColor: 'transparent' }} />
                    </a>
                    <a href="">
                        <FontAwesomeIcon className="social-media-imgs"
                        icon={faTwitter} 
                        color="white" 
                        style={{ backgroundColor: 'transparent' }} />
                    </a>
                    
                </div>
                <div className="nav-button">
                    <button onClick={handleDownload}>DOWNLOAD CV</button>
                    
                </div>
             </section>
        </div>
    )
}
    
        
    