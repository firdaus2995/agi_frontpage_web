import React from 'react';
import { IIcon } from '@/components/atoms/Icon';

const TiktokIcon: React.FC<IIcon> = ({
  width = 24,
  height = 24,
  color = 'white'
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.2044 4.44667C16.369 3.49287 15.9085 2.26797 15.9089 1H12.1322V16.1556C12.1031 16.9757 11.7568 17.7525 11.1664 18.3225C10.5759 18.8924 9.78733 19.211 8.96667 19.2111C7.23111 19.2111 5.78889 17.7933 5.78889 16.0333C5.78889 13.9311 7.81778 12.3544 9.90778 13.0022V9.14C5.69111 8.57778 2 11.8533 2 16.0333C2 20.1033 5.37333 23 8.95444 23C12.7922 23 15.9089 19.8833 15.9089 16.0333V8.34556C17.4403 9.44537 19.279 10.0355 21.1644 10.0322V6.25556C21.1644 6.25556 18.8667 6.36556 17.2044 4.44667Z"
        fill={color}
      />
    </svg>
  );
};

export default TiktokIcon;
