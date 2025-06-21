import React, { useEffect, useState } from "react";
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerSlide = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % Math.ceil(images.length / itemsPerSlide)
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="multi-slider-container">
            <h1
                style={{
                    color: "#f2c300",
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    textAlign: "center",
                    marginBottom: "1rem",
                    fontFamily: "Georgia, serif",
                }}
            >
                Our Venues
            </h1>

            <div
                className="multi-slider-track"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {

                    Array.from({ length: Math.ceil(images.length / itemsPerSlide) }).map((_, groupIndex) => (
                        <div className="slide-group" key={groupIndex}>
                            {images
                                .slice(groupIndex * itemsPerSlide, groupIndex * itemsPerSlide + itemsPerSlide)
                                .map((img, idx) => (
                                    <img className="multi-slide" src={img} alt={`venue-${idx}`} key={idx} />
                                ))}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default VenueSlider;
