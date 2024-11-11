import React, { useState } from "react";

interface CusomSliderProps {
  imageSourceOne: string | undefined;
  imageSourceTwo: string | undefined;
  imageSourceThree: string | undefined;
}
const CusomSlider: React.FC<CusomSliderProps> = ({
  imageSourceOne,
  imageSourceTwo,
  imageSourceThree,
}) => {
  // Step 1: Define state for the current index of the active slide
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Step 2: Define an array of image sources
  const images = [imageSourceOne, imageSourceTwo, imageSourceThree];

  // Step 3: Function to move to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Step 4: Function to move to the previous slide
  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full min-w-2xl max-w-3xl mx-auto">
      {/* Carousel Images */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-fit object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default CusomSlider;
