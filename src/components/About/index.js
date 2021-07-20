import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect } from "react";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const About = () => {
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
      animation.start({ opacity: 0, scale: 0, transition: { duration: 2 } });
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <Container>
        <motion.div animate={animation}>
          <Row>
            <Col md={4}>
              <h3 className="about-section-header">Learner</h3>
              <p className="about-paragraphs">
                Recent graduate from Penn LPS Coding Bootcamp. Previously, I
                earned a bachelor's in Psychology with a minor in Business from
                Temple University. I started self-teaching myself how to code
                and I've fallen in love with it ever since.
              </p>
            </Col>

            <Col md={4}>
              <h3 className="about-section-header" id="word-wrap">
                Problem Solver
              </h3>
              <p className="about-paragraphs">
                My most vivid memories were when I would play Lego bricks with
                my brother as a child. I loved putting the pieces together and
                the feeling of accomplishment when I did. This followed me along
                into adulthood where I loved to study the human mind, and now
                coding!
              </p>
            </Col>
            <Col md={4}>
              <h3 className="about-section-header">Empath</h3>
              <p className="about-paragraphs">
                I am an empath. I have a natural curiosity for the needs of
                others and I have always been drawn to ways in which I can help
                individuals. I am ever-present and I am always in touch with
                others around me.
              </p>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default About;
