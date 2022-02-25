import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReviewTile from './ReviewTile.jsx';
import AddReview from './AddReview.jsx';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { getReviews } from '../helpers/main_helpers.jsx';
import { fetchReviews }  from '../../redux/store.js';

const Reviews = ({ product_id, product_name, filteredReviews}) => {
  const reviews = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  // HANDLE MORE REVIEWS BUTTON
  const [reviewCount, setReviewCount] = useState(2);
  const [totalReviews, setTotalReviews] =  useState();
  const [currReviews, setCurrReviews] = useState([]);
  useEffect(() => {
    if (reviews.value.results) {
      setTotalReviews(reviews.value.results.length);
      let newCurrReviews = reviews;
      setCurrReviews(newCurrReviews.value.results.slice(0, reviewCount));
    }
  }, [reviews, reviewCount])

  const handleMoreReviewsButton = () => {
    if (reviewCount < totalReviews) {
      setReviewCount(reviewCount + 2)
    }
  };

  // HANDLE SORT SELECTION
  const [sort, setSort] = useState('relevant');
  const handleSort = (value) => {
    setSort(value);
  };
  useEffect(() => {
    dispatch(fetchReviews({product_id: product_id, count: 180, sort: sort}));
  }, [sort]);

  return (
    <div className='Reviews'>
      <h2>Reviews</h2>
      <h4 className='sort-by-header'>Sort By:</h4>
        <DropdownButton variant='dark' size='sm' className='reviews-sort-by' title={sort}>
          <Dropdown.Item href="#/helpful" eventKey='Helpful' onClick={() => handleSort('helpful')}>helpful</Dropdown.Item>
          <Dropdown.Item href="#/newest" eventKey='Newest' onClick={() => handleSort('newest')}>newest</Dropdown.Item>
          <Dropdown.Item href="#/relevant" eventKey='Relevant' onClick={() => handleSort('relevant')}>relevant</Dropdown.Item>
        </DropdownButton>
      <Stack gap={3}>
        {(filteredReviews && filteredReviews.length > 0)
        ? filteredReviews.map((review) => (
          <ReviewTile review={review} product_id={product_id} sort={sort} reviewCount={reviewCount} key={review.review_id} />
        ))
        : (currReviews) ? currReviews.map((review) => (
          <ReviewTile review={review} product_id={product_id} sort={sort} reviewCount={reviewCount} key={review.review_id} />
        ))
        : <></>
        }
      </Stack>
      <>{(reviewCount < totalReviews) ? <Button variant='dark' size='sm' className='more-reviews-btn' onClick={() => handleMoreReviewsButton()}>More Reviews +</Button> : <div className='more-reviews-btn'>No more reviews</div>}</>
      <AddReview product_id={product_id} product_name={product_name} sort={sort} reviewCount={reviewCount} />
    </div>
  );
}

export default Reviews;