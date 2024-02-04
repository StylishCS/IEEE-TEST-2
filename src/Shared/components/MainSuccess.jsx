import React from "react";
import Alert from "react-bootstrap/Alert";
const MainSuccess = ({ msg, className }) => {
  return (
    <div className={`alert-container container ${className}`}>
      <Alert variant={"success"}>{msg}</Alert>
    </div>
  );
};

export default MainSuccess;
