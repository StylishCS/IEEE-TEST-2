import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import Router from "./Router";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/index.css";
import "@fontsource/cairo";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);
