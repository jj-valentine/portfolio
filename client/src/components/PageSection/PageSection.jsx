import React from "react";
// Style(s)
import "./pagesection.scss";

function PageSection(props) {
  console.log("test");
  return (
    <section id={props.sectionId}>
      { props.children }
    </section>
  );
}

export default PageSection;
