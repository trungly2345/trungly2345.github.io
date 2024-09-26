import React from "react";
import "./App.css";
import il from "./assets/li.svg";
import github from "./assets/github.png";
import mycomp from "./assets/My Computer.svg";
import t from "./assets/me.svg";
import Button from "./components/Button";

const App: React.FC = () => {
  // 1 Lifecycle methods (Hooks) - useState(), useEffect()
  // 2 Making components

  // Make a contact me form
  // Take an imput of someones email, and message
  // Then send yourself an email based of the data

  // 3 LEARN ABOUT FLEX BOX!!
  return (
    <div>
      <h5 className="nametxt">Trung Ly</h5>
      <a
        href="https://www.linkedin.com/in/trung-ly-30151b184/"
        target="blank"
        rel="noopener noreferrer">
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
            imageRendering: "auto",
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
            imageRendering: "auto",
            position: "fixed",
            width: "45px",
            height: "36px",
            top: "60px",
            left: "170px",
          }}
        />
      </a>
      <img src={mycomp} className="myImage" />
      <div className="container text-center">
        <h1 className="opener"> Welcome to my portfolio website!</h1>
        <p className="openingP">
          Hi, I'm Trung, a first-generation Vietnamese student and Senior in
          Computer Science at Iowa State University. I'm seeking an internship
          to enhance my skills in mobile app development and broader computer
          science roles.
          <br></br>
          <br></br>
          Passionate about technology's role in shaping society, I aim to
          contribute to innovations that improve everyday life. Let's connect to
          explore how I can bring my skills and enthusiasm to a dynamic team.
        </p>

        {/* Contact and download button */}
        <div className="d-grid gap-2 d-md-block">
          <Button
            whenClicked={() => {
              console.log("clicked");
            }}
            msg="Contact Me"
          />
          <Button whenClicked={() => {}} msg="Download CV" />
        </div>
      </div>
      <img
        src={t}
        alt="Trung Ly"
        className="me.svg"
        style={{
          position: "fixed",
          left: "1122px",
          top: "76px",
          imageRendering: "-moz-crisp-edges",
        }}
      />
    </div>
  );
};

export default App;
