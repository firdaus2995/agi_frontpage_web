import React from 'react';

type IconWrapperProps = {
  children: React.ReactNode;
};

const IconWrapper: React.FC<IconWrapperProps> = ({ children }) => {
  return (
    <div className="p-2 rounded-md bg-purple_verydark cursor-pointer">
      {children}
    </div>
  );
};

export default IconWrapper;
