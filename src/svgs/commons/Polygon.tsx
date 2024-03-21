import React from 'react';
import { IIcon } from '@/components/atoms/Icon';

const Polygon: React.FC<IIcon> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 10 8"
      fill="none"
    >
      <path d="M5 0L9.33013 7.5H0.669873L5 0Z" fill={props.color} />
    </svg>
  );
};

export default Polygon;
