import React from 'react';
import { IIcon } from '@/components/atoms/Icon';

const RoundedX: React.FC<IIcon> = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10.0013 18.3332C14.6037 18.3332 18.3346 14.6022 18.3346 9.99984C18.3346 5.39746 14.6037 1.6665 10.0013 1.6665C5.39893 1.6665 1.66797 5.39746 1.66797 9.99984C1.66797 14.6022 5.39893 18.3332 10.0013 18.3332Z"
        fill={color}
      />
      <path
        d="M12.5 7.5L7.5 12.5"
        stroke={'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 7.5L12.5 12.5"
        stroke={'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RoundedX;
