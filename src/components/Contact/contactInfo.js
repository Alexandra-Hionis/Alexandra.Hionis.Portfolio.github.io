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
          <Col>
            <motion.div animate={animation} className="contact-info-div">
              {/* <svg viewBox="0 0 10 10">
                <polygon points="3 0, 7 0, 10 3, 10 7, 7 10, 3 10, 0 7, 0 3" />
              </svg> */}
              <Row>
                <Col md={12}>
                  <p>
                    <img
                      alt="email icon"
                      src={process.env.PUBLIC_URL + "/images/email-icon.png"}
                      width="45px"
                      height="45px"
                      id="contact-icon"
                    />
                    <a
                      class="contact-link"
                      href="mailto:alexandra.hionis@gmail.com"
                    >
                      alexandra.hionis@gmail.com
                    </a>
                  </p>
                </Col>
              </Row>
              {/* <Row>
                <Col md={12}>
                  <p>
                    <img
                      alt="logo"
                      src={process.env.PUBLIC_URL + "/images/logo.png"}
                      width="105px"
                      height="105px"
                      // id="contact-icon"
                    />
                  </p>
                </Col>
              </Row> */}
            </motion.div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AboutInfo;
