import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react';
import {Link}  from 'react-router-dom';
import { Pagination, Navigation } from "swiper";
import Card from 'react-bootstrap/Card';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRectangleList, faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Cards = (props) => {

const renderProducts= (products) => {
  let result = []
  let i= 0;
  for (let product in products) {
    product = products[product];
    result.push(
      <div className={props.classname}>
        <SwiperSlide key={`${props.classname}-${i}`} >
          <Card>
            <Link className='ciContainer' to={`/products/${product.product.id}`}>
              <Card.Img variant="top" src={product.style.results[0].photos[0].url} />
              {props.classname==='favorites'&&<FontAwesomeIcon className='closeXButton' icon={faCircleXmark} onClick ={(e)=>{e.preventDefault();props.closeCard(product.product)}} ></FontAwesomeIcon>}
            </Link>
            <Card.Body>
              <div className='starContainer'>
                <div className='Category'>{product.product.category}</div>
                {props.classname==='related'?<FontAwesomeIcon className= 'starIcon' onClick={() => { props.butt(product) }} icon={faStar} />:<FontAwesomeIcon className= 'infoIcon' onClick={() => { props.butt(true);props.setCompProduct(product.product);props.setCompStyle(product.style.results[0]) }} icon={faRectangleList} />  }
              </div>
              <Card.Title>{product.product.name}</Card.Title>
              {!product.style.results[0].sale_price ? <div className='defaultprice'>${product.style.results[0].original_price}</div> :
                <div className='prices'>
                  <div className='slashedPrice'>${product.style.results[0].original_price}</div>
                  <div className='salePrice'> ${product.style.results[0].sale_price}</div>
                </div>}
              <div></div>
              <div></div>
            </Card.Body>
          </Card>
        </SwiperSlide>
      </div>);
      i+=1;

  }
  return result;
  }
  return (
    <div className= 'Cards'>
     <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {renderProducts(props.products)}
   </Swiper>
 </div>
  )
}
export default Cards;


