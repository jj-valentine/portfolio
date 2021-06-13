import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import { CSSTransition } from "react-transition-group";
// Component(s)
// Style(s)
import "./navitem.scss";

function NavItem({ section, animateEntrance, order }) {
  const sectionLowerCase = section.toLowerCase();

  return (
    <CSSTransition timeout={500 * order} in={animateEntrance} classNames="animate-nav-item">
      <li className="nav-list-item" style={{ "--order": order }}>
        <Link to={`#${sectionLowerCase}`} id={`nav-${sectionLowerCase}`} className="nav-item-link" >
          { section }
        </Link>
      </li>
    </CSSTransition>
  );
}

export default NavItem;