import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  useParams,
} from 'react-router-dom';
import { getProduct } from './helpers/main_helpers.jsx';

function App() {
  const product = useSelector((state) => state.product);
  const { id } = useParams();

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <div>
      hi we are loading
      {JSON.stringify(product)}
    </div>
  );
}

export default App;
