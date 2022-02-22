import React, { useEffect, useState } from 'react';
import Overview from './product_info/Overview.jsx'
import {
  useParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProductId} from '../redux/store.js'
import Review from './reviews/Review.jsx';
import QuestionMaster from './Q&A/QuestionMaster.jsx';
import { getQandA } from './helpers/main_helpers.jsx';


function App() {
  const { id } = useParams();
  console.log('Id = ', id)
  const dispatch = useDispatch()
  const product = useSelector((state) => state.product);
  const [QA, setQA] = useState([])
  useEffect(() => {
    //dispatch(fetchProductId(id));
    // console.log('Id = ', id)
    getQandA(id, setQA);
   // console.log(getQandA(42377));
  }, []);
  if(QA.length > 0) {
  return (

    <div>
      {/* {JSON.stringify(product)} */}
      {/* {console.log('QA = ',QA.length)} */}
      <QuestionMaster QA={QA} setQA={setQA}/>
    </div>
  )
  } else {
    return (
<div>
  Loading!!
</div>
    )
  }
      }
export default App;
