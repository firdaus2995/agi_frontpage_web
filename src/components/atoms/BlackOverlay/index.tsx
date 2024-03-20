import React from 'react';

type BlackOverlayProps = {
  customClass?: string;
  isVisible: boolean;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'className'>;

const BlackOverlay: React.FC<BlackOverlayProps> = ({
  customClass,
  isVisible,
  ...rest
}) => {
  return (
    <div
      className={`
        bg-black/30 fixed h-screen w-screen -z-50 inset-0 ${customClass ?? ''}
        transition-all
        ${isVisible ? 'visible opacity-100' : 'invisible opacity-0'}
      `}
      {...rest}
    ></div>
  );
};

export default BlackOverlay;
