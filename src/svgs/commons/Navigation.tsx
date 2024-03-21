import React from 'react';

import { IIcon } from '@/components/atoms/Icon';

const Navigation: React.FC<IIcon> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66675 10L20.6667 1L11.6667 20L9.66675 12L1.66675 10Z"
        stroke={props.color ?? '#C4B7D3'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Navigation;
