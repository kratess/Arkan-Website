import React from 'react';
import './App.css';

import background from "./assets/img/background.png";
import characters from "./assets/img/characters.png";
import girl from "./assets/img/girl.png";
import logo from "./assets/img/logo.png";

function App() {
  return (
    <div className="w-full h-full fixed" style={{
      background: `url('${background}') center`,
      backgroundSize: "cover"
    }}>
      <div className='absolute z-10' style={{
        width: 128,
        top: 32,
        left: 32,
        filter: "drop-shadow(2px 4px 6px #fb7600)"
      }}>
        <img src={logo} alt="" />
      </div>

      <div className="w-full h-full absolute" style={{
        filter: "drop-shadow(#FB7600 5px 5px 15px)"
      }}>
        <div className="w-9/12 h-3/6 absolute" style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) skew(-10deg, -1deg)",
          background: "linear-gradient(110deg, rgba(210,163,120,1) 2%, rgba(246,127,21,1) 10%, rgba(251,118,0,1) 85%, rgba(210,184,160,1) 95%)",
          //clipPath: "polygon(20% 25%, 95% 20%, 85% 60%, 10% 65%)"
        }}>
          <div style={{padding: "32px 64px"}}>
            <h2 className='font-bold'>Server Innovativo</h2>
            <h3 className='font-bold'>Nuove meccaniche, nuovi script, nuove macchine</h3>
          </div>
        </div>
      </div>

      <div className='absolute' style={{
        bottom: 0,
        width: 632
      }}>
        <img src={girl} alt="" />
      </div>

      <div className='absolute' style={{
        bottom: 0,
        right: "10%",
        width: 600
      }}>
        <img src={characters} alt="" />
      </div>
    </div>
  );
}

export default App;
