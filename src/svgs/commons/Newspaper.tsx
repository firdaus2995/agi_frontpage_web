import React from 'react';

import { IIcon } from '@/components/atoms/Icon';

const Newspaper: React.FC<IIcon> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46.2853 15.4286V37.7143C46.2853 38.8509 45.8338 39.941 45.03 40.7447C44.2263 41.5485 43.1362 42 41.9996 42M41.9996 42C40.8629 42 39.7729 41.5485 38.9691 40.7447C38.1654 39.941 37.7139 38.8509 37.7139 37.7143V7.71429C37.7139 7.25963 37.5333 6.82359 37.2118 6.5021C36.8903 6.18061 36.4542 6 35.9996 6H3.42815C2.9735 6 2.53746 6.18061 2.21597 6.5021C1.89448 6.82359 1.71387 7.25963 1.71387 7.71429V38.5714C1.71387 39.4807 2.07509 40.3528 2.71807 40.9958C3.36105 41.6388 4.23312 42 5.14244 42H41.9996Z"
        stroke={props.color}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 33.4284H27.4286M27.4286 14.5713H12V23.1427H27.4286V14.5713Z"
        stroke={props.color}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Newspaper;
