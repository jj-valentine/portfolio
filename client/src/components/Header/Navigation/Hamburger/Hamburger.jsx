import React, { useState, useEffect } from "react";
// Style(s)
import "./hamburger.scss";

function Hamburger({ toggleBurgerMenu }) {
  const [burgerStateClass, setBurgerStateClass] = useState(null);

  useEffect(() => {
    function handleResize() {
      setBurgerStateClass(null);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleBurgerState(e) {
    e.preventDefault();
    toggleBurgerMenu(e);
    if (!burgerStateClass || burgerStateClass === "is-closed") setBurgerStateClass("is-open");
    else setBurgerStateClass("is-closed");

  }

  return (
    <div className={"hamburger " + (burgerStateClass || "")} onClick={e => toggleBurgerState(e)}>
      <div className="burger-icon">
        <div className="burger-container">
          <span className="burger-top"></span>
          <span className="burger-middle"></span>
          <span className="burger-bottom"></span>
        </div>
      </div>
    
      {/* Ring Container (SVG) */}
      <div className="burger-ring">
        <svg className="svg-ring">
          <path className="path" fill="none" stroke="#FF6665" strokeMiterlimit="10" strokeWidth="4" d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2" />
        </svg>
      </div>

      {/* Masked Path (Animates Ring Filling) */}    
      <svg width="0" height="0">
        <mask id="mask">
          <path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#FF6665" strokeMiterlimit="10" strokeWidth="4" d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4" />
        </mask>
      </svg>

      <div className="path-burger">
        <div className="animate-path">
          <div className="path-rotation"></div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;