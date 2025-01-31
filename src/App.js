import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import WeddingHome from "./Components/Weddings/WeddingHome";
import Portfolio from "./Components/Portfolio/Portfolio";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Common/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutPage from "./Components/AboutPage/AboutPage";
import Images from "./Components/Gallary/Images";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <header className="App-header">
        {location.pathname !== "/" && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WeddingHome" element={<WeddingHome />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/AboutUs" element={<AboutPage />} />
          <Route path="/Images/:projectId" element={<Images />} />
        </Routes>
        <Footer />
      </header>
    </div>
  );
}

export default App;
