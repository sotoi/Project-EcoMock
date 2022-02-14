import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getReviewsMetadata} from '../helpers/main_helpers.jsx';
import ReviewsMetadata from './ReviewsMetadata.jsx';

const ReviewsWidget = () => {
  const product = useSelector((state) => state.product);

  return (
    <>
      <h3>Reviews for {product.value.name}</h3>
      <h4>Reviews Metadata</h4>
      <ReviewsMetadata />
    </>
  );
}

export default ReviewsWidget;