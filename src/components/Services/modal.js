import React from "react";
import Modal from "react-bootstrap/Modal";

import Button from "react-bootstrap/Button";
import { useState } from "react";

import "./styles.css";

function LaunchModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="light"
        className="btn-quest colored-font"
        onClick={handleShow}
      >
        ?
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>What does this mean?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <p>Let's break it down:</p>
          HTML, CSS, and JavaScript are the languages used for front end
          development. The structure, design, behavior, and content of
          everything seen on browser screens when websites, web applications, or
          mobile apps are opened up, is implemented by front end developers.
          <h6 id="languages">
            1) <span className="colored-font">HTML</span> is the structure: bare
            information such as text, titles, links and so on.{" "}
          </h6>
          <h6>
            2) <span className="colored-font">CSS</span> is used to enhance the
            style: add color to your font, change the size of your image, or
            even add margins to a website.{" "}
          </h6>
          <h6>
            3) <span className="colored-font">JavaScript</span> is the
            functionality and animation that brings life to the website: text
            that fades in, or calculations that go on behind the scenes. It even
            powers pop up modals like the one you're reading now.{" "}
          </h6>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="modal-font custom-btn"
            variant="primary"
            onClick={handleClose}
          >
            Cool
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LaunchModal;
