/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const BasketBall: React.FC = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-ball-basketball"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#2c3e50"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <circle cx="12" cy="12" r="9" />
    <line x1="5.65" y1="5.65" x2="18.35" y2="18.35" />
    <line x1="5.65" y1="18.35" x2="18.35" y2="5.65" />
    <path d="M12 3a9 9 0 0 0 9 9" />
    <path d="M3 12a9 9 0 0 1 9 9" />
  </svg>
);

export default BasketBall;
