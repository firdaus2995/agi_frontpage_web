import React from 'react';
import { IIcon } from '@/components/atoms/Icon';

const FacebookIcon: React.FC<IIcon> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1329_3538)">
        <path
          d="M9.06491 23V12.677H6.00293V8.96017H9.06491V5.78555C9.06491 3.2909 10.8736 1 15.0413 1C16.7287 1 17.9765 1.14421 17.9765 1.14421L17.8782 4.61506C17.8782 4.61506 16.6057 4.60402 15.217 4.60402C13.7141 4.60402 13.4733 5.22145 13.4733 6.24623V8.96017H17.9977L17.8008 12.677H13.4733V23H9.06491Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1329_3538">
          <rect
            width={props.width}
            height={props.height}
            fill={props.color}
            transform="translate(6 1)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookIcon;
