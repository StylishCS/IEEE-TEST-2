import React from "react";
import { Outlet } from "react-router";
import "./style/dashboard.css";
export const Dashboard = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
