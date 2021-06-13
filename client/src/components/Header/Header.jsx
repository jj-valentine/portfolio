import React, { useContext, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
// Component(s)
import Navigation from "./Navigation/Navigation.jsx";
import StateContext from "../StateContext.jsx";
// Style(s)
import "./header.scss";

function Header() {
  const state = useContext(StateContext);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <header className={"header-container" + (state.scroll.prevHeight > 20 ? " header-on-scroll" : "")}>
      <Link to="#">
        <h1>valentine</h1>
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;