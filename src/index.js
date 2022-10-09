import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./pages/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="flex flex-col h-screen">
      <Router />
    </div>
  </React.StrictMode>
);
