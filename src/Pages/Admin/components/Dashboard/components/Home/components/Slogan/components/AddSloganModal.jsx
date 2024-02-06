import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import MainSpinner from "../../../../../../../../../Shared/components/MainSpinner";
import MainError from "../../../../../../../../../Shared/components/MainError";
import http from "../../../../../../../../../Helper/http";

const AddSloganModal = ({
  isOpen,
  onClose,
  refreshTable,
  setSuccessMsg,
  setNotFoundMsg,
}) => {
  const [sloganData, setSloganData] = useState({
    season: "",
    slogan: "",
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
    if (!sloganData.season) {
      errors.season = "Season is required";
    }

    // Validate slogan
    if (!sloganData.slogan) {
      errors.slogan = "Slogan is required";
    }

    // If there are validation errors, update the state and prevent the API call
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Clear any previous validation errors
    setValidationErrors({});

    // Continue with the API call
    setSloganData({ ...sloganData, loading: true });

    const data = {
      body: sloganData.slogan,
      season: sloganData.season,
    };
    http
      .POST("https://ieee-backend-06597876c603.herokuapp.com/slogan", data)
      .then((res) => {
        setSloganData({
          ...sloganData,
          loading: false,
        });
        setSuccessMsg("Slogan added successfully.");
        setNotFoundMsg("");
        setError("");
        refreshTable();
        handleModalClose();
      })
      .catch((err) => {
        setSloganData({
          ...sloganData,
          loading: false,
        });
        setSuccessMsg("");
        setError("An error occurred while adding the slogan.");
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
        <Modal.Title>Add Slogan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error.length !== 0 && <MainError msg={error} />}
        <form>
          <div className="mb-3">
            <label htmlFor="slogan" className="form-label">
              Slogan
            </label>
            <input
              type="text"
              className="form-control"
              id="slogan"
              placeholder="IEEE HSB"
              value={sloganData.slogan}
              onChange={(e) =>
                setSloganData({ ...sloganData, slogan: e.target.value })
              }
            />
            {validationErrors.slogan && (
              <div className="text-danger">{validationErrors.slogan}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="season" className="form-label">
              Season
            </label>
            <input
              type="text"
              className="form-control"
              id="season"
              placeholder="2023/2024"
              value={sloganData.season}
              onChange={(e) =>
                setSloganData({ ...sloganData, season: e.target.value })
              }
            />
            {validationErrors.season && (
              <div className="text-danger">{validationErrors.season}</div>
            )}
          </div>
        </form>
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

export default AddSloganModal;
