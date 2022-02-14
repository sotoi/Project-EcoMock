import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { fetchReviewsMetadata }  from '../../redux/store.js';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

const ReviewsMetadata = () => {
  const reviewsMetadata = useSelector((state) => state.reviewsMetadata);

  return (
    <>
      <div>{JSON.stringify(reviewsMetadata)}</div>
      <h5>Ratings Breakdown</h5>
      <RatingsBreakdown ratings={reviewsMetadata.value.ratings}/>
      <h5>Product Breakdown</h5>
      <ProductBreakdown characteristics={reviewsMetadata.value.characteristics} />
    </>
  );
}

export default ReviewsMetadata;