import React from 'react';
import { IIcon } from '@/components/atoms/Icon';

const FileIcon: React.FC<IIcon> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 49 48"
      fill="none"
      {...props}
    >
      <path
        d="M28.25 4H12.25C11.1891 4 10.1717 4.42143 9.42157 5.17157C8.67143 5.92172 8.25 6.93913 8.25 8V40C8.25 41.0609 8.67143 42.0783 9.42157 42.8284C10.1717 43.5786 11.1891 44 12.25 44H36.25C37.3109 44 38.3283 43.5786 39.0784 42.8284C39.8286 42.0783 40.25 41.0609 40.25 40V16L28.25 4Z"
        stroke={props.color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.25 4V16H40.25"
        stroke={props.color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.25 26H16.25"
        stroke={props.color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.25 34H16.25"
        stroke={props.color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.25 18H18.25H16.25"
        stroke={props.color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FileIcon;
