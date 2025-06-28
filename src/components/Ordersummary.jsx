import React from 'react';
import { useNavigate } from 'react-router-dom';

const Ordersummary = () => {
  const navigateBack = useNavigate();

  return (
    <>
      <h4>Order Confirmed !!!</h4>
      <button
        onClick={() => {
          navigateBack(-1);
        }}
      >
        Go Back
      </button>
    </>
  );
};

export default Ordersummary;
