import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import Button from '@mui/material/Button';
import Header from "./Components/Header";
import Asidecontent from "./Components/Asidecontent";

export function Welcome() {
  return (
    <div className="App">
      <div className="main-section">
        <Header />
        <div className="main-content">
          <p>WELCOME TO MY WORLD</p>
          <h1>Hi, I'm Mpamugo Emmanuel</h1>
          <h2>JS Developer</h2>
          <h3>based in Nigeria</h3>
        </div>
      </div>
      <div className="aside-section">
        <div className="aside-image">
          <img src="https://th.bing.com/th?id=OIP.NDFRprXAshJvW03tygWo3AHaKy&w=207&h=301&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="picture of me" />
        </div>
        <div>
          <div className="aside-text">
            <h2>About me</h2>
            <p>rjtkytytrdtjrsdky7l98yl9u8lituyyjtdtrsaesahrdkyl
               rjjthrshtrsjytl8u7igykudyrshtrkylugkyfystehfjkyuy
               dfdjtkyu;iu'ioogufydstrjytkylu;i;iiugufnhfdstjylkulf
               fdjtykulilj,hfdtrfjgkhh
            </p>
            <Asidecontent />
          </div>
        </div>

      </div>  
    </div>
   
    
  );
}


