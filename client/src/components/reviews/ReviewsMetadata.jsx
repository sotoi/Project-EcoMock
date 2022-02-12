import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getReviewsMetadata } from '../helpers/main_helpers.jsx';

const ReviewsMetadata = () => {
  const product = useSelector((state) => state.product);
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    let product_id = product.value.id;
    if (product_id) {
      getReviewsMetadata(product_id, setMetadata);
    }
  }, [product]);

  return (
    <div>{JSON.stringify(metadata)}</div>
  );
}

export default ReviewsMetadata;