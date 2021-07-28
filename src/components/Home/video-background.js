import React from "react";

import PhillyMobile from "./philly-mobile.mp4";
import "./styles.css";
import Philly from "./philly.mp4";
// Add poster which will be displayed while video is loading
import Poster from "./philly-img.png";
import Typewriter from "typewriter-effect";
import Carousel from "react-bootstrap/Carousel";

const VideoCarousel = () => {
  return (
    <div className="video-div">
      <Carousel>
        <Carousel.Item className="carousel-item">
          {/* <img
            alt="logo"
            src={process.env.PUBLIC_URL + "/images/blackimg.jpeg"}
            width="100%"
            height="100%"
            object="cover"
            paddingBottom="20%"
            className="d-inline-block
          align-top"
          /> */}
          <video
            className="d-block w-100"
            playsinline
            autoPlay
            loop
            muted
            poster={Poster}
            style={{ filter: "brightness(45%)", backgroundSize: "contain" }}
            // Played around with styling to also fit navbar
          >
            <source src={Philly} type="video/mp4" />
          </video>

          <Carousel.Caption>
            <h1 className="header">Hi, I'm Alexandra </h1>
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
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
