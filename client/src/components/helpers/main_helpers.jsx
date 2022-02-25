import axios from 'axios';
import { store, product } from '../../redux/store.js';
const BASEURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';

// Product Requests
export const getProducts = () => {
  axios.get(`/api/products`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.message));
};

export const getProduct = async (product_id) => {
  try{
    let res =  await axios.get(`/api/products/${product_id}`)
    return res
  } catch(err){
    return null;
  }
};
export const getProduct2 = (product_id) => {
    return axios.get(`/api/products/${product_id}`).catch(err=>console.log(err))
};
export const getStyles2 = (product_id) => {
  return axios.get(`/api/products/${product_id}/styles`).catch(err=>console.log(err))
}

export const getStyles = (product_id, callback) => {
  axios.get(`/api/products/${product_id}/styles`)
    .then((res) => { callback(res.data.results); })
    .catch((err) => console.log(err.message));
};

export const getRelated = (product_id, callback) => {
  axios.get(`/api/products/${product_id}/related`)
    .then((res) => { callback(res.data); })
    .catch((err) => console.log(err.message));
};

//Q&A Requests
export const getQandA = (productId, callback) => {
  axios.get(`/api/qa/questions/?product_id=${productId}`)
   .then((res) => { callback(res.data.results) })
   .catch((err) => console.log(err.message));
};
export const postQuestion = (newQuestion, cb) => {
  axios.post(
    `/api/qa/questions`,
    { params: newQuestion },)
    .then((res) => {callback()})
    .catch((err) => console.log(err,message));
};
export const postAnswer = (newAnswer, cb) => {
  axios.post(
    `/api/qa/questions`,
    { params: newAnswer },)
    .then((res) => {callback()})
    .catch((err) => console.log(err,message));
};
export const updateHelpful = (itemId) => {
  axios.put(`/api/qa/questions`)
    .then((res) => res.status(204).send(res.data))
    .catch((err) => console.error(err));
};

// Cart Requests
export const getCart = (sku_id) => {
  return axios.get(`/api/cart`).catch(err=>console.log(err));
}
export const postCart = (sku_id) => {
  return axios.post(`/api/cart`,{sku_id}).catch(err=>console.log(err));
}

// Review Requests
export const getReviews = async (params) => {
    try {
      let res = await axios.get(`/api/reviews`, {params: params});
      return res;
    } catch (err) {
      return null;
    }
  };

  export const getReviewsMetadata = async (product_id) => {
    try {
      let res = await axios.get(`/api/reviews/meta`, {params: { product_id }});
      return res;
    } catch (err) {
      return null;
    }
  };

export const addNewReview = (newReview) => {
  return axios.post(
    `/api/reviews`,
    newReview
  )
    .catch((err) => console.error(err));
};

export const markReviewAsHelpful = (product_id) => {
  return axios.put(`/api/reviews/${product_id}/helpful`)
    .catch((err) => console.error(err));
};

export const reportReview = (product_id) => {
  return axios.put(`/api/reviews/${product_id}/report`)
    .catch((err) => console.error(err));
};