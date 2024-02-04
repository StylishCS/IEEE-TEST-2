import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import SloganPopup from "./components/SloganPopup";
import "./style/slogan.css";
import MainHeader from "../../../../../../../../Shared/components/MainHeader";

export const Slogan = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // return (
  //   <>
  //     <MainHeader title={"Branch Slogan"} paragraph={"Here you can update slogan"} />

  //     <h2>old slogan</h2>
  //     <Button variant="primary" onClick={handleShow}>
  //       Change
  //     </Button>

  //     <Modal show={show} onHide={handleClose}>
  //       <Modal.Header closeButton>
  //         <Modal.Title>Change Slogan</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <Form>
  //           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  //             <h2>old slogan</h2>
  //             {/* <Form.Label>old slogan</Form.Label>
  //             <Form.Control
  //               type="email"
  //               placeholder="name@example.com"
  //               autoFocus
  //             /> */}
  //           </Form.Group>
  //           <Form.Group
  //             className="mb-3"
  //             controlId="exampleForm.ControlTextarea1"
  //           >
  //             <Form.Label>new slogan</Form.Label>
  //             <Form.Control as="textarea" rows={3} />
  //           </Form.Group>
  //         </Form>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button variant="secondary" onClick={handleClose}>
  //           Close
  //         </Button>
  //         <Button variant="primary" onClick={handleClose}>
  //           Save Changes
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  //   </>
  // );

  // const [isOpen, setIsOpen] = useState(false);

  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  // };

  // return (
  //   <>
  //     <h1>Slogan</h1>
  //     <Button variant="primary" onClick={togglePopup}>Change</Button>{' '}
  //     {isOpen && (
  //       <div className="popup-container">
  //         <div className="popup-content">
  //           {/* content of pop-up here */}
  //           <h2> Slogan</h2>
  //           <Button variant="primary" onClick={togglePopup}>Close</Button>
  //         </div>
  //       </div>
  //     )}
  //   </>
  // );

  const showPopup = () => {
    return <SloganPopup />;
  };

  return (
    <>
      <h1>Slogan</h1>
      <Button variant="primary" onClick={showPopup}>
        Change
      </Button>
    </>
  );
};
