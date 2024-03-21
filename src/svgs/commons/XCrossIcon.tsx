import React from 'react';
import { IIcon } from '@/components/atoms/Icon';

const XCrossIcon: React.FC<IIcon> = (props) => {
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
        d="M32.75 6H42.75V16"
        stroke={props.color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 40L42.75 6"
        stroke={props.color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.75 32V42H32.75"
        stroke={props.color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.75 30L42.75 42"
        stroke={props.color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 8L18.75 18"
        stroke={props.color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default XCrossIcon;
