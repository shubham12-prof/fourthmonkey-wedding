import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);


    const resetAnimations = () => {

      if (window && window.AOS) {
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      }
    };

    resetAnimations();

    if (pathname === "/") {
      const cleanupHomePageState = () => {
        const preloadHomeImages = () => {
          const images = [
            "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738178852/pett6crpdfr4rp0embkr.jpg",
            "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738178851/qde4wqb4uyvp8l0w1krr.jpg"
          ];

          images.forEach(src => {
            const img = new Image();
            img.onload = () => console.log(`Preloaded: ${src}`);
            img.src = src;
          });
        };

        preloadHomeImages();
      };

      cleanupHomePageState();
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;