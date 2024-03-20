import React from 'react';
import { IIcon } from '@/components/atoms/Icon';

const RoundedQuestion: React.FC<IIcon> = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
  >
    <path
      d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.1797 18.0002C18.6499 16.6635 19.578 15.5364 20.7996 14.8184C22.0212 14.1005 23.4575 13.838 24.854 14.0776C26.2506 14.3171 27.5173 15.0432 28.4298 16.1272C29.3424 17.2112 29.8418 18.5832 29.8397 20.0002C29.8397 24.0002 23.8397 26.0002 23.8397 26.0002"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 34H24.02"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default RoundedQuestion;
