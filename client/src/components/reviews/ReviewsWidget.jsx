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
      <h1 className='reviews-header'>ratings & reviews</h1>
      <Stack className='AverageRatingStars' gap={1}>
        <h2>overview</h2>
        <h3>average rating:</h3>
        <AverageRating ratings={reviewsMetadata.value.ratings}/>
      </Stack>
      <div className= 'graphData'>
      <ProductBreakdown characteristics={reviewsMetadata.value.characteristics} />
      <RatingsBreakdown ratings={reviewsMetadata.value.ratings} product_id={product_id} product_name={product.value.name} />
      </div>

    </div>
  );
}

export default ReviewsWidget;