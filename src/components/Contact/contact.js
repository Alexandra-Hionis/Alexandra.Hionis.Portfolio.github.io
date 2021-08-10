import React from "react";

import ContactTitle from "./contactTitle";
import ContactInfo from "./contactInfo";

// import Image from "../About/image";

const About = () => {
  return (
    <div className="contact-div" id="contact">
      <ContactTitle />
      <ContactInfo />
      {/* <Image /> */}
    </div>
  );
};

export default About;
