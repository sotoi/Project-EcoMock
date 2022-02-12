import React, { useEffect } from 'react';
import Overview from './product_info/Overview.jsx'
import {
  useParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProductId} from '../redux/store.js'
import Review from './reviews/Review.jsx';

function App() {
  const { id } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductId(id));
  }, []);

  return (
    <div>
      {/* <Overview/> */}
      <Review/>
    </div>
  );
}
export default App;
