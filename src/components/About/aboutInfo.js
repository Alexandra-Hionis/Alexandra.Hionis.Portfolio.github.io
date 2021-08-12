import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import { useEffect } from "react";
import { motion } from "framer-motion";
import classes from "./styles.css";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
// import { TweenMax, Power3 } from "gsap";
// import { gsap } from "gsap";

const AboutInfo = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    //   if parent in view, start animation
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
      });
    }
    // if not in view, start another animation. Completely off screen
    if (!inView) {
      animation.start({ opacity: 0, scale: 0 });
    }
  }, [inView]);

  return (
    <Container>
      <div ref={ref}>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            {/* we want to puth parent div left off screen and let it slide in */}
            <motion.div className="info-div" animate={animation}>
              <p id="about-me">
                I am a{" "}
                <span className="about-info">Front-End Web Developer</span>{" "}
                living in Philadelphia, PA. I have 1 year experience building
                20+ projects and gained skills in{" "}
                <span className="about-info">
                  HTML5, CSS3, JAVASCRIPT, REACT.JS, NODE.JS, BOOTSTRAP,{" "}
                </span>{" "}
                and more! I have a serious passion for coding and bringing
                websites to life. If you're looking for a{" "}
                <span className="about-info">
                  simple and beauftiful website,{" "}
                </span>{" "}
                you've found the right place! And if you're looking for a{" "}
                <span className="about-info">
                  quietly confident and naturally curious developer,
                  {/* innovative problem-solver who is passionate about developing websites */}
                </span>{" "}
                you've found one!
              </p>
            </motion.div>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </div>
    </Container>
  );
};

export default AboutInfo;
