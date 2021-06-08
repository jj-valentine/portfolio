import React from "react";
// Style(s)
import "./loading.scss";

function Loading() {
  const circles = new Array(8)
    .fill(null)
    .map((circle, i) => <span key={i} id={`circle-${i}`} style={{ "--i": i }}></span>);

  return (
    <div className="loader-container">
      <div className="loader">
        { circles }
      </div>
    </div>
  );
}

export default Loading;