import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

const RatingsBreakdown = ({ ratings }) => {
  let ratingsArray = [];
  let totalRatingsCount = 0;
  for (let rating in ratings) {
    let count = Number(ratings[rating]);
    totalRatingsCount += count;
    ratingsArray.push([rating, count]);
  }

  return (
    <div>
      <h5>Ratings Breakdown: {totalRatingsCount} Ratings</h5>
      <Stack gap={3}>
        {ratingsArray.map((rating, index) => (
          <span key={index}><Button variant='outline-dark' size='sm'>{rating[0]} Stars:</Button> <ProgressBar variant='success' now={rating[1] / totalRatingsCount * 100} label={rating[1]}/></span>
        ))}
      </Stack>
    </div>
  );
}

export default RatingsBreakdown;