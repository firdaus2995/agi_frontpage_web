import React from 'react';

import { IIcon } from '@/components/atoms/Icon';

const Mail = (props: IIcon) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33366 3.33337H16.667C17.5837 3.33337 18.3337 4.08337 18.3337 5.00004V15C18.3337 15.9167 17.5837 16.6667 16.667 16.6667H3.33366C2.41699 16.6667 1.66699 15.9167 1.66699 15V5.00004C1.66699 4.08337 2.41699 3.33337 3.33366 3.33337Z"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3337 5L10.0003 10.8333L1.66699 5"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Mail;
