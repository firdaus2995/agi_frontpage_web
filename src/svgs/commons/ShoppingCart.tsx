import React from 'react';

import { IIcon } from '@/components/atoms/Icon';

const ShoppingCart: React.FC<IIcon> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2175_13832)">
        <path
          d="M7.50008 18.3334C7.96032 18.3334 8.33341 17.9603 8.33341 17.5001C8.33341 17.0398 7.96032 16.6667 7.50008 16.6667C7.03984 16.6667 6.66675 17.0398 6.66675 17.5001C6.66675 17.9603 7.03984 18.3334 7.50008 18.3334Z"
          stroke={props.color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.6666 18.3334C17.1268 18.3334 17.4999 17.9603 17.4999 17.5001C17.4999 17.0398 17.1268 16.6667 16.6666 16.6667C16.2063 16.6667 15.8333 17.0398 15.8333 17.5001C15.8333 17.9603 16.2063 18.3334 16.6666 18.3334Z"
          stroke={props.color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M0.833252 0.833252H4.16659L6.39992 11.9916C6.47612 12.3752 6.68484 12.7199 6.98954 12.9652C7.29424 13.2104 7.6755 13.3407 8.06659 13.3333H16.1666C16.5577 13.3407 16.9389 13.2104 17.2436 12.9652C17.5483 12.7199 17.757 12.3752 17.8333 11.9916L19.1666 4.99992H4.99992"
          stroke={props.color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2175_13832">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ShoppingCart;
