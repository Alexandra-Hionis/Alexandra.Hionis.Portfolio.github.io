import React from "react";
import "./styles.css";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const ProjectButtons = () => {
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

    if (!inView) {
      animation.start({ opacity: 0, scale: 0 });
    }
  }, [inView]);

  return (
    <div id="about">
      <Container>
        <div ref={ref}>
          <motion.div animate={animation}>
            <div id="btn-space">
              <Button
                className="btn-sm"
                style={{ margin: "5px" }}
                variant="dark"
                href="https://github.com/Alexandra-Hionis/Out-Of-Office"
              >
                GitHub
              </Button>

              <Button
                className="btn-sm"
                style={{ margin: "5px" }}
                variant="dark"
                href="https://out-of-office1.herokuapp.com/"
              >
                Visit Site
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectButtons;
