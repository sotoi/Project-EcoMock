import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Stack from 'react-bootstrap/Stack';

const ReviewTile = ({ review }) => {

  const isRecommended = (trueOrFalse) => {
    if (trueOrFalse) {
      return 'I recommend this product';
    }
  }

  return (
    <div>
      <div>
        <Stack className='review-header'>
          <span>{review.reviewer_name}</span>
          <span>{review.date}</span>
          <span>{isRecommended(review.recommend)}</span>
          <span>Rating: {review.rating}</span>
        </Stack>
      </div>
      <div>
        <Stack>
          <span className='review-summary'>{review.summary}</span>
          <p className='review-body'>{review.body}</p>
        </Stack>
      </div>
    </div>
  );
}

export default ReviewTile;