import React, { useEffect, useState } from 'react';
import {useParams,} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProductId, fetchReviews, fetchReviewsMetadata} from '../redux/store.js'
import {getStyles, getRelated} from './helpers/main_helpers.jsx'
import Header from './Header.jsx'
import Overview from './product_info/Overview.jsx'
import Related from './related_items/Related.jsx'
import ReviewsWidget from './reviews/ReviewsWidget.jsx';
import { getQandA } from './helpers/main_helpers.jsx';
import QuestionMaster from './Q&A/QuestionMaster.jsx';


function App() {
  const { id } = useParams();
  console.log('Id = ', id)
  const dispatch = useDispatch()
  const product = useSelector((state) => state.product);
  const [styles, setStyles] = useState([]);
  const [related, setRelated] = useState([]);
  const [QA, setQA] = useState([])

  useEffect(() => {
    dispatch(fetchProductId(id));
    getStyles(id, setStyles);
    getRelated(id, setRelated);
    dispatch(fetchReviews({product_id: id, count: 180, sort: 'relevant'}));
    dispatch(fetchReviewsMetadata(id));
    getQandA(id, setQA);
  }, [id]);

  return (
    <div>
      <Header/>
      <Overview styles={styles}/>
      <Related related={related} styles={styles} />
      {(QA.length > 0)
      ? <div><QuestionMaster ID={id} QA={QA} setQA={setQA} /></div>
      : <div>Loading!!</div>}
      <ReviewsWidget product_id={id} />
    </div>
  );
}
export default App;