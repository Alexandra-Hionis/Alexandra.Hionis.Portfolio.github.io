import React from "react";
import "./styles.css";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import ListGroup from "react-bootstrap/ListGroup";
import LaunchModal from "./modal";
const ServicesIcon = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    //   if parent in view, start animation
    if (inView) {
      animation.start({ x: 0, transition: { duration: 0.3 } });
    }

    // Slide in from right
    if (!inView) {
      animation.start({ x: "100vw" });
    }
  }, [inView]);

  return (
    <Container>
      <div ref={ref}>
        <motion.div animate={animation}>
          <div
            className="shadow"
            style={{
              color: "#252d3f",
              border: "lightgrey solid 0.5px",
              borderRadius: "25px",
              padding: "1em",
              height: "5%",
              marginBottom: "45px",
            }}
          >
            <Row>
              <Col md={4} className="border-bottom">
                {" "}
                <img
                  alt="icon"
                  src={process.env.PUBLIC_URL + "/images/design.png"}
                  width="100"
                  height="100"
                  className="services-icon"
                />
                <Col>
                  <h3 className="list list-title">Design</h3>
                </Col>
                <Col>
                  {" "}
                  <p className="list list-desc">
                    I have to be design savvy. I value simple content structure
                    and clean, responsive designs.{" "}
                  </p>
                </Col>
                <Col>
                  <p className="list colored-font">Things I enjoy designing:</p>
                  <p className="list">UX, UI, Websites</p>
                </Col>
                <Col>
                  <p className="list colored-font">Design Aids:</p>
                  <ListGroup className="list ul" variant="">
                    <ListGroup.Item className="ul">Canva</ListGroup.Item>
                    <ListGroup.Item className="ul">InVision</ListGroup.Item>
                    <ListGroup.Item className="ul">PhotoShop</ListGroup.Item>
                    <ListGroup.Item className="ul">
                      Adobe Creative Suite
                    </ListGroup.Item>
                    <ListGroup.Item className="ul">Google Fonts</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Col>
              <Col md={4} className="border-left border-bottom">
                {" "}
                <img
                  alt="icon"
                  src={process.env.PUBLIC_URL + "/images/developer.png"}
                  width="100"
                  height="100"
                  className="services-icon"
                />
                <Col>
                  <h3 className="list list-title">Front-End Developer</h3>
                </Col>
                <Col>
                  {" "}
                  <p className="list list-desc">
                    I love to code and enjoy bringing client's ideas to life in
                    the browser.{" "}
                  </p>
                </Col>
                <Col>
                  <p className="list colored-font">
                    Languages and CMS I know: <LaunchModal />{" "}
                  </p>
                  <p className="list">
                    HTML, CSS, JavaScript, React.js, WordPress
                  </p>
                </Col>
                <Col>
                  <p className="list colored-font">Dev Tools:</p>
                  <ListGroup className="list ul" variant="">
                    <ListGroup.Item className="ul">
                      Visual Studio Code
                    </ListGroup.Item>
                    <ListGroup.Item className="ul">NPM</ListGroup.Item>
                    <ListGroup.Item className="ul">Bootstrap</ListGroup.Item>
                    <ListGroup.Item className="ul">Tailwind CSS</ListGroup.Item>
                    <ListGroup.Item className="ul">Bulma</ListGroup.Item>
                    <ListGroup.Item className="ul">GitHub</ListGroup.Item>
                    <ListGroup.Item className="ul">Git</ListGroup.Item>
                    <ListGroup.Item className="ul">Ngrok</ListGroup.Item>
                    <ListGroup.Item className="ul">
                      MySQL Workbench
                    </ListGroup.Item>
                    <ListGroup.Item className="ul">Terminal</ListGroup.Item>
                    <ListGroup.Item className="ul">
                      Chrome Developer Tools
                    </ListGroup.Item>
                    <ListGroup.Item className="ul">WordPress</ListGroup.Item>
                    <ListGroup.Item className="ul">Lighthouse</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Col>{" "}
              <Col md={4} className="border-left">
                {" "}
                <img
                  alt="icon"
                  src={process.env.PUBLIC_URL + "/images/experience.png"}
                  width="100"
                  height="100"
                  className="services-icon"
                />
                <Col>
                  <h3 className="list list-title">Experience</h3>
                </Col>
                <Col>
                  {" "}
                  <p className="list list-desc">
                    I've developed a strong skill set as a Front-End Web
                    Developer.{" "}
                  </p>
                </Col>
                <Col>
                  <p className="list colored-font">Experiences I draw from:</p>
                  <p className="list">
                    Inspiring sites, building projects, my education, freelance
                    gigs, and my day job
                  </p>
                </Col>
                <Col>
                  <p className="list colored-font">What sets me apart:</p>
                  <ListGroup className="list ul" variant="">
                    <ListGroup.Item className="ul">
                      Upenn Coding Bootcamp Graduate
                    </ListGroup.Item>

                    <ListGroup.Item className="ul">22+ projects</ListGroup.Item>
                    <ListGroup.Item className="ul">
                      Problem solver
                    </ListGroup.Item>
                    <ListGroup.Item className="ul">Empath</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Col>
            </Row>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default ServicesIcon;
