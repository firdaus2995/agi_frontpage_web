import React from 'react';

interface ISimpleContainer {
  children: React.ReactNode;
  bgColor?: string;
  gap?: string;
  paddingY?: string;
  paddingX?: string;
  className?: string;
}

const SimpleContainer = ({
  children,
  bgColor = 'white',
  gap,
  paddingY,
  paddingX,
  className
}: ISimpleContainer) => {
  return (
    <div
      className={`${className} flex flex-col justify-center ${paddingX ?? 'px-[2rem] sm:px-[8.5rem]'} ${paddingY ?? 'py-[3.125rem] sm:py-[4.5rem]'} ${gap ?? 'gap-[4rem]'} bg-${bgColor}`}
    >
      {children}
    </div>
  );
};

export default SimpleContainer;
