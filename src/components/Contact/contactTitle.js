import React from "react";
import "./styles.css";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect } from "react";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const ServicesTitle = () => {
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
    <Container>
      <div ref={ref} className="contact-div">
        <motion.div animate={animation}>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <h1 className="component-title">Contact</h1>
              <p className="sub-title">
                Have a question or want to work together? Please feel free to
                reach out! At this time, I host my small freelance business on
                both{" "}
                <a
                  className="freelance-link"
                  target="_blank"
                  href="https://www.fiverr.com/ah_websites?up_rollout=true"
                >
                  Fiverr{" "}
                </a>
                and{" "}
                <a
                  className="freelance-link"
                  target="_blank"
                  href="https://www.upwork.com/freelancers/~01f4c77eb5abe7904e"
                >
                  Upwork{" "}
                </a>
                . You can also reach out via{" "}
                <span className="colored-font">email</span>. I typically respond
                within 24 hours.
              </p>
            </Col>
            <Col md={2}></Col>
          </Row>
        </motion.div>
      </div>
    </Container>
  );
};

export default ServicesTitle;
