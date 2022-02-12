import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getReviewsMetadata } from '../helpers/main_helpers.jsx';

const RatingsBreakdown = () => {
  const product = useSelector((state) => state.product);
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    let product_id = product.value.id;
    if (product_id) {
      getReviewsMetadata(product_id, setRatings);
    }
  }, [product]);

  return (
    <div>{JSON.stringify(ratings.ratings)}</div>
  );
}

export default RatingsBreakdown;