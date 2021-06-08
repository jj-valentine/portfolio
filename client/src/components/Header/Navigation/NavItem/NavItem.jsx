import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import { CSSTransition } from "react-transition-group";
// Style(s)
import "./navitem.scss";

function NavItem({ section, animateEntrance, order }) {
  const sectionLowerCase = section.toLowerCase();

  const scrollWithOffset = el => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = 0; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <CSSTransition timeout={500 * order} in={animateEntrance} classNames="animate-nav-item">
      <li className="nav-list-item" style={{ "--order": order }}>
        <Link smooth to={`#${sectionLowerCase}`} id={`nav-${sectionLowerCase}`} className="nav-item-link" >
          { section }
        </Link>
      </li>
    </CSSTransition>
  );
}

export default NavItem;