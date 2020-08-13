/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const Surprised: React.FC = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-mood-suprised"
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
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
    <circle cx="12" cy="15" r="2" />
  </svg>
);

export default Surprised;
