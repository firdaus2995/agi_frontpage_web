import React from 'react';
import { IIcon } from '@/components/atoms/Icon';

const GlobeIcon: React.FC<IIcon> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 49 48"
      fill="none"
      {...props}
    >
      <path
        d="M24.5 44C35.5457 44 44.5 35.0457 44.5 24C44.5 12.9543 35.5457 4 24.5 4C13.4543 4 4.5 12.9543 4.5 24C4.5 35.0457 13.4543 44 24.5 44Z"
        stroke={props.color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 24H44.5"
        stroke={props.color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 4C29.5026 9.47671 32.3455 16.5841 32.5 24C32.3455 31.4159 29.5026 38.5233 24.5 44C19.4974 38.5233 16.6545 31.4159 16.5 24C16.6545 16.5841 19.4974 9.47671 24.5 4Z"
        stroke={props.color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GlobeIcon;
