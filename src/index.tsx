import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/sass/style.scss";
import "./assets/sass/style.react.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
