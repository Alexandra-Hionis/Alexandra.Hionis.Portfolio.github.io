import React from "react";
import "./styles.css";
import Philly from "../video/philly.mp4";
import Poster from "../photobackground/philly-img.png";

const Home = () => {
  return (
    <div className="App">
      <video
        autoPlay
        loop
        muted
        poster={Poster}
        // Played around with styling to also fit navbar
        style={{
          position: "absolute",
          filter: "brightness(45%)",
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
      {/* <img
        src={process.env.PUBLIC_URL + "/philly-img.png"}
        alt="philadelphia skyline"
      /> */}
      <div className="title">
        <h1 className="header">Alexandra Hionis</h1>
        <h1 className="header">Front End Web Developer</h1>
      </div>
    </div>
  );
};

export default Home;
