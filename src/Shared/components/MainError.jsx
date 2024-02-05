import React from "react";
import Alert from "react-bootstrap/Alert";
const MainError = ({ msg, className, variant }) => {
  return (
    <Alert className={className || "main-error"} variant={variant || "danger"}>
      {msg}
    </Alert>
  );
};

export default MainError;
