import React from "react";
import "./styles.css";
import FooterContent from "./footerContent";
import Copyright from "./copyright";
function Footer() {
  return (
    <div className="footer">
      <FooterContent />
      <Copyright />
    </div>
  );
}

export default Footer;
