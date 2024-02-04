import React from "react";
import "../style/AdminFooter.css";
const AdminFooter = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return <footer className="AdminFooter">&copy; {currentYear} All Rights Reserved IEEE HSB</footer>;
};

export default AdminFooter;
