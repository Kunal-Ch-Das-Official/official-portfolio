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
    <section
      className="flex justify-center items-center
     mx-auto w-full md:max-w-full lg:max-w-5xl xl:max-w-[78rem] 2xl:max-w-12xl px-4"
    >
      <div className="relative flex flex-col items-center w-full mx-6 lg:mx-0 lg:w-1/2 rounded-xl">
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

        <div className="flex mt-4 space-x-2 font-semibold text-white">
          {currentIndex + 1}/{feedbacks.length}
        </div>

        <button
          onClick={prevCard}
          className="absolute left-0  lg:-left-8  top-1/2 transform -translate-y-1/2 p-2 rounded-full 
        shadow-md text-white bg-slate-700 hover:bg-gray-800"
        >
          &#10094;
        </button>
        <button
          onClick={nextCard}
          className="absolute top-1/2 right-0 lg:-right-8 transform -translate-y-1/2  p-2 rounded-full 
        shadow-md text-white bg-slate-700 hover:bg-gray-800"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default FeedbackCarousel;
