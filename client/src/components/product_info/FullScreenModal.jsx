import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal'



let FullScreenModal = (props) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgW, imgH], setSize] = useState([0, 0]);
  const [showMag, setShowMag] = useState(false);
  let onEnter = (e) => {
    const {width, height} = e.currentTarget.getBoundingClientRect();
    setSize([width, height]);
    setShowMag(true);
  }
  let onMove = (e) => {
    const {top,left} = e.currentTarget.getBoundingClientRect();
    let x = e.pageX - left;
    let y = e.pageY - top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    setXY([x,y])
  }
  let onLeave = (e) => {
    setShowMag(false)

  }
  return (
  <div className='fullScreenModal'>
    <Modal className='myModal' show={props.openModal}  onHide={() => props. setOpenModal(false)}>
      <Modal.Body>
        <div className='zoomContainer'>
        <img className='modalImg' onMouseMove={onMove} onMouseLeave ={onLeave} onMouseEnter={onEnter} src= {props.clicked}/>
        <div className= 'glass' style ={
          {display:showMag? '' :'none',
          height:`${props.zoomSize}px`,
          width:`${props.zoomSize}px`,
           top: `${y - props.zoomSize / 2}px`,
          left: `${x - props.zoomSize / 2}px`,
          backgroundImage: `url('${props.clicked}')`,
          backgroundSize: `${imgW * 2.5}px ${
            imgH * 2.5
          }px`,
          //calculate position of zoomed image.
          backgroundPositionX: `${-x * 2.5 + props.zoomSize / 2}px`,
          backgroundPositionY: `${-y * 2.5 + props.zoomSize / 2}px`
        }
          }></div>
        </div>
      </Modal.Body>
    </Modal>

  </div>)
}

export default FullScreenModal;