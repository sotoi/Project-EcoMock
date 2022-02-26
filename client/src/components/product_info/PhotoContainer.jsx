import React ,{useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import FullScreenModal from './FullScreenModal.jsx'

const PhotoContainer = (props) => {
  const [openModal, setOpenModal] =useState(false);
  const [clicked, setClicked] = useState('');
  const [index, setIndex] = useState(0);
  useEffect(()=>{
    if(props.style.photos!== undefined){
      if(index> props.style.photos.length-1){
        setIndex(0)
      }
    }
  },[props.style.photos])

  useEffect(()=>{setIndex(0)},[props.product])
  const handleSelect = (selectedIndex, e) => {
    if (selectedIndex >= props.style.photos.length || selectedIndex < 0 ){
            setIndex(0);
        } else if (selectedIndex !== index) {
            setIndex(selectedIndex);
        }
  };
  return (
    props.style.photos!==undefined?
    <>
    <FullScreenModal openModal={openModal} setOpenModal={setOpenModal} clicked={clicked} zoomSize={300}/>
    <div className = 'photoContainer'>
      <Carousel activeIndex={index} onSelect ={handleSelect} indicators={false} interval={null}>

        {props.style.photos.map((photo, i)=>{

          return(
          <Carousel.Item key={i}>
          <img
          className="carouselImg"
          src={photo.url}
          alt= {`Img not available`}
          onClick={(e)=>{setOpenModal(true);setClicked(photo.url)}}
        />
        </Carousel.Item>
          )
        })}

      </Carousel>
    </div></>:<div>Loading...</div>

  )
}

export default PhotoContainer;