import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ProductBreakdown = ({ characteristics }) => {
  let characteristicsArray = [];
  for (let characteristic in characteristics) {
    let value = characteristics[characteristic].value;
    characteristicsArray.push([characteristic, value]);
  }
  return (
    <>
      {characteristicsArray.map((characteristic, index) => (
        <div key={index}>{characteristic[0]}: {characteristic[1]}</div>
      ))}
    </>
  );
}

export default ProductBreakdown;