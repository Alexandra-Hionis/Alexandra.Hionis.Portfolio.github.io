import React from "react";
import "./styles.css";
import Philly from "../video/philly.mp4";
import Poster from "../photobackground/philly-img.png";

function Home() {
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
    </div>
  );
}

export default Home;
