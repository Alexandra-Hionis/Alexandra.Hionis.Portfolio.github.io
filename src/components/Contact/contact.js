import React from "react";

import ContactTitle from "./contactTitle";
import ContactInfo from "./contactInfo";

// import AboutImage from "./image";

const About = () => {
  return (
    <div className="contact-div" id="contact">
      {/* <AboutImage /> */}
      <ContactTitle />
      <ContactInfo />
    </div>
  );
};

export default About;
