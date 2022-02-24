import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { fetchReviews, fetchReviewsMetadata } from '../../redux/store.js';
import { addNewReview, getReviews, getReviewsMetadata } from '../helpers/main_helpers.jsx';
import Stars from '../helpers/Stars.jsx';
const axios = require('axios');
const Buffer = require('buffer/').Buffer;

const AddReview = ({ product_id, product_name, sort, reviewCount }) => {
  const dispatch = useDispatch();
  const reviewsMetadata = useSelector((state) => state.reviewsMetadata);

  // SET INITIAL STATE OF FORM
  const initialState = {
    product_id: Number(product_id),
    rating: 0,
    summary: '',
    recommend: false,
    body: '',
    name: '',
    email: '',
    photos: [],
    characteristics: {}
  }
  const [newReview, setNewReview] = useState(initialState);
  useEffect(() => {}, [newReview]);

  // HANDLE CHANGES IN FORM PHOTOS
  const handleOnChangePhotos = async (event) => {
    // photo file from event
    const {name, value} = event.target;
    let file = event.target.files[0]
    // function to get blobs
    const getBase64 = (file) => {
      const reader = new FileReader();
      return new Promise(resolve => {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          resolve(reader.result);
        }
      })
    }
    // convert file data into blob
    let blob = await getBase64(file);
    // get url from server
    let getUrl = await axios.get('/s3Url').then((data) => data.data)
    // add photos to s3 bucket
    let base64Data = new Buffer.from(blob.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    let putUrl = await axios({
      method: 'PUT',
      url: getUrl,
      headers: {
        'Content-Type': 'image/jpeg',
        'Content-Encoding': 'base64'
      },
      data: base64Data
    });
    // get s3 url
    let s3Url = putUrl.config.url.split('?')[0];
    // setNewReview with s3 url at photo property
    let newPhotos = newReview.photos;
    newPhotos.push(s3Url);
    setNewReview({...newReview, photos: newPhotos});
  }
  // HANDLE CLICKING IN FORM RATING
  let formStars = document.querySelectorAll('.form-star Button');
  const onStar1Click = () => {
    if (formStars) {
      formStars.forEach((star, index) => {
        if (index === 0) {
          star.classList.add('active');
        } else {
          star.classList.remove('active');
        }
      });
    }
    setNewReview({...newReview, rating: 1});
  }
  const onStar2Click = () => {
    if (formStars) {
      formStars.forEach((star, index) => {
        if (index <= 1) {
          star.classList.add('active');
        } else {
          star.classList.remove('active');
        }
      });
    }
    setNewReview({...newReview, rating: 2});
  }
  const onStar3Click = () => {
    if (formStars) {
      formStars.forEach((star, index) => {
        if (index <= 2) {
          star.classList.add('active');
        } else {
          star.classList.remove('active');
        }
      });
    }
    setNewReview({...newReview, rating: 3});
  }
  const onStar4Click = () => {
    if (formStars) {
      formStars.forEach((star, index) => {
        if (index <= 3) {
          star.classList.add('active');
        } else {
          star.classList.remove('active');
        }
      });
    }
    setNewReview({...newReview, rating: 4});
  }
  const onStar5Click = () => {
    if (formStars) {
      formStars.forEach((star, index) => {
        if (index <= 4) {
          star.classList.add('active');
        } else {
          star.classList.remove('active');
        }
      });
    }
    setNewReview({...newReview, rating: 5});
  }

  // HANDLE CHANGES IN FORM (ASIDE FROM PHOTOS AND RATING)
  // handling validation for recommendation in on change handler since it
  // is initiated with a boolean already - see below on remaining form validation
  const [recommendationValidated, setRecommendationValidated] = useState(false);
  const handleOnChange = (event) => {
    const {name, value} = event.target;
    if (name === 'recommend') {
      let bool;
      if (value === 'false') {
        bool = false;
      } else {
        bool = true;
      }
      setNewReview({...newReview, [name]: bool});
      setRecommendationValidated(true);
    } else if (newReview[name] === undefined) {
      let newCharacteristics = newReview.characteristics;
      newCharacteristics[name] = Number(value);
      setNewReview({...newReview, characteristics: newCharacteristics});
    } else {
      setNewReview({...newReview, [name]: value});
    }
  }

  // HANDLE REVIEW FORM SUMBIT
  // FORM VALIDATION FUNCTIONS
      // error if:
      // - any mandatory fields are blank:
        // i.e. overall rating, recommendation, characteristics, review body, nickname, email
      // - review body is < 50 characters
      // note: form already has validation for correct email formay and invalid photos
  const requiredFields = {
    rating: newReview.rating > 0,
    recommend: recommendationValidated,
    characteristics: reviewsMetadata.value.characteristics && Object.keys(newReview.characteristics).length === Object.keys(reviewsMetadata.value.characteristics).length,
    body: newReview.body.length > 50,
    name: newReview.name !== '',
    email: newReview.email !== ''
  }
  let errorAlert= 'You must enter the following:';
  for (var field in requiredFields) {
    if (requiredFields[field] === false) {
      errorAlert += '\n' + field;
    }
  }
  const formValidated = () => {
    for (var field in requiredFields) {
      if (requiredFields[field] === false) {
        return false;
      }
    }
    return true;
  }
  const [submitStatus, setSubmitStatus] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    let validated = formValidated();
    if (validated) {
      console.log('NEW REVIEW: ', newReview);
      addNewReview(newReview)
      .then(() => setSubmitStatus(true));
      alert('Submission successful: you may exit the form');
    } else {
      alert(errorAlert);
    }
  };

  useEffect(() => {
    dispatch(fetchReviews({product_id: product_id, count: reviewCount, sort: sort}));
    dispatch(fetchReviewsMetadata(product_id));
  }, [submitStatus]);

  // FUNCTIONS TO RENDER CHARACTERISTICS DESIGNATED AS APPLICABLE TO PRODUCT
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
  const ratingChart = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great'
  };

  // 50 CHARACTER COUNTDOWN FOR REVIEW BODY
  const remainingChars = (length) => {
    if (length >= 50) {
      return 'Minimum reached';
    } else {
      return 'Minimum required characters left: ' + (50 - length).toString();
    }
  }

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
          <div key='rating' className="form-star">
              <Button variant="light" name='rating1' onClick={onStar1Click}>
                <Image src='../../../assets/FilledStar.svg'/>
              </Button>
              <Button variant="light" name='rating2' onClick={onStar2Click}>
                <Image src='../../../assets/FilledStar.svg'/>
              </Button>
              <Button variant="light" name='rating3' value={3} onClick={onStar3Click}>
                <Image src='../../../assets/FilledStar.svg'/>
              </Button>
              <Button variant="light" name='rating4' value={4} onClick={onStar4Click}>
                <Image src='../../../assets/FilledStar.svg'/>
              </Button>
              <Button variant="light" name='rating5' value={5} onClick={onStar5Click}>
                <Image src='../../../assets/FilledStar.svg'/>
              </Button>
          </div>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Do you recommend this product? *</Form.Label>
          <div key='recommend' className="mb-3">
            <Form.Check
              type='radio'
              name='recommend'
              value={true}
              onChange={handleOnChange}
              id='recommend-yes'
              label='Yes'
            />
            <Form.Check
              type='radio'
              name='recommend'
              value={false}
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
          <br />
          <Form.Text className='text-muted'>
            {remainingChars(newReview.body.length)}
          </Form.Text>
        </Form.Group>
        <br />
        <Form.Group className="mb-3">
          <Form.Label>Upload your photos</Form.Label>
          <Form.Control
          type="file"
          name='photo-1'
          onChange={handleOnChangePhotos}
          />
          <Form.Control
          type="file"
          name='photo-2'
          onChange={handleOnChangePhotos}
          />
          <Form.Control
          type="file"
          name='photo-3'
          onChange={handleOnChangePhotos}
          />
          <Form.Control
          type="file"
          name='photo-4'
          onChange={handleOnChangePhotos}
          />
          <Form.Control
          type="file"
          name='photo-5'
          onChange={handleOnChangePhotos}
          />
          <Form.Text className='text-muted'>
            Up to 5 photos
          </Form.Text>
          <Container>
            <Row>
              <Col>
                {(newReview.photos[0])
                  ? <Image src={newReview.photos[0]} thumbnail className='review-form-photos' style={{height: '100px'}}/>
                  : <></>
                }
              </Col>
              <Col>
                {(newReview.photos[1])
                  ? <Image src={newReview.photos[1]} thumbnail className='review-form-photos' style={{height: '100px'}}/>
                  : <></>
                }
              </Col>
              <Col>
                {(newReview.photos[2])
                  ? <Image src={newReview.photos[2]} thumbnail className='review-form-photos' style={{height: '100px'}}/>
                  : <></>
                }
              </Col>
              <Col>
                {(newReview.photos[3])
                  ? <Image src={newReview.photos[3]} thumbnail className='review-form-photos' style={{height: '100px'}}/>
                  : <></>
                }
              </Col>
              <Col>
                {(newReview.photos[4])
                  ? <Image src={newReview.photos[4]} thumbnail className='review-form-photos' style={{height: '100px'}}/>
                  : <></>
                }
              </Col>
            </Row>
          </Container>
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
    <div className='AddReview'>
      <Button variant='dark' size='sm' onClick={handleShow}>Add Review +</Button>

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
    </div>
  );
}

export default AddReview;