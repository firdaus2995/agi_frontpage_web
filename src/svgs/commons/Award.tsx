import React from 'react';

import { IIcon } from '@/components/atoms/Icon';

const Award: React.FC<IIcon> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 30C31.732 30 38 23.732 38 16C38 8.26801 31.732 2 24 2C16.268 2 10 8.26801 10 16C10 23.732 16.268 30 24 30Z"
        stroke={props.color}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.42 27.7798L14 45.9998L24 39.9998L34 45.9998L31.58 27.7598"
        stroke={props.color}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Award;
