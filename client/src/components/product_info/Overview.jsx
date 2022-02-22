import React, { useEffect, useState } from 'react';
import Styles from './Styles.jsx'
import PhotoContainer from './PhotoContainer.jsx'
import {FacebookShareButton} from "react-share";
import { useSelector } from 'react-redux';
import Form from './Form.jsx'
import {postCart} from '../helpers/main_helpers.jsx'
import AverageRating from '../helpers/AverageRating.jsx';
const Overview = (props) => {
  const product = useSelector((state) => state.product);
  const reviewsMetadata = useSelector((state) => state.reviewsMetadata);
  const [currStyle, setCurrStyle] = useState({});
  const [car ,setCart] = useState(0);

  useEffect(() => {
    props.styles.length && setCurrStyle(props.styles[0]);
  }, [props.styles]);

  const onSetState = (name) =>{
    setCurrStyle(name);
  }
  const addtoCart = (sku) => {
    postCart(sku);

  }
  return (
    // <>
      <div className="overview">
        <PhotoContainer product={product.value.id} style={currStyle} />
        <div className='information'>
          <div className='productName'>{product.value.name}</div>
          <AverageRating ratings={reviewsMetadata.value.ratings} />
          {/* <div className='social-media'><FacebookShareButton size={32} /></div> */}
          {!currStyle.sale_price ? <div className='defaultprice'>${currStyle.original_price}</div> :
            <div className='prices'>
              <div className='slashedPrice'>${currStyle.original_price}</div>
              <div className='salePrice'> ${currStyle.sale_price}</div>
            </div>
          }
            <div className='category'>{product.value.category}</div>
            <div className='styleTitle'>STYLE > {currStyle.name}</div>
            <div className='description'> {product.value.description}</div>
            <Styles styles={props.styles} selectedStyle={currStyle} onSetState={onSetState} />
            <Form addtoCart={addtoCart} style={currStyle} />
        </div>
      </div>
    //  </>
  )
}

export default Overview;