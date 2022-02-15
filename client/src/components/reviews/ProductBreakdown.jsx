import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Stack from 'react-bootstrap/Stack';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProductBreakdown = ({ characteristics }) => {
  let characteristicsArray = [];
  for (let characteristic in characteristics) {
    let value = characteristics[characteristic].value;
    characteristicsArray.push([characteristic, value]);
  }

  const scaleDescription = (characteristic) => {
    if (characteristic === 'Fit') {
      return '1: Too Small | 3: Perfect | 5: Too Big';
    } else if (characteristic === 'Length') {
      return '1: Too Short | 3: Perfect | 5: Too Long';
    } else if (characteristic === 'Comfort') {
      return '1: Poor | 5: Great';
    } else {
      return '1: Poor | 5: Great';
    }
  };

  return (
    <div>
      <h5>Characteristics Breakdown:</h5>
      <Stack direction='vertical' gap={3}>
        {characteristicsArray.map((characteristic, index) => (
          <div key={index}>
            <h6>{characteristic[0]}:</h6>
            <ProgressBar variant='success' now={characteristic[1] / 5 * 100} label={Math.round(characteristic[1])}/>
            <span>{scaleDescription(characteristic[0])}</span>
          </div>
        ))}
      </Stack>
    </div>
  );
}

export default ProductBreakdown;