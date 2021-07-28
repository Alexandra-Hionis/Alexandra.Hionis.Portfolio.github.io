import React from "react";

import PhillyMobile from "./philly-mobile.mp4";
import "./styles.css";
import Philly from "./philly.mp4";
// Add poster which will be displayed while video is loading
import Poster from "./philly-img.png";
import Typewriter from "./typewriter";

import Carousel from "react-bootstrap/Carousel";

const VideoCarousel = () => {
  return (
    <div className="video-div">
      <Carousel>
        <Carousel.Item className="carousel-item">
          <video
            className="d-block w-100"
            preload="auto"
            playsinline
            autoPlay
            loop
            muted
            poster={Poster}
            style={{ filter: "brightness(45%)", backgroundSize: "contain" }}
            // Played around with styling to also fit navbar
          >
            <source src={Philly} type="video/mp4" />
            <source
              src={PhillyMobile}
              type="video/mp4"
              media="(min-width:0px) and (max-width:767px)"
            />
          </video>
          {/* Set overflowY to hidden so scroll bar in div disappears  */}
          <Carousel.Caption style={{ overflowY: "hidden" }}>
            <h1 className="header">Hi, I'm Alexandra Hionis </h1>
            <h1 className="header2">Front End Web Developer</h1>
            <Typewriter />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
