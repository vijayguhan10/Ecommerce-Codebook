// Rating.js

import React from "react";

export const Rating = ({ rating }) => {
  const RatingArray = Array(5).fill(false);

  for (let i = 0; i < Math.min(rating, 5); i++) {
    RatingArray[i] = true;
  }

  return (
    <div>
      {RatingArray.map((rate, index) => (
        <i
          key={index}
          className={`text-lg bi bi-star${
            rate ? "-fill" : ""
          } text-yellow-500 mr-1`}
        ></i>
      ))}
    </div>
  );
};

