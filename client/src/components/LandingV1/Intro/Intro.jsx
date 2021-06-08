import React, { useState } from "react";
// import Typewriter from "typewriter-effect";
// Style(s)
import "./intro.scss";

function Intro() {
  const HEADERS = {
    "name": "hi! my name is james",
    "title": "i'm a full-stack JS developer"
  }

  const [header, setHeader] = useState(HEADERS.name);

  function changeHeader(e) {
    e.preventDefault();
    setHeader(header === HEADERS.name ? HEADERS.title : HEADERS.name);
  }

  return (
    <div className="outer-container">
      <div className="intro-container">
      {/* <Typewriter     
        onInit={typewriter => {
        typewriter
        .typeString("hi!")
        .pauseFor(1000)
        .deleteAll()
        .typeString("my name is james")
        .start();
      }} */}
      />
        {/* <h1 className="intro-header" onClick={e => changeHeader(e)}>
          {header}
        </h1> */}
      </div>
    </div>
  );
}

export default Intro;