import React from 'react';

interface IHorizontalDivider {
  color?: string;
}

const HorizontalDivider = ({ color = 'black' }: IHorizontalDivider) => {
  return (
    <div className={`flex self-stretch border-l-[1px] border-l-${color}`} />
  );
};

export default HorizontalDivider;
