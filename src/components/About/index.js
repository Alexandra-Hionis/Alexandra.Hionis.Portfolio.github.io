import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

{
  /* <InView threshold={0.25}>
  {" "}
  {({ ref, inView }) => (
    <motion.img
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      id="image-3"
      src={}
      alt=""
    />
  )}{" "}
</InView>; */
}

function AboutHeader() {
  return (
    <InView threshold={0.5}>
      {" "}
      {({ ref, inView }) => (
        <Container
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Row>
            <div class="row columns">
              <Col md={4} class="col fade-in about-section-font fade-margins">
                <h3 class="about-section-header">Learner</h3>
                <p class="about-paragraphs">
                  Recent graduate from Penn LPS Coding Bootcamp. Previously, I
                  earned a bachelor's in Psychology with a minor in Business
                  from Temple University. I started self-teaching myself how to
                  code and I've fallen in love with it ever since.
                </p>
              </Col>

              <Col md={4} class="col fade-in about-section-font fade-margins">
                <h3 class="about-section-header" id="word-wrap">
                  Problem Solver
                </h3>
                <p class="about-paragraphs">
                  My most vivid memories were when I would play Lego bricks with
                  my brother as a child. I loved putting the pieces together and
                  the feeling of accomplishment when I did. This followed me
                  along into adulthood where I loved to study the human mind,
                  and now coding!
                </p>
              </Col>
              <Col md={4} class="col fade-in about-section-font fade-margins">
                <h3 class="about-section-header">Empath</h3>
                <p class="about-paragraphs">
                  I am an empath. I have a natural curiosity for the needs of
                  others and I have always been drawn to ways in which I can
                  help individuals. I am ever-present and I am always in touch
                  with others around me.
                </p>
              </Col>
            </div>
          </Row>
        </Container>
      )}{" "}
    </InView>
  );
}

export default AboutHeader;