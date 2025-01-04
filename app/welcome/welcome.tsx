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
          <h2>JS Developer.</h2>
          <h3>based in Nigeria.</h3>
        </div>
      </div>
      <div className="aside-section">
        <div className="aside-image">
          <img src="https://th.bing.com/th/id/OIF.1TGeC8ucJMpx6g5VpKnN4A?w=128&h=220&c=7&r=0&o=5&pid=1.7"  alt="picture of me" />
        </div>
        <div className="aside-content">
          <div className="aside-text">
            <h2>About me</h2>
            <p>Highly motivated and creative Developer
               eager to contribute to innovative projects,
               collaborate with talented teams and
               learn new ideas to be more efficient.
            </p>
            <div className="aside-side-note">
              <Asidecontent />
            </div>
           
          </div>
        </div>

      </div>  
    </div>
   
    
  );
}


