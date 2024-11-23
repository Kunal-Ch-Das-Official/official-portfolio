import React from "react";
import { FaStar } from "react-icons/fa6";

interface FeedbackCardProps {
  userName: string;
  organization: string;
  reviewHeading: string;
  reviewContent: string;
  rating: [number];
  date: Date;
}
const FeedbackCard: React.FC<FeedbackCardProps> = ({
  userName,
  organization,
  reviewHeading,
  reviewContent,
  rating,
  date,
}) => {
  return (
    <div
      className="flex flex-col gap-2 max-w-lg min-h-[250px] w-full 
     bg-white px-4 mt-8"
    >
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row justify-between w-full">
          <div className="inline-flex gap-2 items-center">
            <p
              className="text-xl rounded-full ring-2 flex justify-center items-center
             ring-orange-600 w-8 h-8 bg-orange-100 text-red-500"
            >
              {userName.slice(0, 1)}
            </p>
            <div className="flex flex-col pl-2">
              <p className="text-md">{userName}</p>
              <p>{organization}</p>
            </div>
          </div>

          <p className="text-sm pt-1">{new Date(date).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full">
        <h3 className="text-xl font-bold">{reviewHeading}!</h3>
        <div className="text-xs">
          <div className="flex flex-row">
            {rating &&
              rating.map((star) => (
                <FaStar key={star} className="text-yellow-500 text-lg" />
              ))}
          </div>
        </div>
      </div>
      <div className="text-sm overflow-y-scroll no-scrollbar">
        {reviewContent}
      </div>
    </div>
  );
};

export default FeedbackCard;
