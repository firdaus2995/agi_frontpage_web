import React from 'react';
import { IIcon } from '@/components/atoms/Icon';

const LinkedinIcon: React.FC<IIcon> = ({
  width = 23,
  height = 24,
  color = 'white'
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1329_3531)">
        <path
          d="M5.22269 23V8.15664H0.292814V23H5.22269ZM2.75839 6.12882C4.47753 6.12882 5.54761 4.98902 5.54761 3.56465C5.51558 2.10816 4.47759 1 2.79101 1C1.1047 1 0.00195312 2.10818 0.00195312 3.56465C0.00195312 4.98908 1.07177 6.12882 2.72621 6.12882H2.75824H2.75839ZM7.95137 23H12.8813V14.7108C12.8813 14.2671 12.9133 13.824 13.0435 13.5068C13.3999 12.6205 14.211 11.7024 15.5729 11.7024C17.3568 11.7024 18.0704 13.0636 18.0704 15.059V22.9999H23V14.4889C23 9.92956 20.5679 7.80816 17.3243 7.80816C14.6648 7.80816 13.4972 9.29585 12.8485 10.3091H12.8814V8.15634H7.95148C8.01618 9.54916 7.95148 22.9997 7.95148 22.9997L7.95137 23Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1329_3531">
          <rect
            width="23"
            height="22"
            fill="white"
            transform="translate(0 1)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LinkedinIcon;
