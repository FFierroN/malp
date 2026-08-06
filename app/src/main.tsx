import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// basename "/malp" para GitHub Pages. Cambiar a "/" con dominio propio.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/malp">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
