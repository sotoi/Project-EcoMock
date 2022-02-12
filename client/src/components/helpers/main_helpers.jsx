import axios from 'axios';
import GITAPIKEY from '../../../../config.js';
import { store, product } from '../../redux/store.js';

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
export const getProduct = (productId) => {
  reqInstance.get(`${BASEURL}/products/${productId}`)
    .then((res) => { store.dispatch(product.actions.setProduct(res.data)); })
    .catch((err) => console.log(err.message));
};
export const getStyles = (productId) => {
  reqInstance.get(`${BASEURL}/products/${productId}/styles`)
    .then((res) => { console.log(res.data); })
    .catch((err) => console.log(err.message));
};
export const getRelated = (productId) => {
  reqInstance.get(`${BASEURL}/products/${productId}/related`)
    .then((res) => { console.log(res.data); })
    .catch((err) => console.log(err.message));
};

// Cart Requests

// Review Requests
export const getReviews = (page, count, sort, productId) => {
  reqInstance.get(
    `${BASEURL}/reviews`,
    {
      params:
      {
        page, count, sort, productId,
      },
    },
  )
    .then((res) => res.status(200).send(res.data))
    .catch((err) => console.error(err));
};

export const getReviewsMetadata = (productId) => {
  reqInstance.get(
    `${BASEURL}/reviews/meta`,
    {
      params:
      { productId },
    },
  )
    .then((res) => res.status(200).send(res.data))
    .catch((err) => console.error(err));
};

export const addNewReview = (newReview) => {
  reqInstance.post(
    `${BASEURL}/reviews`,
    { params: newReview },
  );
};

export const markReviewAsHelpful = (product_id) => {
  reqInstance.put(`${BASEURL}/reviews/${product_id}/helpful`)
    .then((res) => res.status(204).send(res.data))
    .catch((err) => console.error(err));
};

export const reportReview = (product_id) => {
  reqInstance.put(`${BASEURL}/reviews/${product_id}/report`)
    .then((res) => res.status(204).send(res.data))
    .catch((err) => console.error(err));
};
