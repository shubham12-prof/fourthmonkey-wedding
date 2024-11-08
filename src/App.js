import React from 'react';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import Home from "./Components/Home/Home";
import WeddingHome from "./Components/Weddings/WeddingHome";
import "./App.css"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WeddingHome" element={<WeddingHome />} />
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
