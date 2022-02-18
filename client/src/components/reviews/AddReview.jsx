import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import { fetchReviews, fetchReviewsMetadata }  from '../../redux/store.js';
import { addNewReview, getReviews, getReviewsMetadata } from '../helpers/main_helpers.jsx';
import Stars from './Stars.jsx';

const AddReview = ({ product_id, product_name, sort, reviewCount }) => {
  const dispatch = useDispatch();

  // HANDLE CHANGES IN FORM
  const initialState = {
    'product_id': Number(product_id),
    'rating': 0,
    'summary': '',
    'recommend': true,
    'body': '',
    'name': '',
    'email': '',
    // photos: ['https://images.urbndata.com/is/image/UrbanOutfitters/64169618_012_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720'],
    characteristics: {}
  }

  const [newReview, setNewReview] = useState(initialState);
  useEffect(() => {}, [newReview])
  const handleOnChange = (event) => {
    const {name, value} = event.target;
    if (name === 'photos') {
      let newPhotos = newReview.photos;
      newPhotos.push(value);
      setNewReview({...newReview, photos: newPhotos})
    } else if (name === 'rating') {
      setNewReview({...newReview, [name]: Number(value)})
    } else if (name === 'recommend') {
      setNewReview({...newReview, [name]: Boolean(value)})
    } else if (newReview[name] === undefined) {
      let newCharacteristics = newReview.characteristics;
      newCharacteristics[name] = Number(value);
      setNewReview({...newReview, characteristics: newCharacteristics})
    } else {
      setNewReview({...newReview, [name]: value})
    }
  }
  console.log('NEW REVIEW:', newReview);

  // HANDLE REVIEW FORM SUMBIT
  const [submitStatus, setSubmitStatus] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewReview(newReview)
      .then(() => setSubmitStatus(true));
  };

  useEffect(() => {
    dispatch(fetchReviews({product_id: product_id, count: reviewCount, sort: sort}));
    dispatch(fetchReviewsMetadata(product_id));
  }, [submitStatus]);

  // FUNCTIONS TO RENDER CHARACTERISTICS DESIGNATED AS APPLICABLE TO PRODUCT
  const reviewsMetadata = useSelector((state) => state.reviewsMetadata);

  const hasSize = () => {
    if (reviewsMetadata.value.characteristics && reviewsMetadata.value.characteristics['Size']) {
      let name = reviewsMetadata.value.characteristics['Size']['id'];
      let value = newReview.characteristics[name];
      const sizeChart = {
        1: 'A size too small',
        2: '1/2 a size too small',
        3: 'Perfect',
        4: '1/2 a size too big',
        5: 'A size too wide'
      };
      return (
        <>
          <small>
              Size: {value ? sizeChart[value] : 'none selected'}
          </small>
          <Form.Check
            type='radio'
            name={name}
            value={1}
            onChange={handleOnChange}
            id='size-1'
            label='1'
          />
          <Form.Check
            type='radio'
            name={name}
            value={2}
            onChange={handleOnChange}
            id='size-2'
            label='2'
          />
          <Form.Check
            type='radio'
            name={name}
            value={3}
            onChange={handleOnChange}
            id='size-3'
            label='3'
          />
          <Form.Check
            type='radio'
            name={name}
            value={4}
            onChange={handleOnChange}
            id='size-4'
            label='4'
          />
          <Form.Check
            type='radio'
            name={name}
            value={5}
            onChange={handleOnChange}
            id='size-5'
            label='5'
          />
          <Form.Text className='text-muted'>
              1: A size too small | 5: A size too wide
          </Form.Text>
        </>
      )
    }
  };

  const hasWidth = () => {
    if (reviewsMetadata.value.characteristics && reviewsMetadata.value.characteristics['Width']) {
      let name = reviewsMetadata.value.characteristics['Width']['id'];
      let value = newReview.characteristics[name];
      const widthChart = {
        1: 'Too narrow',
        2: 'Slightly narrow',
        3: 'Perfect',
        4: 'Slightly wide',
        5: 'Too wide'
      };
      return (
        <>
          <small>
          Width: {value ? widthChart[value] : 'none selected'}
          </small>
          <Form.Check
            type='radio'
            name={name}
            value={1}
            onChange={handleOnChange}
            id='width-1'
            label='1'
          />
          <Form.Check
            type='radio'
            name={name}
            value={2}
            onChange={handleOnChange}
            id='width-2'
            label='2'
          />
          <Form.Check
            type='radio'
            name={name}
            value={3}
            onChange={handleOnChange}
            id='width-3'
            label='3'
          />
          <Form.Check
            type='radio'
            name={name}
            value={4}
            onChange={handleOnChange}
            id='width-4'
            label='4'
          />
          <Form.Check
            type='radio'
            name={name}
            value={5}
            onChange={handleOnChange}
            id='width-5'
            label='5'
          />
          <Form.Text className='text-muted'>
              1: Too narrow | 5: Too wide
          </Form.Text>
        </>
      )
    }
  };

  const hasComfort = () => {
    if (reviewsMetadata.value.characteristics && reviewsMetadata.value.characteristics['Comfort']) {
      let name = reviewsMetadata.value.characteristics['Comfort']['id'];
      let value = newReview.characteristics[name];
      const comfortChart = {
        1: 'Uncomfortable',
        2: 'Slightly uncomfortable',
        3: 'Ok',
        4: 'Comfortable',
        5: 'Perfect'
      };
      return (
        <>
          <small>
            Comfort: {value ? comfortChart[value] : 'none selected'}
          </small>
          <Form.Check
            type='radio'
            name={name}
            value={1}
            onChange={handleOnChange}
            id='comfort-1'
            label='1'
          />
          <Form.Check
            type='radio'
            name={name}
            value={2}
            onChange={handleOnChange}
            id='comfort-2'
            label='2'
          />
          <Form.Check
            type='radio'
            name={name}
            value={3}
            onChange={handleOnChange}
            id='comfort-3'
            label='3'
          />
          <Form.Check
            type='radio'
            name={name}
            value={4}
            onChange={handleOnChange}
            id='comfort-4'
            label='4'
          />
          <Form.Check
            type='radio'
            name={name}
            value={5}
            onChange={handleOnChange}
            id='comfort-5'
            label='5'
          />
          <Form.Text className='text-muted'>
              1: Uncomfortable | 5: Perfect
          </Form.Text>
        </>
      )
    }
  };

  const hasQuality = () => {
    if (reviewsMetadata.value.characteristics && reviewsMetadata.value.characteristics['Quality']) {
      let name = reviewsMetadata.value.characteristics['Quality']['id'];
      let value = newReview.characteristics[name];
      const qualityChart = {
        1: 'Poor',
        2: 'Below average',
        3: 'What I expected',
        4: 'Pretty great',
        5: 'Perfect'
      }
      return (
        <>
          <small>
            Quality: {value ? qualityChart[value] : 'none selected'}
          </small>
          <Form.Check
            type='radio'
            name={name}
            value={1}
            onChange={handleOnChange}
            id='quality-1'
            label='1'
          />
          <Form.Check
            type='radio'
            name={name}
            value={2}
            onChange={handleOnChange}
            id='quality-2'
            label='2'
          />
          <Form.Check
            type='radio'
            name={name}
            value={3}
            onChange={handleOnChange}
            id='quality-3'
            label='3'
          />
          <Form.Check
            type='radio'
            name={name}
            value={4}
            onChange={handleOnChange}
            id='quality-4'
            label='4'
          />
          <Form.Check
            type='radio'
            name={name}
            value={5}
            onChange={handleOnChange}
            id='quality-5'
            label='5'
          />
          <Form.Text className='text-muted'>
              1: Poor | 5: Perfect
          </Form.Text>
        </>
      )
    }
  };

  const hasLength = () => {
    if (reviewsMetadata.value.characteristics && reviewsMetadata.value.characteristics['Length']) {
      let name = reviewsMetadata.value.characteristics['Length']['id'];
      let value = newReview.characteristics[name];
      const lengthChart = {
        1: 'Runs short',
        2: 'Runs slightly short',
        3: 'Perfect',
        4: 'Runs slightly long',
        5: 'Runs long'
      }
      return (
        <>
          <small>
            Length: {value ? lengthChart[value] : 'none selected'}
          </small>
          <Form.Check
            type='radio'
            name={name}
            value={1}
            onChange={handleOnChange}
            id='length-1'
            label='1'
          />
          <Form.Check
            type='radio'
            name={name}
            value={2}
            onChange={handleOnChange}
            id='length-2'
            label='2'
          />
          <Form.Check
            type='radio'
            name={name}
            value={3}
            onChange={handleOnChange}
            id='length-3'
            label='3'
          />
          <Form.Check
            type='radio'
            name={name}
            value={4}
            onChange={handleOnChange}
            id='length-4'
            label='4'
          />
          <Form.Check
            type='radio'
            name={name}
            value={5}
            onChange={handleOnChange}
            id='length-5'
            label='5'
          />
          <Form.Text className='text-muted'>
              1: Runs short | 5: Runs long
          </Form.Text>
        </>
      )
    }
  };

  const hasFit = () => {
    if (reviewsMetadata.value.characteristics && reviewsMetadata.value.characteristics['Fit']) {
      let name = reviewsMetadata.value.characteristics['Fit']['id'];
      let value = newReview.characteristics[name];
      const fitChart = {
        1: 'Runs tight',
        2: 'Runs slightly tight',
        3: 'Perfect',
        4: 'Runs slightly long',
        5: 'Runs long'
      }
      return (
        <>
          <small>
            Fit: {value ? fitChart[value] : 'none selected'}
          </small>
          <Form.Check
            type='radio'
            name={name}
            value={1}
            onChange={handleOnChange}
            id='fit-1'
            label='1'
          />
          <Form.Check
            type='radio'
            name={name}
            value={2}
            onChange={handleOnChange}
            id='fit-2'
            label='2'
          />
          <Form.Check
            type='radio'
            name={name}
            value={3}
            onChange={handleOnChange}
            id='fit-3'
            label='3'
          />
          <Form.Check
            type='radio'
            name={name}
            value={4}
            onChange={handleOnChange}
            id='fit-4'
            label='4'
          />
          <Form.Check
            type='radio'
            name={name}
            value={5}
            onChange={handleOnChange}
            id='fit-5'
            label='5'
          />
          <Form.Text className='text-muted'>
              1: Runs tight | 5: Runs long
          </Form.Text>
        </>
      )
    }
  };

  // RATING CHART TO DYNAMICALLY SHOW MEANING OF STAR SELECTION
  let ratingChart = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great'
  };

  // FUNCTION TO RENDER REVIEW FORM
  const renderForm = () => {
    return (
      <Form onSubmit={(event) => handleSubmit(event)}>
        <Form.Label className='text-danger'>Please note: inputs with an * are mandatory</Form.Label>
        <Form.Group className='mb-3'>
          <Form.Label>Overall rating *</Form.Label>
          <br />
          <small>
            {newReview.rating > 0 ? ratingChart[newReview.rating] : 'none selected'}
          </small>
          <div key='rating' className="mb-3">
            <Form.Check
              type='radio'
              name='rating'
              value={1}
              onChange={handleOnChange}
              id='rating-1'
              label={<Stars ratingInput={1}/>}
            />
            <Form.Check
              type='radio'
              name='rating'
              value={2}
              onChange={handleOnChange}
              id='rating-2'
              label={<Stars ratingInput={2}/>}
            />
            <Form.Check
              type='radio'
              name='rating'
              value={3}
              onChange={handleOnChange}
              id='rating-3'
              label={<Stars ratingInput={3}/>}
            />
            <Form.Check
              type='radio'
              name='rating'
              value={4}
              onChange={handleOnChange}
              id='rating-4'
              label={<Stars ratingInput={4}/>}
            />
            <Form.Check
              type='radio'
              name='rating'
              value={5}
              onChange={handleOnChange}
              id='rating-5'
              label={<Stars ratingInput={5}/>}
            />
          </div>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Do you recommend this product? *</Form.Label>
          <div key='recommend' className="mb-3">
            <Form.Check
              type='radio'
              name='recommend'
              value={newReview.recommend}
              onChange={handleOnChange}
              id='recommend-yes'
              label='Yes'
            />
            <Form.Check
              type='radio'
              name='recommend'
              value={newReview.recommend}
              onChange={handleOnChange}
              id='recommend-no'
              label='No'
            />
          </div>
        </Form.Group>
        <br />
        <Form.Group className='mb-3'>
          <Form.Label>Characteristics *</Form.Label>
          <div key='size' className="mb-3">{hasSize()}</div>
          <div key='width' className="mb-3">{hasWidth()}</div>
          <div key='comfort' className="mb-3">{hasComfort()}</div>
          <div key='quality' className="mb-3">{hasQuality()}</div>
          <div key='length' className="mb-3">{hasLength()}</div>
          <div key='fit' className="mb-3">{hasFit()}</div>
        </Form.Group>
        <br />
        <Form.Group className='mb-3'>
          <Form.Label>Review summary</Form.Label>
          <Form.Control
          as='textarea'
          rows={1}
          maxLength='60'
          placeholder='Example: Best purchase ever!?'
          name='summary'
          value={newReview.summary}
          onChange={handleOnChange}
          />
          <Form.Text className='text-muted'>
            Up to 60 characters
          </Form.Text>
        </Form.Group>
        <br />
        <Form.Group className='mb-3'>
          <Form.Label>Review body *</Form.Label>
          <Form.Control
          as='textarea'
          rows={3}
          minLength='50'
          maxLength='1000'
          placeholder='Why did you like the product or not?'
          name='body'
          value={newReview.body}
          onChange={handleOnChange}
          />
          <Form.Text className='text-muted'>
            Between 50 to 1000 characters
          </Form.Text>
        </Form.Group>
        <br />
        <Form.Group className="mb-3">
          <Form.Label>Upload your photos</Form.Label>
          <Form.Control
          type="file"
          multiple
          name='photos'
          value={newReview.photos}
          onChange={handleOnChange}
          />
          <Form.Text className='text-muted'>
            Up to 5 photos
          </Form.Text>
        </Form.Group>
        <br />
        <Form.Group className='mb-3'>
          <Form.Label>What is your nickname *</Form.Label>
          <Form.Control
          type='text'
          placeholder='Example: jackson11!'
          name='name'
          value={newReview.name}
          onChange={handleOnChange}
          />
          <Form.Text className='text-muted'>
            For privacy reasons, do not use your full name or email address
          </Form.Text>
        </Form.Group>
        <br />
        <Form.Group className='mb-3'>
          <Form.Label>Your email *</Form.Label>
          <Form.Control
          type='email'
          placeholder='Example: jackson11@email.com'
          name='email'
          value={newReview.email}
          onChange={handleOnChange}
          />
          <Form.Text className='text-muted'>
            For authentication reasons, you will not be emailed
          </Form.Text>
        </Form.Group>
        <br />
        <Button variant='dark' type='submit'>Submit review</Button>
      </Form>
    );
  };

  // HANDLE MODAL
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='dark' onClick={handleShow}>Add Review +</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Write Your Review
            <br />
            <small className='text-muted'>About the {product_name}</small>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {renderForm()}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddReview;