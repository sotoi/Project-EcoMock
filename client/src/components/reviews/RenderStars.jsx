import React from 'react';

const RenderStars = (ratingInput) => {
  let rating = ratingInput.toString();
  rating = rating.split('.');
  let wholeRating = Number(rating[0])
  let star1, star2, star3, star4, star5;
  star1 = <Image src='../../../assets/FilledStar.png' style={{height: '20px'}}/>
  if (wholeRating > 1) {
    star2 = <Image src='../../../assets/FilledStar.png' style={{height: '20px'}}/>
  }
}