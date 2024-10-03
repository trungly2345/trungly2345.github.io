import React from "react";
import "./App.css";
import il from "./assets/li.svg";
import github from "./assets/github.png";
import { useState } from "react";
import Button from "./components/Button";


const App: React.FC = () => {
  const [hoveredLinkedIn, setHoveredLinkedIn] = useState<boolean>(false);
  const [hoveredGitHub, setHoveredGitHub] = useState<boolean>(false);
  const FileUrl = "src/ResumeTLy.pdf";

  const saveFile = () => {
    
    const anchor = document.createElement('a');
    anchor.href = FileUrl;
    anchor.href = FileUrl;
    anchor.download = 'CV_Trung_Ly.pdf';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // 1 Lifecycle methods (Hooks) - useState(), useEffect()
  // 2 Making components

  // Make a contact me form
  // Take an imput of someones email, and message
  // Then send yourself an email based of the data

  // 3 LEARN ABOUT FLEX BOX!!

  return (
    <div>
      <text className="nametxt">TrungLy.io</text>
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
            transform: hoveredLinkedIn ? "scale(1.2)" : "scale(1)",
            opacity: hoveredLinkedIn ? 1 : 1,

            transition: "transform 0.3s, opacity .1s",
            position: "relative",
            width: "60px",
            height: "36px",
            top: "-10px",
            left: "10px",
            imageRendering: "auto",
          }}
          onMouseEnter={() => setHoveredLinkedIn(true)}
          onMouseLeave={() => setHoveredLinkedIn(false)}
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
            transform: hoveredGitHub ? "scale(1.2)" : "scale(1)",
            opacity: hoveredGitHub ? 1 : 1,

            transition: "transform 0.3s, opacity .1s",
            imageRendering: "auto",
            position: "relative",
            width: "45px",
            height: "36px",
            top: "-10px",
            left: "11px",
          }}
          onMouseEnter={() => setHoveredGitHub(true)}
          onMouseLeave={() => setHoveredGitHub(false)}
        />
      </a>
      <div className="container text-center">
        <h1 className="opener"> Welcome to my portfolio website!</h1>
        <p className="openingP">
          Hi, I'm Trung, a first-generation Vietnamese student and Senior in
          Computer Science at Iowa State University. I'm seeking an internship
          to enhance my skills in mobile app development and broader computer
          science roles.
        </p>

        <p className="openingP">
          Passionate about technology's role in shaping society, I aim to
          contribute to innovations that improve everyday life. Let's connect to
          explore how I can bring my skills and enthusiasm to a dynamic team.
        </p>

        {/* Contact and download button */}
        <div className="btn-group gap-5">
          <Button
            whenClicked={() => {
              console.log("clicked");
            }}
            msg="Contact Me"
          />
          <Button 
          whenClicked={() => {
            console.log("CV downloaded!")
            saveFile();

          }} msg="Download CV" 

            />
        </div>
      </div>
    </div>
  );
};

export default App;
