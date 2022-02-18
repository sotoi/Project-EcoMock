import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AverageRating from './AverageRating.jsx';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import Stack from 'react-bootstrap/Stack';

const ReviewsMetadata = () => {
  const reviewsMetadata = useSelector((state) => state.reviewsMetadata);

  return (
    <div>
      {console.log('REVIEWS META:', reviewsMetadata)}
      <h4>Reviews Overview</h4>
      <Stack direction='horizontal' gap={3}>
        <AverageRating ratings={reviewsMetadata.value.ratings} />
        <RatingsBreakdown ratings={reviewsMetadata.value.ratings} />
        <ProductBreakdown characteristics={reviewsMetadata.value.characteristics} />
      </Stack>
    </div>
  );
}

export default ReviewsMetadata;