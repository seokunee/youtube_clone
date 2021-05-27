import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app.jsx";
<<<<<<< HEAD
// ./app 이라고 해도 같다. why?
=======
import "@fortawesome/fontawesome-free/js/all.js";
import Youtube from "./service/youtube";
>>>>>>> 7fd68f8 (add player and lists)

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
