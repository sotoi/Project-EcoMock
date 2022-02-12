import React from 'react';
import Style from './Style.jsx'
const Styles = (props) => {
  return (
    <div className = 'styles'>
      {props.styles.map((style)=> <Style style = {style} key = {style.style_id} />)}
    </div>

  )
}

export default Styles;