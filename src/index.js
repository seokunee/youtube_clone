import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app.jsx";
// ./app 이라고 해도 같다. why?

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
