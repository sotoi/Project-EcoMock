<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import {useParams,} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProductId} from '../redux/store.js'
<<<<<<< HEAD
import {getStyles, getRelated} from './helpers/main_helpers.jsx'
import Overview from './product_info/Overview.jsx'
import Review from './reviews/Review.jsx';
import Related from './related_items/Related.jsx'
=======
import ReviewBreakdown from './reviews/ReviewBreakdown.jsx';
>>>>>>> 019928f (updated App to show review breakdown)
=======
import React, { useEffect } from 'react';
import Overview from './product_info/Overview.jsx'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProductId } from '../redux/store.js'
import ReviewsMetadata from './reviews/ReviewsMetadata.jsx';
import RatingsBreakdown from './reviews/RatingsBreakdown.jsx';
>>>>>>> 70ccb0a (rendered ratings)

function App() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [styles, setStyles] = useState([]);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    dispatch(fetchProductId(id));
    getStyles(id, setStyles);
    getRelated(id, setRelated)
  }, [id]);

  return (

    <div>
<<<<<<< HEAD
<<<<<<< HEAD
      <Overview styles={styles}/>
      <Related related={related} styles={styles} />
      {/* <Review/> */}
=======
=======
      <h3>Product</h3>
>>>>>>> fcfdba2 (added temporary headers to App.jsx to make it easier to see where one component ends and another starts)
      {/* hi we are loading */}
      {JSON.stringify(product)}
      <h3>Reviews</h3>
<<<<<<< HEAD
      <h4>Review Breakdown</h4>
      <ReviewBreakdown />
>>>>>>> 019928f (updated App to show review breakdown)
=======
      <h4>Reviews Metadata</h4>
      <ReviewsMetadata />
      <h5>Ratings Breakdown</h5>
      <RatingsBreakdown />
>>>>>>> 70ccb0a (rendered ratings)
    </div>
  );
}

export default App;
