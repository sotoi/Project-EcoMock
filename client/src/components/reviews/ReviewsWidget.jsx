import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getReviewsMetadata} from '../helpers/main_helpers.jsx';
import AverageRating from '../helpers/AverageRating.jsx';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import Stack from 'react-bootstrap/Stack';

const ReviewsWidget = ({ product_id }) => {
  const product = useSelector((state) => state.product);
  const reviewsMetadata = useSelector((state) => state.reviewsMetadata);

  return (
    <div className='ReviewsWidget'>
      <h1 className='reviews-header'>Ratings & Reviews</h1>
      <Stack className='AverageRatingStars' gap={1}>
        <h2>Overview</h2>
        <h3>Average Rating:</h3>
        <AverageRating ratings={reviewsMetadata.value.ratings}/>
      </Stack>
      <ProductBreakdown characteristics={reviewsMetadata.value.characteristics} />
      <RatingsBreakdown ratings={reviewsMetadata.value.ratings} product_id={product_id} product_name={product.value.name} />
    </div>
  );
}

export default ReviewsWidget;