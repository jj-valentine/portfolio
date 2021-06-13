import React from "react";
// Component(s)
import PageSection from "../../PageSection/PageSection.jsx";
// Style(s)
import "./about.scss";

function About({ sectionId }) {
  return (
    <PageSection sectionId={sectionId}>
      <h1>ABOUT!</h1>
    </PageSection>
  );
}

export default React.memo(About);