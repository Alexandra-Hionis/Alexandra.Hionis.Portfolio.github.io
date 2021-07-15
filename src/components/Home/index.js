import React from "react";
import "./styles.css";
import Philly from "../video/philly.mp4";

const Home = () => {
  return (
    <div className="App">
      <video
        autoPlay
        loop
        muted
        // Played around with styling to also fit navbar
        style={{
          position: "absolute",
          filter: "brightness(65%)",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={Philly} type="video/mp4" />
      </video>
      <div className="title">
        <h1>Alexandra Hionis</h1>
        <h1>Front End Web Developer</h1>
      </div>
    </div>
  );
};

export default Home;
