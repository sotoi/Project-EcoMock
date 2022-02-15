import React, { useEffect } from 'react';
import Overview from './product_info/Overview.jsx'
import {
  useParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProductId} from '../redux/store.js'
import Review from './reviews/Review.jsx';
import { useSelector } from 'react-redux';
import QuestionAndAnswerState from './Q&A/QuestionAnswerState.jsx';
import {
  useParams,
} from 'react-router-dom';
import { getQandA } from './helpers/main_helpers.jsx';

function App() {
  const { id } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductId(id));
    console.log('Id = ', id);
    getQandA(42377);
  }, []);

  return (
    <div>
      {/* <Overview/> */}
      <Review/>
      hi we are loading
      {console.log('ID = ', id)};
      {JSON.stringify(product)}
      <QuestionAndAnswerState product={product}/>
    </div>
  );
}
export default App;
