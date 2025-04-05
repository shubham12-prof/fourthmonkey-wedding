import React, { lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./Common/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import Images from "./Components/Gallary/Images";
import NotFound from "./Components/NotFound/NotFound";

const Home = lazy(() => import("./Components/Home/Home"));
const WeddingHome = lazy(() => import("./Components/Weddings/WeddingHome"));
const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const Portfolio = lazy(() => import("./Components/Portfolio/Portfolio"));
const AboutPage = lazy(() => import("./Components/AboutPage/AboutPage"));

const ContactForm = lazy(() => import("./Components/ContactUs/ContactForm"));
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
        {location.pathname !== "/" && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WeddingHome" element={<WeddingHome />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/AboutUs" element={<AboutPage />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/Images/:projectId" element={<Images />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </header>
    </div>
  );
}

export default App;
