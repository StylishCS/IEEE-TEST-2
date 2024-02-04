import React from "react";
import "./style/home.css";
import { Outlet } from "react-router";
export const Home = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
