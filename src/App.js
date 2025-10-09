import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import ScrollToTop from "./Common/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import NotFound from "./Components/NotFound/NotFound";

const Home = lazy(() => import("./Components/Home/Home"));
const WeddingHome = lazy(() => import("./Components/Weddings/WeddingHome"));
const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const Portfolio = lazy(() => import("./Components/Portfolio/Portfolio"));
const AboutPage = lazy(() => import("./Components/AboutPage/AboutPage"));
const ContactForm = lazy(() => import("./Components/ContactUs/ContactForm"));
const Images = lazy(() => import("./Components/Gallary/Images"));
const Terms = lazy(() => import("./Components/Terms/Terms"));
const WeddingPlanning = lazy(() => import("./Components/WeddingPlanning/WeddingPlanning"));
const Reservation = lazy(() => import("./Components/Reservation/Reservation"));

function RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get("redirect");
    if (redirectPath && location.pathname === "/") {
      navigate(redirectPath, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    return () => {
      AOS.refresh();
    };
  }, [location.pathname]);

  useEffect(() => {
    const preloadImages = () => {
      const imagesToPreload = [
        "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738178852/pett6crpdfr4rp0embkr.jpg",
        "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738178851/qde4wqb4uyvp8l0w1krr.jpg",
      ];

      imagesToPreload.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <RedirectHandler />
      <Suspense>
        <header className="App-header">
          {location.pathname !== "/" && <Navbar />}

          <Routes>
            <Route path="/" element={<Home key={`home-${Date.now()}`} />} />
            <Route path="/WeddingHome" element={<WeddingHome />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/AboutUs" element={<AboutPage />} />
            <Route path="/ContactForm" element={<ContactForm />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/Reservation" element={<Reservation />} />
            <Route path="/WeddingPlanning" element={<WeddingPlanning />} />
            <Route path="/Images/:projectId" element={<Images />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </header>
      </Suspense>
    </div>
  );
}

export default App;
