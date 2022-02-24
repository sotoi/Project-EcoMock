import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReviews }  from '../../redux/store.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Stack from 'react-bootstrap/Stack';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import { markReviewAsHelpful, reportReview, getReviews } from '../helpers/main_helpers.jsx';
import Stars from '../helpers/Stars.jsx';

const ReviewTile = ({ review, product_id, sort, reviewCount }) => {
  const dispatch = useDispatch();
  const [helpfulButtonsState, sethelpfulButtonsState] = useState(false);

  // HANDLE HELPFUL YES BUTTON
  const [helpful, setHelpful] = useState(review.helpfulness);
  // let helpful = review.helpfulness;
  const handleHelpfulButton = () => {
    if (!helpfulButtonsState) {
      sethelpfulButtonsState(true);
      setHelpful(helpful + 1);
      markReviewAsHelpful(review.review_id)
        .then(() => dispatch(fetchReviews({product_id: product_id, count: reviewCount, sort: sort})));
    }
  }

  // HANDLE HELPFUL NO BUTTON
  const [unhelpful, setUnhelpful] = useState(0);
  const handleUnhelpfulButton = () => {
    if (!helpfulButtonsState) {
      sethelpfulButtonsState(true);
      setUnhelpful(1);
    }
  }

  // HANDLE REPORT BUTTON
  const handleReportButton = () => {
    reportReview(review.review_id)
      .then(() => dispatch(fetchReviews({product_id: product_id, count: reviewCount, sort: sort})));
  }

  // REVIEWER RECOMMENDATION?
  const isRecommended = (trueOrFalse) => {
    if (trueOrFalse === true) {
      return (
        <div>I recommend this product <FontAwesomeIcon icon={faCircleCheck} /></div>
      )
    }
  }

  // REVIEW HAS RESPONSE FROM STAFF?
  const hasResponse = (response) => {
    if (response) {
      return 'RESPONSE: ' + response;
    }
  }

  // REVIEW HAS PHOTOS?
  const [show, setShow] = useState(false);
  const [currPhoto, setCurrPhoto] = useState('');

  const handleClose = () => {
    setShow(false);
    setCurrPhoto('');
  }
  const handleShow = (url) => {
    setCurrPhoto(url);
    setShow(true);
  }

  const hasPhotos = (photos) => {
    if (photos) {
      let photosArray = [];
      for (var i = 0; i < photos.length; i++) {
        photosArray.push(photos[i]['url']);
      }
      return (
        <Container>
          <Row>
            {photosArray.map((url, index) => (
              <Col key={url}>
                <Button variant='light' className='review-tile-photos' onClick={() => handleShow(url)}>
                  <Image src={url} thumbnail className='review-photos' style={{height: '100px'}} onClick={handleShow}/>
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body><Image src={currPhoto} fluid/></Modal.Body>
                </Modal>
              </Col>
            ))}
          </Row>
        </Container>
      );
    }
  }

  // CONVERT REVIEW DATE TO MONTH DD, YYYY FORMAT
  const convertDate = (date) => {
    let convertedDate = date.slice(0, 10);
    convertedDate = convertedDate.split('-');
    const convertMonth = (month) => {
      const months = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
      }
      return months[month];
    }
    convertedDate = convertMonth(convertedDate[1]) + ' ' + convertedDate[2] + ', ' + convertedDate[0];
    return convertedDate;
  }

  return (
    <div>
      <div>
        <Stack className='review-header'>
          <span className='reviewer-name'>{review.reviewer_name}</span>
          <span className='review-date'>{convertDate(review.date)}</span>
          <span className='review-recommendation'>{isRecommended(review.recommend)}</span>
          <Stars ratingInput={review.rating}/>
        </Stack>
      </div>
      <div>
        <Stack>
          <span className='review-summary'>{review.summary}</span>
          <p className='review-body'>{review.body}</p>
          <p className='review-response'>{hasResponse(review.response)}</p>
          <div>{hasPhotos(review.photos)}</div>
          <span>Helpful?</span>
          <ButtonGroup className='helpful-button-group' size='sm'>
            <Button id='helpful-yes' variant='outline-dark' onClick={() => {handleHelpfulButton()}}>Yes ({helpful})</Button>
            <Button id='helpful-no' variant='outline-dark' onClick={() => {handleUnhelpfulButton()}}>No ({unhelpful})</Button>
            <Button id='danger' variant='outline-danger' onClick={() => {handleReportButton()}}>Report</Button>
          </ButtonGroup>
        </Stack>
      </div>
    </div>
  );
}

export default ReviewTile;