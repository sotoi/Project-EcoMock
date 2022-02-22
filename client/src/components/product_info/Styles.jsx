import React from 'react';
import Style from './Style.jsx'
const Styles = (props) => {



  return (
    <div>
    <div className = 'styles'>
      {props.styles.map((style)=> <Style style = {style} selectedStyle={props.selectedStyle} onSetState ={props.onSetState} key = {style.style_id} />)}
    </div>
    </div>
  )
}

export default Styles;