import React from "react";
import "./styles.css";
import Philly from "../video/philly.mp4";
import Poster from "../photobackground/philly-img.png";
import Typewriter from "typewriter-effect";

// function VideoBackground() {
//   return (
//     <div className="home">
//       <video
//         autoPlay
//         loop
//         muted
//         poster={Poster}
//         // Played around with styling to also fit navbar
//         style={{
//           position: "relative",

//           filter: "brightness(45%)",
//           width: "101%",
//           left: "50%",
//           right: "50%",
//           top: "50%",
//           height: "151%",
//           objectFit: "cover",
//           transform: "translate(-50%, -50%)",
//           zIndex: "-1",
//         }}
//       >
//         <source src={Philly} type="video/mp4" />
//       </video>

//       <div
//         style={{
//           position: "relative",
//           left: "50%",
//           top: "50%",
//           transform: "translate(-50%, -50%)",
//           width: "100%",
//         }}
//       >
//         <h1 className="carousel-caption">Alexandra Hionis</h1>
//         <h1 className="carousel-caption">Front End Web Developer</h1>
//         <Typewriter
//           className="Typewriter__wrapper Typewriter__cursor"
//           options={{
//             strings: ["I bring websites to life"],
//             autoStart: true,
//             loop: true,
//           }}
//         />

//         <div>
//           <img
//             alt="down arrow"
//             src={process.env.PUBLIC_URL + "/images/arrow.png"}
//             to="/about"
//             href="#about"
//             width="100vw"
//             height="100vh"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VideoBackground;

import Carousel from "react-bootstrap/Carousel";

const VideoBackground = () => {
  return (
    <Carousel className="carousel slide">
      <Carousel.Item>
        <video
          autoPlay
          loop
          muted
          poster={Poster}
          // Played around with styling to also fit navbar
          className="d-block w-100"
        >
          <source src={Philly} type="video/mp4" />
        </video>
        <Carousel.Caption>
          <h1 className="carousel-caption">Alexandra Hionis</h1>
          <h1 className="carousel-caption">Front End Web Developer</h1>
          <Typewriter
            className="Typewriter__wrapper Typewriter__cursor"
            options={{
              strings: ["I bring websites to life"],
              autoStart: true,
              loop: true,
            }}
          />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default VideoBackground;
