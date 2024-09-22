import React from "react";
import "./App.css";
import il from "./assets/li.svg";
import github from "./assets/github.png";
import mycomp from "./assets/My Computer.svg";

const App: React.FC = () => {
  return (
    <div>
      <h1 className="nametxt">Trung Ly </h1>
      <div className="rectangle-1"></div>
      <a
        href="https://www.linkedin.com/in/trung-ly-30151b184/"
        target="blank"
        rel="noopener noreferrer"
      >
        <img
          src={il}
          alt="LinkedIn"
          className="li.svg"
          style={{
            position: "fixed",
            width: "60px",
            height: "36px",
            top: "60px",
            left: "115px",
          }}
        />
      </a>

      <a
        href="https://github.com/trungly2345/portfolioWebApp"
        target="blank"
        rel="noopener noreferrer"
      >
        <img
          src={github}
          alt="GitHub"
          className="github.png"
          style={{
            position: "fixed",
            width: "45px",
            height: "36px",
            top: "60px",
            left: "170px",
          }}
        />
      </a>

      <h1 className="opener">Welcome to my portfolio website!</h1>
      <img src={mycomp} style={{position:"absolute",top:"85px", left:"990px", width:"65px",height:"auto"}}/>
    </div>
  );
};

export default App;
