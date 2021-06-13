import React from "react";
// Component(s)
import PageSection from "../../PageSection/PageSection.jsx";
// Style(s)
import "./contact.scss";

function Contact({ sectionId }) {
  return (
    <PageSection sectionId={sectionId}>
      <h1>CONTACT!</h1>
    </PageSection>
  );
}

export default React.memo(Contact);