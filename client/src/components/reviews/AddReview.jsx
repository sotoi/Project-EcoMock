import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { fetchReviews, fetchReviewsMetadata }  from '../../redux/store.js';
import { addNewReview, getReviews, getReviewsMetadata } from '../helpers/main_helpers.jsx';

const AddReview = ({ product_id, product_name, sort, reviewCount }) => {
  // const dispatch = useDispatch();

  // const [addReviewParams, setAddReviewParams] = useState({});
  // const handleAddReviewButton = (params) => {
  //   setAddReviewParams(params);
  // };
  // useEffect(() => {
  //   addNewReview(addReviewParams);
  //   dispatch(fetchReviews({product_id: product_id, count: reviewCount, sort: sort}));
  //   dispatch(fetchReviewsMetadata(product_id));
  // }, [addReviewParams]);

  // const handleAddReviewButton = () => {
  //   return ()
  // }

  // FUNCTIONS TO RENDER CHARACTERISTICS DESIGNATED AS APPLICABLE TO PRODUCT
  const reviewsMetadata = useSelector((state) => state.reviewsMetadata);

  const hasSize = () => {
    if (reviewsMetadata.value.characteristics && reviewsMetadata.value.characteristics['Size']) {
      return (
        <>
          <small>
              Size: [TODO: dynamically show meaning of current selection]
          </small>
          <Form.Check
            type='radio'
            id='size-1'
            label='1'
          />
          <Form.Check
            type='radio'
            id='size-2'
            label='2'
          />
          <Form.Check
            type='radio'
            id='size-3'
            label='3'
          />
          <Form.Check
            type='radio'
            id='size-4'
            label='4'
          />
          <Form.Check
            type='radio'
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
      return (
        <>
          <small>
            Width: [TODO: dynamically show meaning of current selection]
          </small>
          <Form.Check
            type='radio'
            id='width-1'
            label='1'
          />
          <Form.Check
            type='radio'
            id='width-2'
            label='2'
          />
          <Form.Check
            type='radio'
            id='width-3'
            label='3'
          />
          <Form.Check
            type='radio'
            id='width-4'
            label='4'
          />
          <Form.Check
            type='radio'
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
      return (
        <>
          <small>
            Comfort: [TODO: dynamically show meaning of current selection]
          </small>
          <Form.Check
            type='radio'
            id='comfort-1'
            label='1'
          />
          <Form.Check
            type='radio'
            id='comfort-2'
            label='2'
          />
          <Form.Check
            type='radio'
            id='comfort-3'
            label='3'
          />
          <Form.Check
            type='radio'
            id='comfort-4'
            label='4'
          />
          <Form.Check
            type='radio'
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
      return (
        <>
          <small>
            Quality: [TODO: dynamically show meaning of current selection]
          </small>
          <Form.Check
            type='radio'
            id='quality-1'
            label='1'
          />
          <Form.Check
            type='radio'
            id='quality-2'
            label='2'
          />
          <Form.Check
            type='radio'
            id='quality-3'
            label='3'
          />
          <Form.Check
            type='radio'
            id='quality-4'
            label='4'
          />
          <Form.Check
            type='radio'
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
      return (
        <>
          <small>
            Length: [TODO: dynamically show meaning of current selection]
          </small>
          <Form.Check
            type='radio'
            id='length-1'
            label='1'
          />
          <Form.Check
            type='radio'
            id='length-2'
            label='2'
          />
          <Form.Check
            type='radio'
            id='length-3'
            label='3'
          />
          <Form.Check
            type='radio'
            id='length-4'
            label='4'
          />
          <Form.Check
            type='radio'
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
      return (
        <>
          <small>
            Fit: [TODO: dynamically show meaning of current selection]
          </small>
          <Form.Check
            type='radio'
            id='fit-1'
            label='1'
          />
          <Form.Check
            type='radio'
            id='fit-2'
            label='2'
          />
          <Form.Check
            type='radio'
            id='fit-3'
            label='3'
          />
          <Form.Check
            type='radio'
            id='fit-4'
            label='4'
          />
          <Form.Check
            type='radio'
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

  const renderForm = () => {
    return (
      <Form>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Characteristics (mandatory)</Form.Label>
          <div key='size' className="mb-3">{hasSize()}</div>
          <div key='width' className="mb-3">{hasWidth()}</div>
          <div key='comfort' className="mb-3">{hasComfort()}</div>
          <div key='quality' className="mb-3">{hasQuality()}</div>
          <div key='length' className="mb-3">{hasLength()}</div>
          <div key='fit' className="mb-3">{hasFit()}</div>
        </Form.Group>
        <br />
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Review summary</Form.Label>
          <Form.Control as='textarea' rows={1} maxLength='60' placeholder='Example: Best purchase ever!?'/>
          <Form.Text className='text-muted'>
            Up to 60 characters
          </Form.Text>
        </Form.Group>
        <br />
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea2'>
          <Form.Label>Review body (mandatory)</Form.Label>
          <Form.Control as='textarea' rows={3} minLength='50' maxLength='1000' placeholder='Why did you like the product or not?'/>
          <Form.Text className='text-muted'>
            Between 50 to 1000 characters
          </Form.Text>
        </Form.Group>
        <br />
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>What is your nickname (mandatory)</Form.Label>
          <Form.Control type='text' placeholder='Example: jackson11!'/>
          <Form.Text className='text-muted'>
            For privacy reasons, do not use your full name or email address
          </Form.Text>
        </Form.Group>
        <br />
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Your email (mandatory)</Form.Label>
          <Form.Control type='email' placeholder='Example: jackson11@email.com'/>
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