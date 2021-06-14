import React, { useContext } from "react";
import { TransitionGroup } from "react-transition-group";
// Component(s)
import StateContext from "../../StateContext.jsx";
import NavItem from "./NavItem/NavItem.jsx";
import Hamburger from "./Hamburger/Hamburger.jsx";

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
        <TransitionGroup>
          { navItems }
        </TransitionGroup>
        {/* <button>Resume</button> */}
      </ul>
      <Hamburger />
    </nav>
  );
}

export default Navigation;