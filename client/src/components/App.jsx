import React, {useEffect} from 'react';
import {getProducts} from './helpers/main_helpers.jsx'

const App = () =>  {
  useEffect(()=>{
    getProducts();
  },[])
  return (<div></div>)
}




export default App;