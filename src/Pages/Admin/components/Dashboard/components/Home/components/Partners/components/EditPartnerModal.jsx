import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import MainError from "../../../../../../../../../Shared/components/MainError";
import MainSpinner from "../../../../../../../../../Shared/components/MainSpinner";

const EditPartnerModal = ({
  isOpen,
  onClose,
  selectedPartner,
  refreshTable,
  setSuccessMsg,
}) => {
  const [partnerData, setPartnerData] = useState({
    name: "",
    page_link: "",
    image: null,
    loading: false,
  });
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (selectedPartner) {
      setPartnerData({
        name: selectedPartner.name || "",
        page_link: selectedPartner.page_link || "",
        image: selectedPartner.image,
        loading: false,
      });
    }
  }, [selectedPartner]);

  const handleModalClose = () => {
    setValidationErrors({});
    setError("");
    onClose();
  };

  const handleEdit = () => {
    const errors = {};

    if (!partnerData.name) {
      errors.name = "Name is required";
    }

    if (!partnerData.page_link) {
      errors.page_link = "Page Link is required";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors({});

    setPartnerData({ ...partnerData, loading: true });

    const formData = new FormData();
    formData.append("name", partnerData.name);
    formData.append("page_link", partnerData.page_link);

    // Check if a new image is selected
    if (partnerData.image instanceof File) {
      formData.append("image", partnerData.image);
    }

    // You need to replace 'selectedPartner.id' with the actual ID of the partner to be edited.
    axios
      .patch(`http://localhost:3000/partners/${selectedPartner.id}`, formData)
      .then((res) => {
        setPartnerData({
          ...partnerData,
          loading: false,
        });
        setError("");
        setSuccessMsg("Partner Updated successfully.");
        refreshTable();
        handleModalClose();
      })
      .catch((err) => {
        console.log(err);
        setPartnerData({
          ...partnerData,
          loading: false,
        });
        setError("An error occurred while editing the partner.");
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
          <Modal.Title>Edit Partner</Modal.Title>
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
                value={partnerData.name}
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
                value={partnerData.page_link}
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
                handleEdit();
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

export default EditPartnerModal;
