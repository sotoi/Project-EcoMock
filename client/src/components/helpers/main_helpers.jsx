import React from 'react';
import axios from 'axios';
import GITAPIKEY from '../../../../config.js';
const BASEURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';

let id = window.location.pathname;


let reqInstance = axios.create({
  headers: {
    Authorization: GITAPIKEY
  }
});

// Product Requests
export const getProducts = () => {
  reqInstance.get(`${BASEURL}/products`)
    .then(res=>{
      console.log("id = ", id);
      console.log("res = ", res.data)})
    .catch(err=>console.log(err.message))
}
export const getProduct = (productId) => {
  reqInstance.get(`${BASEURL}/products/${productId}`)
    .then(res=>{
      console.log("id = ", id);
      console.log("res = ", res.data)})
    .catch(err=>console.log(err.message))
}

//Cart Requests


//Review Requests
export const getReviews = (page, count, sort, product_id) => {
  reqInstance.get(
    `${BASEURL}/reviews`,
    {params:
      {page: page, count: count, sort: sort, product_id: product_id}
    }
  )
    .then((res) => res.status(200).send(res.data))
    .catch((err) => res.status(400).send(err));
}

export const getReviewsMetadata = (product_id) => {
  reqInstance.get(
    `${BASEURL}/reviews/meta`,
    {params:
      {product_id: product_id}
    }
  )
    .then((res) => res.status(200).send(res.data))
    .catch((err) => res.status(400).send(err));
}

export const addNewReview = (product_id, rating, summary, body, recommend, name, email, photos, characteristics) => {
  reqInstance.post(
    `${BASEURL}/reviews`,
    {params:
      {
        product_id: product_id,
        rating: rating,
        summary: summary,
        body: body,
        recommend: recommend,
        name: name,
        email: email,
        photos: photos,
        characteristics: characteristics
      }
    }
  )
}

export const markReviewAsHelpful = (product_id) => {
  reqInstance.put(`${BASEURL}/reviews/${product_id}/helpful`)
    .then((res) => res.status(204).send(res.data))
    .catch((err) => res.status(404).send(err));
}

export const reportReview = (product_id) => {
  reqInstance.put(`${BASEURL}/reviews/${product_id}/report`)
    .then((res) => res.status(204).send(res.data))
    .catch((err) => res.status(404).send(err));
}
//Questions and Answers requests


// {
//   "product_id": "42366",
//   "rating": "5",
//   "summary": "dui faucibus in ornare quam",
//   "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin nibh. Id diam maecenas ultricies mi. Lorem ipsum dolor sit amet consectetur. Massa ultricies mi quis hendrerit dolor.",
//   "recommend": true,
//   "name": "viverra",
//   "email": "mollis@email.com",
//   "photos": ["https://i.natgeofe.com/n/f4d64d53-07ce-4933-a76e-1d405eec3473/giraffe_thumb.JPG"],
//   "characteristics": {
//       "Fit": "4",
//       "Length": "4",
//       "Comfort": "5",
//       "Quality": "4"
//   }
// }