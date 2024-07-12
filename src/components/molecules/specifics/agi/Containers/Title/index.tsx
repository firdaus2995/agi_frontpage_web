import React from 'react';

interface ITitleContainer {
  children: React.ReactNode;
  className?: string;
}

const TitleContainer = ({ children, className }: ITitleContainer) => {
  return (
    <div
      className={`mb-[2rem] xs:-tracking-[1.44px] sm:-tracking-[2.56px] font-karla md:text-5xl xs:text-3xl font-bold ${className}`}
    >
      {children}
    </div>
  );
};

export default TitleContainer;
