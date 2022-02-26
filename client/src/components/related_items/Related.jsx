import React, {useEffect, useState} from 'react';
import {getProduct2, getStyles2} from '../helpers/main_helpers.jsx'
import Cards from './Cards.jsx'
import { useSelector } from 'react-redux';
import Comparison from './Comparison.jsx'

const Related = (props) => {
  const product = useSelector((state) => state.product);
  const [products, setProducts] = useState([]);
  const [seeModal, setSeeModal] = useState(false);
  const [compProduct, setCompProduct] = useState({});
  const [compStyle, setCompStyle] =useState({});
  const [outfits, setOutfits] = useState(()=> {
    // getting stored value
    const saved = localStorage.getItem("outfits");
    const initialValue = JSON.parse(saved);
    return initialValue || {};
  })
  useEffect(() => {
    let promiseArr= [];
    for (let relItem of props.related) {
      promiseArr.push([getProduct2(relItem), getStyles2(relItem)]);
    }
    const promise4all = Promise.all(
      promiseArr.map(function(innerPromiseArray) {
           return Promise.all(innerPromiseArray).then((result)=>{ return {product:result[0].data, style:result[1].data}} );
      })
   ).then((product)=>setProducts(product));
  }, [props.related])

  useEffect(()=>{
    localStorage.setItem('outfits', JSON.stringify(outfits));
  },[outfits])

  let toOutfits= (outfit) => {
  let id= outfit.product.id;
   setOutfits({...outfits, [id]:outfit})
  }

  const closeCard = (outfit) => {
    let outfitC ={...outfits};
    delete outfitC[outfit.id];
    setOutfits(outfitC);
  }
  return (
   <div className='Related'>
     <Comparison product ={product.value} style={props.styles[0]} compStyle={compStyle} compProduct ={compProduct} seeModal= {seeModal} setSeeModal={setSeeModal}/>
     <div className='relatedTitle'> RELATED ITEMS </div>
     <div className= 'cardContainer'>
       <Cards classname={'related'} products={products} butt={toOutfits} />
     </div>
     <div className='relatedTitle'> MY OUTFITS </div>
     <div className='cardContainer'>
     <Cards classname={'favorites'} products={outfits} butt={setSeeModal} setCompStyle={setCompStyle} setCompProduct= {setCompProduct}  closeCard={closeCard} />
     </div>
   </div>
 )
}

export default Related;