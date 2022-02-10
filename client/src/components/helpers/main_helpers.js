import React from 'react';
import axios from 'axios';
import GITAPIKEY from '../../config.js'
const BASEURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/'
let reqInst = axios.create({
  headers: {
    Authorization : GITAPIKEY
    }
  });

  //Product Requests
export const getProducts = () =>{
  reqInst.get(BASEURL, {})
}


//Cart Requests


//Review Requests



//Questions and Answers requests