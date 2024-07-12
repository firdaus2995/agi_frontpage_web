import React from 'react';

interface ICustomContainer {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CustomContainer = ({
  children,
  className,
  onClick
}: ICustomContainer) => {
  return (
    <div
      className={`w-full xs:px-[2rem] sm:px-[8.5rem] ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default CustomContainer;
