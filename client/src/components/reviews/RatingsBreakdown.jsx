import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Reviews from './Reviews.jsx';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

const RatingsBreakdown = ({ ratings, product_id, product_name }) => {
  const reviews = useSelector((state) => state.reviews);

  let ratingsArray = [];
  let totalRatingsCount = 0;
  for (let rating in ratings) {
    let count = Number(ratings[rating]);
    totalRatingsCount += count;
    ratingsArray.push([rating, count]);
  }

  const [filter, setFilter] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const handleClickRatingsBreakdown = (name) => {
    let newFilter = filter;
    let rating = Number(name);
    let indexInFilter = newFilter.indexOf(rating);
    if (indexInFilter === -1) {
      newFilter.push(Number(name));
    } else {
      newFilter.splice(indexInFilter, 1);
    }
    if (reviews) {
      setFilteredReviews(reviews.value.results.filter(review => newFilter.includes(review.rating)));
    }
    setFilter(newFilter);
  };

  const handleClickRemoveFilters = () => {
    setFilteredReviews([]);
    setFilter([]);
  };

  return (
    <div>
      <div>
        <h5>Ratings Breakdown: {totalRatingsCount} Ratings</h5>
        <Stack gap={3}>
          {ratingsArray.map((rating, index) => (
            <span key={index}>
              <Button variant='outline-dark' size='sm' onClick={() => handleClickRatingsBreakdown(rating[0])}>{rating[0]} Stars:</Button>
              <ProgressBar variant='success' now={rating[1] / totalRatingsCount * 100} label={rating[1]}/>
            </span>
          ))}
        </Stack>
        <h6>Current filters: {(filter.length === 0) ? 'none' : filter.join(', ')}</h6>
        <Button variant='dark' size='sm' onClick={() => handleClickRemoveFilters()}>Remove all filters</Button>
      </div>
      <Reviews product_id={product_id} product_name={product_name} filteredReviews={filteredReviews}/>
    </div>
  );
}

export default RatingsBreakdown;