import React from "react";
import { Outlet } from "react-router";
import "./style/admin.css";
import AdminNavbar from "../../Shared/components/AdminNavbar";
import AdminFooter from "../../Shared/components/AdminFooter";
export const Admin = () => {
  return (
    <>
      <AdminNavbar />
      <section className="admin-section">
        <Outlet />
      </section>
      <AdminFooter />
    </>
  );
};
