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
      <Overview styles={styles}/>
      <Related related={related} styles={styles} />
      {/* <Review/> */}
=======
      {/* hi we are loading */}
      {JSON.stringify(product)}
      <ReviewBreakdown />
>>>>>>> 019928f (updated App to show review breakdown)
    </div>
  );
}

export default App;
