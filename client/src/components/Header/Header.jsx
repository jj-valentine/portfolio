import React, { useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
// Component(s)
import Navigation from "./Navigation/Navigation.jsx";
import StateContext from "../StateContext.jsx";
// Style(s)
import "./header.scss";

function Header() {
  const state = useContext(StateContext);


  return (
    // TODO: figure out a way to make this conditional styling more elegant 
    <header className={"header-container" + (state.scroll.prevHeight > 20 ? " header-on-scroll" : "") + (state.header.isMenuOpen ? " header-on-scroll open-menu" : " close-menu")}>
      <Link to="#" className="header-logo-link">
        <h1 className="header-logo">
          <span>val</span>
          <span>ent</span>
          <span>ine</span>
        </h1>
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;