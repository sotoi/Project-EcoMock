import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReviewTile from './ReviewTile.jsx';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';

const Reviews = () => {
  const reviews = useSelector((state) => state.reviews);
  let remaingingReviews = reviews.value.results;

  // const [review, setReviews] = useState([]);

  return (
    <div>
      <h4>Reviews</h4>
      <DropdownButton id="reviews-sort-by" title="SORT BY" variant='success' size='sm'>
        <Dropdown.Item href="#/helpful">Helpful</Dropdown.Item>
        <Dropdown.Item href="#/newest">Newest</Dropdown.Item>
        <Dropdown.Item href="#/relevant">Relevant</Dropdown.Item>
      </DropdownButton>
      <Stack gap={3}>
        {remaingingReviews && remaingingReviews.map((review) => (
          <ReviewTile review={review} key={review.review_id}/>
        ))}
      </Stack>
    </div>
  );
}

export default Reviews;