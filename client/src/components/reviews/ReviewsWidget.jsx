import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getReviewsMetadata} from '../helpers/main_helpers.jsx';
import AverageRating from '../helpers/AverageRating.jsx';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import Stack from 'react-bootstrap/Stack';
// import ReviewsMetadata from './ReviewsMetadata.jsx';

const ReviewsWidget = ({ product_id }) => {
  const product = useSelector((state) => state.product);
  const reviewsMetadata = useSelector((state) => state.reviewsMetadata);

  return (
    <div>
      <h3>Reviews for {product.value.name}</h3>
      <h4>Reviews Overview</h4>
      <h5>Average Rating:</h5>
      <AverageRating ratings={reviewsMetadata.value.ratings} />
      <ProductBreakdown characteristics={reviewsMetadata.value.characteristics} />
      <RatingsBreakdown ratings={reviewsMetadata.value.ratings} product_id={product_id} product_name={product.value.name}/>
    </div>
  );
}

export default ReviewsWidget;