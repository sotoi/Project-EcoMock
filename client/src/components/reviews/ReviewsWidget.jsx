import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getReviewsMetadata} from '../helpers/main_helpers.jsx';
import ReviewsMetadata from './ReviewsMetadata.jsx';
import Reviews from './Reviews.jsx';

const ReviewsWidget = ({ product_id }) => {
  const product = useSelector((state) => state.product);

  return (
    <div>
      <h3>Reviews for {product.value.name}</h3>
      <ReviewsMetadata />
      <Reviews product_id={product_id} product_name={product.value.name}/>
    </div>
  );
}

export default ReviewsWidget;