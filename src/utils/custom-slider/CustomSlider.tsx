import React, { useState, useEffect, useRef } from "react";

type ImageCarouselProps = {
  images: { id: number; src: string; alt: string }[];
};

const CustomSlider: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Automatically slide every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000); // Change every 5 seconds

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length]);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div className="carousel-item" key={image.id}>
            <img src={image.src} alt={image.alt} className="carousel-image" />
          </div>
        ))}
      </div>

      {/* Left Arrow Button */}
      <button className="carousel-arrow left-arrow" onClick={prevSlide}>
        &#10094;
      </button>

      {/* Right Arrow Button */}
      <button className="carousel-arrow right-arrow" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
