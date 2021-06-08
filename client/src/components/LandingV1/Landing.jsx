import React from "react";
// Component(s)
import LandingBackground from "./LandingBackground/LandingBackground.jsx";
import NavBar from "../NavBar/NavItem.jsx";
import Intro from "./Intro/Intro.jsx";
// Style(s)
import "./landing.scss";

function Landing() {  
  return (
    <div className="landing-container">
      <Intro />
      <LandingBackground />
    </div>
  );
}

export default Landing;