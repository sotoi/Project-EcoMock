import axios from 'axios';
import GITAPIKEY from '../../../../config.js';
import { store } from '../../redux/store.js';

const BASEURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';

const reqInstance = axios.create({
  headers: {
    Authorization: GITAPIKEY,
  },
});

// Product Requests
export const getProducts = () => {
  reqInstance.get(`${BASEURL}/products`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.message));
};
<<<<<<< HEAD

=======
>>>>>>> 12ee090 (rendered ratings)
export const getProduct = async (product_id) => {
  try{
    let res =  await reqInstance.get(`${BASEURL}/products/${product_id}`)
    return res
  } catch(err){
    return null;
  }
};
export const getProduct2 = (product_id) => {
    return reqInstance.get(`${BASEURL}/products/${product_id}`)
};
export const getStyles2 = (product_id) => {
  return reqInstance.get(`${BASEURL}/products/${product_id}/styles`)
}

export const getStyles = (product_id, callback) => {
  reqInstance.get(`${BASEURL}/products/${product_id}/styles`)
    .then((res) => { callback(res.data.results); })
    .catch((err) => console.log(err.message));
};
<<<<<<< HEAD

export const getRelated = (product_id, callback) => {
=======
export const getRelated = (product_id) => {
>>>>>>> 12ee090 (rendered ratings)
  reqInstance.get(`${BASEURL}/products/${product_id}/related`)
    .then((res) => { callback(res.data); })
    .catch((err) => console.log(err.message));
};

// Cart Requests
export const getCart = (sku_id) => {
  return reqInstance.get(`${BASEURL}/cart`);
}
export const postCart = (sku_id) => {
  return reqInstance.post(`${BASEURL}/cart`,{sku_id});
}

// Review Requests
<<<<<<< HEAD
export const getReviews = (page, count, sort, product_id) => {
  reqInstance.get(
    `${BASEURL}/reviews`,
    {
      params:
      {
        page, count, sort, product_id,
      },
    },
  )
<<<<<<< HEAD
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));
};

<<<<<<< HEAD
export const getReviewsMetadata = (product_id, setMetadata) => {
<<<<<<< HEAD
=======
>>>>>>> 13c5479 (updated getReviewsMetaData helper)
=======
export const getReviewsMetadata = (product_id, callback) => {
>>>>>>> e39c380 (rendered ratings)
>>>>>>> 70ccb0a (rendered ratings)
=======
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
};
<<<<<<< HEAD

export const getReviewsMetadata = (product_id, callback) => {
>>>>>>> 12ee090 (rendered ratings)
  reqInstance.get(
    `${BASEURL}/reviews/meta`,
    {
      params:
      { product_id },
    },
  )
<<<<<<< HEAD
<<<<<<< HEAD
    .then((res) => setMetadata(res.data))
    .catch((err) => console.error(err));
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 12ee090 (rendered ratings)
    .then((res) => callback(res.data))
    .catch((err) => console.error(err));
<<<<<<< HEAD
>>>>>>> 13c5479 (updated getReviewsMetaData helper)
=======
    .then((res) => callback(res.data))
    .catch((err) => callback(err));
>>>>>>> e39c380 (rendered ratings)
>>>>>>> 70ccb0a (rendered ratings)
=======
>>>>>>> 12ee090 (rendered ratings)
=======
export const getReviewsMetadata = async (product_id) => {
=======
export const getReviews = async (params) => {
>>>>>>> 11a9c0f (added reviews and review tile components)
  try {
    let res = await reqInstance.get(`${BASEURL}/reviews`, {params: params});
    console.log(res);
    return res;
  } catch (err) {
    return null;
  }
};
export const getReviewsMetadata = async (product_id) => {
  try {
    let res = await reqInstance.get(`${BASEURL}/reviews/meta`, {params: { product_id }});
    return res;
  } catch (err) {
    return null;
  }
>>>>>>> 51fb9ef (updated store for reviews metadata)
};
export const addNewReview = (newReview) => {
  reqInstance.post(
    `${BASEURL}/reviews`,
    { params: newReview },
  )
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
};
export const markReviewAsHelpful = (product_id) => {
  return reqInstance.put(`${BASEURL}/reviews/${product_id}/helpful`)
    .catch((err) => console.error(err));
};
export const reportReview = (product_id) => {
  return reqInstance.put(`${BASEURL}/reviews/${product_id}/report`)
    .catch((err) => console.error(err));
};