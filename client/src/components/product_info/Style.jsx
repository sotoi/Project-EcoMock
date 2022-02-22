import React, {useEffect} from 'react';
import {style} from '../../redux/store.js'
const Style = (props) => {

  let selectStyle = (styleset) => {
    props.onSetState(styleset);
  }
  let selected = props.selectedStyle === props.style ?  'selected-img':'style-img';
  return (
    <div className= 'styleContainer'>
    <div style={{backgroundImage: `url(${props.style.photos[0].thumbnail_url})`}} className ={selected}  onClick={()=> {

      selectStyle(props.style)}}>
        <input className='check' type='checkbox' readOnly checked></input>
    </div>
    </div>

  )
}

export default Style;