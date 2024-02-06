import React from "react";
import Alert from "react-bootstrap/Alert";
const MainSuccess = ({ msg, className }) => {
  return (
    <Alert className={className || "main-error"} variant={"success"}>
      {msg}
    </Alert>
  );
};

export default MainSuccess;
