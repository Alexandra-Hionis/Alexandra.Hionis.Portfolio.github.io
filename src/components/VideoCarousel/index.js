import React from "react";
import "./styles.css";
import Philly from "../video/philly.mp4";
import Poster from "../photobackground/philly-img.png";
import Typewriter from "typewriter-effect";
import Carousel from "react-bootstrap/Carousel";

const VideoBackground = () => {
  return (
    <div id="top">
      <Carousel style={{}}>
        <Carousel.Item>
          <div className="video-background">
            <video
              className="d-block w-100"
              autoPlay
              loop
              muted
              poster={Poster}
              style={{ filter: "brightness(45%)" }}
              // Played around with styling to also fit navbar
            >
              <source src={Philly} type="video/mp4" />
            </video>
            <Carousel.Caption>
              <h1 className="header">Hi, I'm Alexandra Hionis</h1>
              <h1 className="header2">Front End Web Developer</h1>
              <Typewriter
                className="Typewriter__wrapper Typewriter__cursor"
                options={{
                  strings: ["I bring websites to life."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default VideoBackground;
