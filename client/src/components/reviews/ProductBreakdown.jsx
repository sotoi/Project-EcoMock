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

  return (
    <>
      <h5>Product Breakdown</h5>
      <Stack direction='vertical' gap={3}>
        {characteristicsArray.map((characteristic, index) => (
          <span key={index}>{characteristic[0]}: <ProgressBar variant='success' now={characteristic[1] / 5 * 100} label={Math.round(characteristic[1])}/></span>
        ))}
      </Stack>
    </>
  );
}

export default ProductBreakdown;