import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
// Component(s)
import StateContext from "../StateContext.jsx";
import ShapeDivider from "../ShapeDivider/ShapeDivider.jsx";
// Style(s)
import "./welcome.scss";

function Welcome() {
  const state = useContext(StateContext)

  const shapeDividers = new Array(3)
  .fill(null)
  .map((divider, i) => {
    return (
      <CSSTransition key={i} timeout={750} in={state.animateOnEnter} classNames="animate-shape-divider">
        <ShapeDivider key={i} layerNumber={i + 1} />
      </CSSTransition>
    );
  });

  return (
    <section id="welcome">
      { shapeDividers }
    </section>
  );
}

export default Welcome;