import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <React.StrictMode>
      <Suspense fallback={<h1>Loading....</h1>}>
        <App />
      </Suspense>
    </React.StrictMode>
  </HashRouter>
);
