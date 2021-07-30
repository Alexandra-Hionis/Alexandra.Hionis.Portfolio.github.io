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
          HTML, CSS, and JavaScript are the languages used for Front End
          development. The structure, design, behavior, and content of
          everything seen on browser screens when websites, web applications, or
          mobile apps are opened up, is implemented by front End developers.
          <h6 id="languages">1) HTML is the data </h6>
          <h6>2) CSS is the styling of the data </h6>
          <h6>
            3) Javascript is the function and animation that brings life to the
            website{" "}
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
