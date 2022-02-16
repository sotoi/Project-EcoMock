import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const AverageRating = ({ ratings }) => {
  let avgRating = 0;
  let totalRatingsCount = 0;
  for (let rating in ratings) {
    let ratingCount = Number(ratings[rating]);
    totalRatingsCount += ratingCount;
    avgRating += Number(rating) * ratingCount;
  }
  avgRating /= totalRatingsCount;

  let avgRatingRounded = ((Math.round(avgRating * 4))/4).toFixed(2);

  return (
    <div>
      <h5>Average Rating: {avgRatingRounded} Stars</h5>
      <Container>
        <Row>
          <Col><Image src='../../../assets/FilledStar.png' style={{height: '20px'}}/></Col>
          <Col><Image src='../../../assets/FilledStar.png' style={{height: '20px'}}/></Col>
          <Col><Image src='../../../assets/FilledStar.png' style={{height: '20px'}}/></Col>
          <Col><Image src='../../../assets/ThreeQuarterFilledStar.png' style={{height: '20px'}}/></Col>
          <Col><Image src='../../../assets/EmptyStar.png' style={{height: '20px'}}/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default AverageRating;