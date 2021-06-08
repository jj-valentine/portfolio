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
    <header className={"header-container" + (state.scroll.prevHeight > 20 ? " header-on-scroll" : "")}>
      <Link to="/">JV</Link>
      <Navigation />
    </header>
  );
}

export default Header;