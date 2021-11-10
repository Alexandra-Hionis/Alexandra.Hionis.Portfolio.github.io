import React from "react";
import "./styles.css";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const FooterContent = () => {
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
      <div ref={ref}>
        <Row>
          <Col lg={12}>
            <motion.div className="info-div" animate={animation}>
              <div className="footer-logo">
                <a href="/">
                  <img
                    alt="logo"
                    src={process.env.PUBLIC_URL + "/images/logo.png"}
                    width="90px"
                    height="90px"
                  />
                </a>
              </div>
              <p id="footer-p">Check me out on my other social media links:</p>

              <div>
                {/* github */}
                <a target="_blank" href="https://github.com/Alexandra-Hionis">
                  <img
                    alt="icon"
                    className="social-icons"
                    src={process.env.PUBLIC_URL + "/images/github.png"}
                    width="36px"
                    height="36px"
                  />
                </a>

                {/* LinkedIn */}
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/alexandra-hionis/"
                >
                  <img
                    alt="icon"
                    className="social-icons"
                    src={process.env.PUBLIC_URL + "/images/linkedin.png"}
                    width="36px"
                    height="36px"
                  />
                </a>

                {/* Fiverr */}
                <a
                  target="_blank"
                  href="https://www.fiverr.com/ah_websites?up_rollout=true"
                >
                  <img
                    alt="icon"
                    className="social-icons"
                    src={process.env.PUBLIC_URL + "/images/fiverr.png"}
                    width="36px"
                    height="36px"
                  />
                </a>

                {/* Upwork */}
                <a
                  target="_blank"
                  href="https://www.upwork.com/freelancers/~01f4c77eb5abe7904e"
                >
                  <img
                    alt="icon"
                    className="social-icons"
                    src={process.env.PUBLIC_URL + "/images/upwork.png"}
                    width="36px"
                    height="36px"
                  />
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default FooterContent;
