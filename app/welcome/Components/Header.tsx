import { ClassNames } from "@emotion/react"
import React from "react"
import Leftnavbar from "./Leftnavbar"

export default function Header(){
    return(
        <div className="nav-bar">
            <section className="navbar-left">
                <div className="site-logo">
                    <img src="https://th.bing.com/th?id=OIP.E6-fcGDeuehNrqgvJ-gFHwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                     alt="logo" 
                    />
                </div>
                <div>
                    <Leftnavbar />  
                </div>
            </section>
            <section className ="navbar-right">
                <div className="social-media-links">
                    
                    <a href="">
                        <img src="http://ts3.mm.bing.net/th?id=OIP.YI7Mm10-VXJIHpe2nUIELAHaHu&pid=15.1" alt="Facebook" />
                    </a>
                    <a href="">
                        <img src="http://ts1.mm.bing.net/th?id=OIP._tVVYYJuM4vHzMb9cz5hbQHaHk&pid=15.1" alt="Facebook" />
                    </a>
                    <a href="">
                        <img src="https://th.bing.com/th/id/OIP.3yiEEUsMl2WzvglZvjrskQHaHa?w=173&h=180&c=7&r=0&o=5&pid=1.7" alt="Facebook" />
                    </a>
                    <a href="">
                        <img src="http://ts1.mm.bing.net/th?id=OIP.zbPcXa9Yqki-cOH3lhlycAHaHu&pid=15.1" alt="Facebook" />
                    </a>
                    
                </div>
                <div className="nav-button">
                    <button>BUY NOW</button>
                </div>
             </section>
        </div>
    )
}
    
        
    