import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import SloganPopup from "./components/SloganPopup";
import "./style/slogan.css";
import MainHeader from "../../../../../../../../Shared/components/MainHeader";
export const Slogan = () => {
  return (
    <section className="slogan-section">
      <MainHeader
        title={"Slogan"}
        paragraph={"Here You can  update, and delete the season slogan."}
      />
    </section>
  );
};
