import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <h1>Loading...</h1>
    </div>
  );
};

const RootComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoadingScreen /> : <App />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <React.StrictMode>
      <Suspense fallback={<LoadingScreen />}>
        <RootComponent />
      </Suspense>
    </React.StrictMode>
  </HashRouter>
);
