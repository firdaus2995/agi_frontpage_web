import React from 'react';
import { IIcon } from '@/components/atoms/Icon';

const PlayIcon: React.FC<IIcon> = ({
  width = 24,
  height = 24,
  color = 'white'
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0.333374L25 17L0 33.6667V0.333374Z" fill={color} />
    </svg>
  );
};

export default PlayIcon;
