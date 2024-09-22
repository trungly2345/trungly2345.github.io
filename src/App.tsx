import React from "react"
import './App.css'; 
import il from './assets/li.svg';





const App: React.FC = () => {

 
  return (
    
      <div>
        <h1 className="nametxt">Trung Ly </h1>
        <div className="rectangle-1"></div>
        <a href="https://www.linkedin.com/in/trung-ly-30151b184/" target="blank" rel="noopener noreferrer">
        <img 
        src= {il} 
        alt="LinkedIn"
        className="li.svg" 
        style={{position:'absolute',width: '60px',height:'36px',top:'60px',left:'115px'}}
        
        />
        </a>

        
    </div>
  );
};


export default App;