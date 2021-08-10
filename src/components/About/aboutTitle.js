import React from "react";
import "./styles.css";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect } from "react";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const AboutTitle = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    //   if parent in view, start animation
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 2 },
      });
    }
    // if not in view, start another animation. Completely off screen
    if (!inView) {
      animation.start({ opacity: 0, scale: 0 });
    }
  }, [inView]);

  return (
    <div id="about">
      <Row>
        <Col md={12}>
          <div className="mobile-view">
            <p>
              For the best experience, turn your mobile device's browser
              horizontal
              <img
                alt="logo"
                src={process.env.PUBLIC_URL + "/images/arrw.png"}
                width="15em"
                height="15em"
                marginLeft="3px"
              />
            </p>
          </div>
        </Col>
      </Row>
      <div ref={ref}>
        <Container>
          <motion.div animate={animation}>
            <Row>
              <Col md={12}>
                {" "}
                <img
                  // ref={(el) => {
                  //   logoItem = el;
                  // }}
                  alt="Alexandra Hionis"
                  src={process.env.PUBLIC_URL + "/images/my-image.png"}
                  to="/services"
                  // width="100%"
                  // height="100%"
                  id="my-photo"
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h1 className="about-font">
                  Welcome to my page! Nice to meet you.
                </h1>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default AboutTitle;
