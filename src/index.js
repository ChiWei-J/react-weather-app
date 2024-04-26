import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <footer>
      <a href="https://github.com/ChiWei-J">Coded by Chi Jan</a>
    </footer>
  </React.StrictMode>
);

reportWebVitals();
