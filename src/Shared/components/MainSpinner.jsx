import React from "react";
import Spinner from "react-bootstrap/Spinner";

const MainSpinner = ({ className }) => {
  return <Spinner className={`main-spinner ${className}`} animation="grow" />;
};

export default MainSpinner;
