import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReviews }  from '../../redux/store.js';
import { getReviews } from '../helpers/main_helpers.jsx';

const AddReview = ({ product_id }) => {
  return (
    <div>Todo: Add Review Button and Form</div>
  );
}

export default AddReview;