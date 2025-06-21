import React, { useEffect, useRef } from "react";
import "./VenueSlider.css";

const images = [
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1750501092/bftbamis1zimg8gxe8nq.jpg",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1750501091/kri6kqt30mgcwlf1nvlm.png",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1750501090/wqwlg3v6va4hoa8g5ebu.jpg",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1750501090/xbk8wpbdnzgyq9zuehiq.jpg",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1750501090/gky0ycu11p3i3t7mmclf.jpg",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1750501090/i8bd6z6x5dmp9064bs9m.png",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1750501090/bauajvtsrinjdt0n78yo.jpg",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1750501090/jxfvp7cjbehy3rs2ghna.jpg",
];


const VenueSlider = () => {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        let animationFrame;

        const scroll = () => {
            track.scrollLeft += 1;
            if (track.scrollLeft >= track.scrollWidth / 2) {
                track.scrollLeft = 0;
            }
            animationFrame = requestAnimationFrame(scroll);
        };

        animationFrame = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return (
        <div className="continuous-slider-wrapper">
            <h2 className="section-title">Properties We Work On</h2>
            <div className="continuous-slider-track" ref={trackRef}>
                {[...images, ...images].map((src, index) => (
                    <img key={index} src={src} alt={`venue-${index}`} className="continuous-slide" />
                ))}
            </div>
        </div>
    );
};

export default VenueSlider;
