import React, { useContext, useState, useEffect } from "react";
// Component(s)
import StateContext from "../../StateContext.jsx";
import NavItem from "./NavItem/NavItem.jsx";
// Style(s)
import "./navigation.scss";

function Navigation() {
  const state = useContext(StateContext);
  
  const navItems = Object.keys(state.sections).map((section, i) => {
    return <NavItem key={i} section={section} animateEntrance={state.animateOnEnter} order={i + 1} />;
  });

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        { navItems }
        {/* <button>Resume</button> */}
      </ul>
    </nav>
  );
}

export default Navigation;