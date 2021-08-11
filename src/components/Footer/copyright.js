import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import { Row, Col, Container } from "react-bootstrap";

import "./styles.css";

function Copyright() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    if (inView) {
      animation.start({ x: 0, transition: { duration: 2 } });
    }
    // Slide in from left
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <footer ref={ref}>
            <motion.div animate={animation} className="copyright">
              <p>Copyright &copy; Alexandra Hionis and A.H. Websites 2021</p>
            </motion.div>
          </footer>
        </Col>
      </Row>
    </Container>
  );
}
export default Copyright;
