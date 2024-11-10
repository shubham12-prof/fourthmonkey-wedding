import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./Components/Home/Home";
import WeddingHome from "./Components/Weddings/WeddingHome";
import Portfolio from "./Components/Portfolio/Portfolio";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ScrollToTop from "./Common/ScrollToTop"
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
       <ScrollToTop />
      <header className="App-header">
        {location.pathname !== "/" && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WeddingHome" element={<WeddingHome />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </header>
    </div>
  );
}

export default App;
