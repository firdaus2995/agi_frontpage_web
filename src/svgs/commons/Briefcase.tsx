import React from 'react';

import { IIcon } from '@/components/atoms/Icon';

const Briefcase: React.FC<IIcon> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 7.5H4C2.89543 7.5 2 8.39543 2 9.5V19.5C2 20.6046 2.89543 21.5 4 21.5H20C21.1046 21.5 22 20.6046 22 19.5V9.5C22 8.39543 21.1046 7.5 20 7.5Z"
        stroke={props.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 21.5V5.5C16 4.96957 15.7893 4.46086 15.4142 4.08579C15.0391 3.71071 14.5304 3.5 14 3.5H10C9.46957 3.5 8.96086 3.71071 8.58579 4.08579C8.21071 4.46086 8 4.96957 8 5.5V21.5"
        stroke={props.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Briefcase;
