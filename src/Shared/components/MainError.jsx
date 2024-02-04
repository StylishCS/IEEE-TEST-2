import React from "react";
import Alert from "react-bootstrap/Alert";
const MainError = ({ msg, className }) => {
  return (
    <div className={`alert-container container ${className}`}>
      <Alert variant={"danger"}>{msg}</Alert>
    </div>
  );
};

export default MainError;
