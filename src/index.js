import React, { useState } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./styles/index.scss";
import ReactDOMServer from "react-dom/server";

//const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.hydrateRoot(
    <App />,
  document.getElementById("root")
);