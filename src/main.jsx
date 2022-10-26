import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Refresh the page every 3 hours
setTimeout(() => window.location.reload(), 3 * 60 * 60 * 1000);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
