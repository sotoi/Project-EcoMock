import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const AverageRating = ({ ratings }) => {
  let avgRating = 0;
  let totalRatingsCount = 0;
  for (let rating in ratings) {
    let ratingCount = Number(ratings[rating]);
    totalRatingsCount += ratingCount;
    avgRating += Number(rating) * ratingCount;
  }
  avgRating /= totalRatingsCount;

  return (
    <div>
      <h5>Average Rating: {avgRating.toFixed(2)} Stars</h5>
    </div>
  )
}

export default AverageRating;