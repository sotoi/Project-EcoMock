import React, { useEffect, useState } from 'react';
import Styles from './Styles.jsx'
import {getStyles} from '../helpers/main_helpers.jsx'
import { useSelector } from 'react-redux';
const Overview = () => {
  const product = useSelector((state) => state.product);
  const [styles, setStyles] = useState([])
  useEffect( () => {
    product.value.id!== undefined && getStyles(product.value.id, setStyles)
  }, [product]);

  return (
     <div>
       <div>{product.value.name}</div>
       <div>{product.value.description}</div>
       <div>{product.value.category}</div>
       <div>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
       <Styles styles = {styles}/>
     </div>
  )
}

export default Overview;