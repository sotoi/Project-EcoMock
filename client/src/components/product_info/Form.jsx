import React, {useEffect,useState} from 'react';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

let Form = (props) => {
  const [sku, setSku] = useState({});
  const [quantity, setQuantity] = useState('-');
  useEffect(()=>{
    setSku({ size:'SELECT SIZE'})
    setQuantity('-')
  },[props.style])
  let resetForm = () => {
    props.addtoCart(sku.sku)
    setSku({size: 'SELECT SIZE'})
    setQuantity('-')
  }
  let renderQuantity = (quantity) => {
    console.log(sku)
    let components = [];
    for(let i = 1; i<= sku.quantity; i++){
      if(i<16){
        components.push (<Dropdown.Item onClick= {()=>{setQuantity(i)}}>
         {i}
         </Dropdown.Item>)
         }
    }
    return components;
  }
  return (
  props.style.skus!==undefined &&
  <div className='Form'>
    {Object.keys(props.style.skus)[0]!=='null' ?
    <DropdownButton id= 'dropdownSize' title ={sku.size}>
      {Object.keys(props.style.skus).map((sku, i)=>{

        if(props.style.skus[sku].quantity!==0){
          return(
          <Dropdown.Item key={i} onClick= {()=>{
            setSku({sku:sku, size:props.style.skus[sku].size,quantity:props.style.skus[sku].quantity  });
            setQuantity('-');
            }} >
          {props.style.skus[sku].size}
        </Dropdown.Item>)
        }
      })}
    </DropdownButton>
      : <DropdownButton disabled={true} id= 'dropdownSize' title ='OUT OF STOCK'></DropdownButton>}
    {(sku.size==='SELECT SIZE' || sku.size=== 'OUT OF STOCK')? <DropdownButton disabled={true} id= 'dropdownQuantity' title ='-'></DropdownButton> :
    <DropdownButton  id= 'dropdownQuantity' title ={quantity}>
      {renderQuantity(sku.quantity)}
     </DropdownButton>}
     {quantity!=='-'?
     <Button className='cartButton' onClick={()=>{resetForm()}} >ADD TO CART</Button>:
     <Button className='cartButton' disabled >ADD TO CART</Button>
    }
    </div>)
}

export default Form;