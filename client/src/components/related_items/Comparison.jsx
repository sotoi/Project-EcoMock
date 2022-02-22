import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal'

const Comparison = (props) => {
  return (
    props.product!== {} && props.compProduct!=={} && props.style!== undefined && props.style!== {} && props.compStyle!=={} && props.compStyle!==undefined ?
    <Modal  size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    show={props.seeModal} onHide={()=>{props.setSeeModal(false)}} >
    <Modal.Header closeButton>
    <Modal.Title>Comparison</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div className='comparisonContainer'>
        <div className='imgCompContainer'>
          <img className='compImg' src= {props.style.photos[0].url}/>
        </div>
        <div classname ='textComparison'>

        </div>
        <div className='imgCompContainer'>
          {props.compStyle.photos!== undefined && <img className='compImg' src= {props.compStyle.photos[0].url}/>}
        </div>
      </div>
    </Modal.Body>

  </Modal> : <div>Loading...</div>
  )
}

export default Comparison;