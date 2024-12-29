import { ClassNames } from "@emotion/react"
import React from "react"
import Leftnavbar from "./Leftnavbar"

export default function Header(){
    return(
        <div className="nav-bar">
            <section className="navbar-left">
                <div>
                    <img src="" alt="logo" />
                </div>
                <div>
                    <Leftnavbar />  
                </div>
            </section>
            <section>
                <div>
                    <a href="">Fb</a>
                    <a href="">In</a>
                    <a href="">Tw</a>
                    <a href="">Ln</a>
                </div>
                <div>
                    <button>BUY NOW</button>
                </div>
             </section>
        </div>
    )
}
    
        
    