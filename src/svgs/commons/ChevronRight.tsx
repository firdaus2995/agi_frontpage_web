import React from 'react';

import { IIcon } from '@/components/atoms/Icon';

const ChevronRight: React.FC<IIcon> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12L10 8L6 4"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronRight;
