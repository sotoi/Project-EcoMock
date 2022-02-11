import React from 'react';
import axios from 'axios';
import GITAPIKEY from '../../../../config.js'
const BASEURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax'

let id = window.location.pathname;


let reqInstance = axios.create({
  headers: {
    Authorization: GITAPIKEY
  }
});

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

  //Product Requests
// export const getProducts = () =>{
//   axios.get(`${BASEURL}/products`, {headers: {Authorization: GITAPIKEY}})
//     .then(res=>{
//       console.log("id = ", id);
//       console.log("res = ", res.data)})
//     .catch(err=>console.log(err.message))
// }


//Cart Requests


//Review Requests



//Questions and Answers requests