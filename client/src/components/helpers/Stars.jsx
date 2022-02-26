import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Stars = ({ ratingInput }) => {
  let rating = ratingInput.toString();
  rating = rating.split('.');

  let wholeStars = Number(rating[0]);
  let partialStar = Number(rating[1]);
  let star1, star2, star3, star4, star5;

  const renderPartialStar = (partialStar) => {
    if (partialStar === 25) {
      return (
        <Image src='../../../assets/QuarterFilledStar.svg' alt='star.25' className='star'/>
      );
    } else if (partialStar === 50) {
      return (
        <Image src='../../../assets/HalfFilledStar.svg' alt='star.5' className='star'/>
      );
    } else {
      return (
        <Image src='../../../assets/ThreeQuarterFilledStar.svg' alt='star.75' className='star'/>
      );
    }
  };

  if (wholeStars === 1) {
    star1 = <Image src='../../../assets/FilledStar.svg' alt='star1' className='star'/>;
    if (partialStar) {
      star2 = renderPartialStar(partialStar);
      star3 = <Image src='../../../assets/EmptyStar.svg' alt='star0' className='star'/>;
      star4 = <Image src='../../../assets/EmptyStar.svg' alt='star0' className='star'/>;
      star5 = <Image src='../../../assets/EmptyStar.svg' alt='star0' className='star'/>;
    } else {
      star2 = <Image src='../../../assets/EmptyStar.svg' alt='star0' className='star'/>;
      star3 = <Image src='../../../assets/EmptyStar.svg' alt='star0' className='star'/>;
      star4 = <Image src='../../../assets/EmptyStar.svg' alt='star0' className='star'/>;
      star5 = <Image src='../../../assets/EmptyStar.svg' alt='star0' className='star'/>;
    }
  }

  if (wholeStars === 2) {
    star1 = <Image src='../../../assets/FilledStar.svg' alt='star1' className='star'/>;
    star2 = <Image src='../../../assets/FilledStar.svg' alt='star1' className='star'/>;
    if (partialStar) {
      star3 = renderPartialStar(partialStar);
      star4 = <Image src='../../../assets/EmptyStar.svg' alt='star0' className='star'/>;
      star5 = <Image src='../../../assets/EmptyStar.svg' alt='star0' className='star'/>;
    } else {
      star3 = <Image src='../../../assets/EmptyStar.svg' alt='star0' className='star'/>;
      star4 = <Image src='../../../assets/EmptyStar.svg' alt='star0' className='star'/>;
      star5 = <Image src='../../../assets/EmptyStar.svg' alt='star0' className='star'/>;
    }
  }

  if (wholeStars === 3) {
    star1 = <Image src='../../../assets/FilledStar.svg' alt='star1' className='star'/>;
    star2 = <Image src='../../../assets/FilledStar.svg' alt='star1' className='star'/>;
    star3 = <Image src='../../../assets/FilledStar.svg' alt='star1' className='star'/>;
    if (partialStar) {
      star4 = renderPartialStar(partialStar);
      star5 = <Image src='../../../assets/EmptyStar.svg' alt='star0' className='star'/>;
    } else {
      star4 = <Image src='../../../assets/EmptyStar.svg' alt='star0' className='star'/>;
      star5 = <Image src='../../../assets/EmptyStar.svg' alt='star0' className='star'/>;
    }
  }

  if (wholeStars === 4) {
    star1 = <Image src='../../../assets/FilledStar.svg' alt='star1' className='star'/>;
    star2 = <Image src='../../../assets/FilledStar.svg' alt='star1' className='star'/>;
    star3 = <Image src='../../../assets/FilledStar.svg' alt='star1' className='star'/>;
    star4 = <Image src='../../../assets/FilledStar.svg' alt='star1' className='star'/>;
    if (partialStar) {
      star5 = renderPartialStar(partialStar);
    } else {
      star5 = <Image src='../../../assets/EmptyStar.svg' alt='star0' className='star'/>;
    }
  }

  if (wholeStars === 5) {
    star1 = <Image src='../../../assets/FilledStar.svg' alt='star1' className='star'/>;
    star2 = <Image src='../../../assets/FilledStar.svg' alt='star1' className='star'/>;
    star3 = <Image src='../../../assets/FilledStar.svg' alt='star1' className='star'/>;
    star4 = <Image src='../../../assets/FilledStar.svg' alt='star1' className='star'/>;
    star5 = <Image src='../../../assets/FilledStar.svg' alt='star1' className='star'/>;
  }

  return (
    <Container fluid={true} className='p-0'>
      <Row xs='auto'>
        <Col>{star1}</Col>
        <Col>{star2}</Col>
        <Col>{star3}</Col>
        <Col>{star4}</Col>
        <Col>{star5}</Col>
      </Row>
    </Container>
  );
}

export default Stars;