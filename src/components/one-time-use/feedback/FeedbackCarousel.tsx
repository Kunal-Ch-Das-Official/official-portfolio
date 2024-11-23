import React, { useState, useEffect } from "react";
import FeedbackCard from "./FeedbackCard";

interface FeedbackCarouselProps {
  feedbacks: {
    userName: string;
    organization: string;
    reviewContent: string;
    rating: [number];
    date: Date;
  }[];
}

const FeedbackCarousel: React.FC<FeedbackCarouselProps> = ({ feedbacks }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative flex flex-col items-center w-full ">
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {feedbacks.map((feedback, index) => (
            <div key={index} className="min-w-full flex justify-center">
              <FeedbackCard {...feedback} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex mt-4 space-x-2 font-semibold">
        {currentIndex + 1}/{feedbacks.length}
      </div>

      <button
        onClick={prevCard}
        className="absolute left-1/3 -bottom-4 transform -translate-y-1/2 p-2 rounded-full 
        shadow-md text-gray-700 hover:bg-gray-100"
      >
        &#10094;
      </button>
      <button
        onClick={nextCard}
        className="absolute right-1/3 -bottom-4 transform -translate-y-1/2  p-2 rounded-full 
        shadow-md text-gray-700 hover:bg-gray-100"
      >
        &#10095;
      </button>
    </div>
  );
};

export default FeedbackCarousel;
