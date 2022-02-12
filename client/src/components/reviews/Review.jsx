import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getReviewsMetadata} from '../helpers/main_helpers.jsx';

const Review = () => {
  const product = useSelector((state) => state.product);
  const [reviews, setReviews] = useState({});
  useEffect( () => {
   product.value.id !== undefined && getReviewsMetadata(product.value.id, setReviews);
  }, [product]);

  return (
     <div>{JSON.stringify(reviews.ratings)}</div>
  )
}

export default Review;