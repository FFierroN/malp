import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

// basename "/malp" para GitHub Pages. Cambiar a "/" con dominio propio.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/malp">
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
