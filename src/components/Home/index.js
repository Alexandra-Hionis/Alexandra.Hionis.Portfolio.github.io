import React from "react";
import "./styles.css";
import Philly from "../video/philly.mp4";
import Poster from "../photobackground/philly-img.png";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="home">
      <video
        autoPlay
        loop
        muted
        poster={Poster}
        // Played around with styling to also fit navbar
        style={{
          position: "absolute",
          filter: "brightness(45%)",
          width: "101%",
          left: "50%",
          right: "50%",
          top: "50%",
          height: "101%",
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
        <Typewriter
          className="Typewriter__wrapper Typewriter__cursor"
          options={{
            strings: ["I bring websites to life"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
