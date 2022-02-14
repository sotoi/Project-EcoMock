import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const RatingsBreakdown = ({ ratings }) => {
  let ratingsArray = [];
  let totalRatingsCount = 0;
  for (let rating in ratings) {
    let count = Number(ratings[rating]);
    totalRatingsCount += count;
    ratingsArray.push([rating, count]);
  }
  console.log(ratings);
  // const { ratings } = action.payload;
  // let avgRating = 0;
  // let totalCount = 0;
  // for (const rating in ratings) {
  //   const count = ratings[rating];
  //   avgRating += rating * count;
  //   totalCount += count;
  // }
  // avgRating /= totalCount;

  return (
    <ul>
      {ratingsArray.map((rating, index) => (
        <li key={index}>{rating[0]}: {Math.round(rating[1] / totalRatingsCount * 100)}%</li>
      ))}
    </ul>
  );
}

export default RatingsBreakdown;