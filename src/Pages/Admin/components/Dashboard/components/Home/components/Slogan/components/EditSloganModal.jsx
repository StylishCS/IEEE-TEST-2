import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import MainError from "../../../../../../../../../Shared/components/MainError";
import MainSpinner from "../../../../../../../../../Shared/components/MainSpinner";
import http from "../../../../../../../../../Helper/http";

const EditSloganModal = ({
  isOpen,
  onClose,
  selectedSlogan,
  refreshTable,
  setSuccessMsg,
}) => {
  const [sloganData, setSloganData] = useState({
    body: "",
    season: "",
    loading: false,
  });
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (selectedSlogan) {
      setSloganData({
        body: selectedSlogan.body || "",
        season: selectedSlogan.season || "",
        loading: false,
      });
    }
  }, [selectedSlogan]);

  const handleModalClose = () => {
    setValidationErrors({});
    setError("");
    onClose();
  };

  const handleEdit = () => {
    const errors = {};

    if (!sloganData.body) {
      errors.body = "Slogan is required";
    }

    if (!sloganData.season) {
      errors.season = "Season is required";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors({});

    setSloganData({ ...sloganData, loading: true });

    const data = {
      body: sloganData.body,
      season: sloganData.season,
    };
    // You need to replace 'selectedSlogan.id' with the actual ID of the slogan to be edited.
    http
      .PATCH(
        `https://ieee-backend-06597876c603.herokuapp.com/slogan/${selectedSlogan._id}`,
        data
      )
      .then((res) => {
        setSloganData({
          ...sloganData,
          loading: false,
        });
        setError("");
        setSuccessMsg("Slogan Updated successfully.");
        refreshTable();
        handleModalClose();
      })
      .catch((err) => {
        console.log(err);
        setSloganData({
          ...sloganData,
          loading: false,
        });
        setError("An error occurred while editing the slogan.");
      });
  };

  return (
    <Modal
      className="main-modal"
      show={isOpen}
      onHide={handleModalClose}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Slogan</Modal.Title>
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
              value={sloganData.body}
              onChange={(e) =>
                setSloganData({ ...sloganData, body: e.target.value })
              }
            />
            {validationErrors.body && (
              <div className="text-danger">{validationErrors.body}</div>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Page Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="https://ieeehsb.com/"
              value={sloganData.season}
              onChange={(e) =>
                setSloganData({ ...sloganData, season: e.target.value })
              }
            />
            {validationErrors.season && (
              <div className="text-danger">{validationErrors.season}</div>
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
            {!sloganData.loading ? (
              "Save Changes"
            ) : (
              <MainSpinner className={"btn-spinner"} />
            )}
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default EditSloganModal;
