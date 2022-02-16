import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReviewTile from './ReviewTile.jsx';
import AddReview from './AddReview.jsx';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';
import { getReviews } from '../helpers/main_helpers.jsx';
import { fetchReviews }  from '../../redux/store.js';

const Reviews = ({ product_id }) => {
  const reviews = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('relevant');
  const handleFilter = (value) => {
    setFilter(value);
    dispatch(fetchReviews({product_id: product_id, count: 200, sort: value}));
  };

  return (
    <div>
      <h4>Reviews</h4>
      <h6>SORT BY:</h6>
        <DropdownButton variant='outline-dark' size='sm' id='reviews-sort-by' title={filter}>
          <Dropdown.Item href="#/helpful" eventKey='Helpful' onClick={() => handleFilter('helpful')}>helpful</Dropdown.Item>
          <Dropdown.Item href="#/newest" eventKey='Newest' onClick={() => handleFilter('newest')}>newest</Dropdown.Item>
          <Dropdown.Item href="#/relevant" eventKey='Relevant' onClick={() => handleFilter('relevant')}>relevant</Dropdown.Item>
        </DropdownButton>
      <Stack gap={3}>
        {reviews.value.results && reviews.value.results.map((review) => (
          <ReviewTile review={review} product_id={product_id} key={review.review_id} />
        ))}
      </Stack>
      <AddReview product_id={product_id}/>
    </div>
  );
}

export default Reviews;