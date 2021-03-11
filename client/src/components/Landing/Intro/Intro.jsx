import React, { useState } from "react";
// Style(s)
import "./intro.scss";

function Intro() {
  const HEADERS = {
    "name": "hi! my name is james",
    "title": "i'm a full-stack JS developer"
  }

  const [header, setHeader] = useState(HEADERS.name);
  const [showText, setShowText] = useState(false);

  function changeHeader(e) {
    e.preventDefault();
    setHeader(header === HEADERS.name ? HEADERS.title : HEADERS.name);
  }
  
  function toggleText(e, shouldToggle) {
    e.preventDefault();
    setShowText(shouldToggle);
  }

  return (
    <div className="intro-container">
      <h1 
        className="intro-header" 
        onClick={e => changeHeader(e)} 
        onMouseEnter={e => toggleText(e, true)} 
        onMouseLeave={e => toggleText(e, false)}
      >
        {header}
      </h1>
      
      {
        showText && (
          <p className={"intro-text"}>
            i love building things, solving complex problems, and most of all LEARNING and TEACHING!
          </p>
        )  
      }
    </div>
  );
}

export default Intro;