import { ClassNames } from "@emotion/react"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import Leftnavbar from "./Leftnavbar"

export default function Header(){
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
                    <a href=""><button>DOWNLOAD CV</button></a>
                    
                </div>
             </section>
        </div>
    )
}
    
        
    