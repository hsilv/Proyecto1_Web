import React, { useState } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./styles/index.scss";
import ReactDOMServer from "react-dom/server";

//const root = ReactDOM.createRoot(document.getElementById("root"));

const HTML = ReactDOMServer.renderToString(
  <div>
    <App />
  </div>
);

ReactDOM.hydrate(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
