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
    .then(res=>{console.log(res.data)})
    .catch(err=>console.log(err.message))
}
export const getProduct = (productId) => {
  reqInstance.get(`${BASEURL}/products/${productId}`)
    .then(res=>{ console.log(res.data)})
    .catch(err=>console.log(err.message))
}
export const getStyles = (productId) => {
  reqInstance.get(`${BASEURL}/products/${productId}/styles`)
    .then(res=>{ console.log(res.data)})
    .catch(err=>console.log(err.message))
}
export const getRelated = (productId) => {
  reqInstance.get(`${BASEURL}/products/${productId}/related`)
    .then(res=>{ console.log(res.data)})
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
