import React from 'react';

type TriangleMarkerProps = {
  customClass?: string;
};

const TriangleMarker: React.FC<
  Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className'> &
    TriangleMarkerProps
> = ({ customClass, ...rest }) => {
  return (
    <div
      className={`aspect-square bg-white w-4 ${customClass ?? ''}`}
      style={{ clipPath: 'polygon(50% 0, 0 100%, 100% 100%)' }}
      {...rest}
    ></div>
  );
};

export default TriangleMarker;
