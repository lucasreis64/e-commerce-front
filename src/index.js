import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { Context } from "./context/context";
import "./styles/globals.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);
