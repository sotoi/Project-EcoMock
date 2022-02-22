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

const Reviews = ({ product_id, product_name, filteredReviews }) => {
  const reviews = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  // HANDLE MORE REVIEWS BUTTON
  const [resultsCount, setResultsCount] = useState();
  const getTotalResults = async () => {
    try {
      const res = await getReviews({product_id: product_id, count: 200, sort: 'relevant'});
      setResultsCount(res.data.results.length);
    } catch (err) {
      console.error(err);
    }
  };
  getTotalResults();
  const [reviewCount, setReviewCount] = useState(2);
  const handleMoreReviewsButton = () => {
    if (reviewCount < resultsCount) {
      setReviewCount(reviewCount + 2);
    }
  };

  // HANDLE SORT SELECTION
  const [sort, setSort] = useState('relevant');
  const handleSort = (value) => {
    setSort(value);
  };
  useEffect(() => {
    dispatch(fetchReviews({product_id: product_id, count: reviewCount, sort: sort}));
  }, [sort, reviewCount]);

  return (
    <div>
      {console.log('REVIEWS FROM REVIEWS:', reviews)}
      <h4>Reviews</h4>
      <h6>SORT BY:</h6>
        <DropdownButton variant='dark' size='sm' id='reviews-sort-by' title={sort}>
          <Dropdown.Item href="#/helpful" eventKey='Helpful' onClick={() => handleSort('helpful')}>helpful</Dropdown.Item>
          <Dropdown.Item href="#/newest" eventKey='Newest' onClick={() => handleSort('newest')}>newest</Dropdown.Item>
          <Dropdown.Item href="#/relevant" eventKey='Relevant' onClick={() => handleSort('relevant')}>relevant</Dropdown.Item>
        </DropdownButton>
      <Stack gap={3}>
        {(filteredReviews && filteredReviews.length > 0)
        ? filteredReviews.map((review) => (
          <ReviewTile review={review} product_id={product_id} sort={sort} reviewCount={reviewCount} key={review.review_id} />
        ))
        : (reviews.value.results) ? reviews.value.results.map((review) => (
          <ReviewTile review={review} product_id={product_id} sort={sort} reviewCount={reviewCount} key={review.review_id} />
        ))
        : <></>
        }
      </Stack>
      <>{(reviewCount < resultsCount) ? <Button variant='dark' size='sm' onClick={() => handleMoreReviewsButton()}>More Reviews +</Button> : <></>}</>
      <AddReview product_id={product_id} product_name={product_name} sort={sort} reviewCount={reviewCount} />
    </div>
  );
}

export default Reviews;