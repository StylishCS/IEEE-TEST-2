import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import MainSpinner from "../../../../../../../../../Shared/components/MainSpinner";
import MainError from "../../../../../../../../../Shared/components/MainError";

const AddPartnerModal = ({
  isOpen,
  onClose,
  refreshTable,
  setSuccessMsg,
  setNotFoundMsg,
}) => {
  const [partnerData, setPartnerData] = useState({
    name: "",
    page_link: "",
    image: null,
    loading: false,
  });
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({}); // State for validation errors
  const handleModalClose = () => {
    setValidationErrors({});
    setError("");
    onClose();
  };
  const handleAdd = () => {
    const errors = {}; // Object to store validation errors

    // Validate name
    if (!partnerData.name) {
      errors.name = "Name is required";
    }

    // Validate page link (you can add more complex validation if needed)
    if (!partnerData.page_link) {
      errors.page_link = "Page Link is required";
    }

    // Validate image
    if (!partnerData.image) {
      errors.image = "Image is required";
    }

    // If there are validation errors, update the state and prevent the API call
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Clear any previous validation errors
    setValidationErrors({});

    // Continue with the API call
    setPartnerData({ ...partnerData, loading: true });
    const formData = new FormData();
    formData.append("name", partnerData.name);
    formData.append("page_link", partnerData.page_link);

    if (partnerData.image) {
      formData.append("image", partnerData.image);
    }

    axios
      .post("http://localhost:3000/partners", formData)
      .then((res) => {
        setPartnerData({
          ...partnerData,
          loading: false,
        });
        setSuccessMsg("Partner added successfully.");
        setNotFoundMsg("");
        setError("");
        refreshTable();
        handleModalClose();
      })
      .catch((err) => {
        setPartnerData({
          ...partnerData,
          loading: false,
          successMsg: null,
        });
        setSuccessMsg("");
        setError("An error occurred while adding the partner.");
      });
  };

  return (
    <>
      <Modal
        className="main-modal"
        show={isOpen}
        onHide={handleModalClose}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Partner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error.length !== 0 && <MainError msg={error} />}
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                placeholder="IEEE HSB"
                onChange={(e) =>
                  setPartnerData({ ...partnerData, name: e.target.value })
                }
              />
              {validationErrors.name && (
                <div className="text-danger">{validationErrors.name}</div>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Page Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://ieeehsb.com/"
                onChange={(e) =>
                  setPartnerData({ ...partnerData, page_link: e.target.value })
                }
              />
              {validationErrors.page_link && (
                <div className="text-danger">{validationErrors.page_link}</div>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) =>
                  setPartnerData({ ...partnerData, image: e.target.files[0] })
                }
              />
              {validationErrors.image && (
                <div className="text-danger">{validationErrors.image}</div>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div className="action-btns">
            <button className="main-btn delete-btn" onClick={handleModalClose}>
              Close
            </button>
            <button
              className="main-btn"
              onClick={() => {
                handleAdd();
              }}
            >
              {!partnerData.loading ? (
                "Save Changes"
              ) : (
                <MainSpinner className={"btn-spinner"} />
              )}
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPartnerModal;
