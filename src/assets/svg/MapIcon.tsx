import React, { FC } from 'react';

export const MapIcon: FC = () => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g
      clipPath="url(#a)"
      stroke="#2BAEE0"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 8.333c0 5.834-7.5 10.834-7.5 10.834s-7.5-5-7.5-10.834a7.5 7.5 0 0 1 15 0Z" />
      <path d="M10 10.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
