import React, { useState, useEffect } from "react";
// Style(s)
import "./landingbackground.scss";

function LandingBackground() {
  const HEX_WIDTH = 100;
  const HEX_HEIGHT = 110;

  const [viewportDimensions, setViewportDimensions] = useState(generateViewportDimensions());
  const [background, setBackground] = useState(buildHexRows());

  useEffect(() => {
    function handleResize() {
      setViewportDimensions(generateViewportDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  useEffect(() => {
    setBackground(buildHexRows());
  }, [viewportDimensions]);

  function generateViewportDimensions() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    return { vw, vh };
  }

  function buildHexRows() {
    let displayRows = [];
    for (let row = 0; row < Math.floor((viewportDimensions.vh / 2.5) / (HEX_HEIGHT * 0.7)) + 1; row++) {
      let displayHexagons = []
      for (let hex = 0; hex < Math.ceil(viewportDimensions.vw / HEX_WIDTH) + 1; hex++) {
        displayHexagons.push(<div key={`${row}${hex}`} className="hexagon"></div>);
      }
      displayRows.push(
        <div key={row} className="row">
          {displayHexagons}
        </div>
      );
    }
    return displayRows;
  }

  return (
      <div className="page-container">
        <div className="background-container">
         {background}
        </div>
      </div>
  );
}

export default LandingBackground;