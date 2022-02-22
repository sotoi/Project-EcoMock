import React, { useEffect, useState } from 'react';
import {useParams,} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProductId, fetchReviews, fetchReviewsMetadata} from '../redux/store.js'
import {getStyles, getRelated} from './helpers/main_helpers.jsx'
import Overview from './product_info/Overview.jsx'
import Related from './related_items/Related.jsx'
import ReviewsWidget from './reviews/ReviewsWidget.jsx';

function App() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [styles, setStyles] = useState([]);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    dispatch(fetchProductId(id));
    getStyles(id, setStyles);
    getRelated(id, setRelated)
    dispatch(fetchReviews({product_id: id, count: 2, sort: 'relevant'}));
    dispatch(fetchReviewsMetadata(id));
  }, [id]);

  return (

    <div>
      <Overview styles={styles}/>
      <Related related={related} styles={styles} />
      <ReviewsWidget product_id={id}/>
    </div>
  );
}

export default App;
