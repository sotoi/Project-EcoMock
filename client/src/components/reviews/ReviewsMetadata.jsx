import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AverageRating from './AverageRating.jsx';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

const ReviewsMetadata = () => {
  const reviewsMetadata = useSelector((state) => state.reviewsMetadata);

  return (
    <>
      {/* <div>{JSON.stringify(reviewsMetadata)}</div> */}
      <AverageRating ratings={reviewsMetadata.value.ratings}/>
      <RatingsBreakdown ratings={reviewsMetadata.value.ratings}/>
      <ProductBreakdown characteristics={reviewsMetadata.value.characteristics} />
    </>
  );
}

export default ReviewsMetadata;