import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";

const HomeHeader = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
      }}
    >
      <h1 className="header">Alexandra Hionis</h1>
      <h1 className="header">Front End Web Developer</h1>
      <Typewriter
        className="Typewriter__wrapper Typewriter__cursor"
        options={{
          strings: ["I bring websites to life"],
          autoStart: true,
          loop: true,
        }}
      />

      <div>
        <img
          alt="down arrow"
          src={process.env.PUBLIC_URL + "/images/arrow.png"}
          to="/about"
          width="100vw"
          height="100vh"
        />
      </div>
    </div>
  );
};
export default HomeHeader;
