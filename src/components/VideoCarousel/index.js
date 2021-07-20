import React from "react";
import "./styles.css";
// import Philly from "../video/philly.mp4";
// import Poster from "../photobackground/philly-img.png";
import Typewriter from "typewriter-effect";
import Carousel from "react-bootstrap/Carousel";

const VideoBackground = () => {
  return (
    <Carousel>
      <Carousel.Item className="carousel-item">
        <div className="video-background">
          <img
            alt="logo"
            src={process.env.PUBLIC_URL + "/images/blackimg.jpeg"}
            width="100%"
            height="100%"
            object="cover"
            paddingBottom="20%"
            className="d-inline-block
          align-top"
          />
          {/* <video
            className="d-block w-100"
            autoPlay
            loop
            muted
            poster={Poster}
            style={{ filter: "brightness(45%)" }}
            // Played around with styling to also fit navbar
          >
            <source src={Philly} type="video/mp4" />
          </video> */}
          <Carousel.Caption>
            <h1 className="header">Hi, I'm Alexandra Hionis</h1>
            <h1 className="header2">Front End Web Developer</h1>
            {/* <Typewriter
              className="Typewriter__wrapper Typewriter__cursor"
              options={{
                strings: ["I bring websites to life."],
                autoStart: true,
                loop: true,
              }}
            /> */}
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default VideoBackground;
