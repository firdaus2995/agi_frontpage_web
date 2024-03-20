import React from 'react';

import { IIcon } from '@/components/atoms/Icon';

const Clock: React.FC<IIcon> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.667 22.5C18.1898 22.5 22.667 18.0228 22.667 12.5C22.667 6.97715 18.1898 2.5 12.667 2.5C7.14414 2.5 2.66699 6.97715 2.66699 12.5C2.66699 18.0228 7.14414 22.5 12.667 22.5Z"
        stroke={props.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.667 6.5V12.5L16.667 14.5"
        stroke={props.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Clock;
