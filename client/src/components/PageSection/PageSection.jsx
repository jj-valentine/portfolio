import React from "react";
// Style(s)
import "./pagesection.scss";

function PageSection(props) {
  return (
    <section id={props.sectionId}>
      { props.children }
    </section>
  );
}

export default PageSection;
