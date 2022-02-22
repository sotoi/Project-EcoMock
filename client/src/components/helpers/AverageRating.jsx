import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Stars from './Stars.jsx';

const AverageRating = ({ ratings }) => {
  let avgRating = 0;
  let totalRatingsCount = 0;
  for (let rating in ratings) {
    let ratingCount = Number(ratings[rating]);
    totalRatingsCount += ratingCount;
    avgRating += Number(rating) * ratingCount;
  }
  avgRating /= totalRatingsCount;

  let avgRatingRounded = ((Math.round(avgRating * 4))/4).toFixed(2);

  return (
    <div>
      <Stars ratingInput={avgRatingRounded} />
    </div>
  );
}

export default AverageRating;