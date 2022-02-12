import React from 'react';
const Style = (props) => {
  return (
    <div className = 'style'>
      <img src = {props.style.photos[0].thumbnail_url} />
    </div>

  )
}

export default Style;