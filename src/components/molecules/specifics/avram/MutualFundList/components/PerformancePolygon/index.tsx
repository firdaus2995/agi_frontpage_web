import React from 'react';
import Icon from '@/components/atoms/Icon';

type PerformancePolygonProps = {
  type: 'high' | 'mid' | 'low';
};

const PerformancePolygon: React.FC<PerformancePolygonProps> = ({ type }) => {
  const DIMENSION = 10;

  switch (type) {
    case 'high':
      return (
        <Icon
          width={DIMENSION}
          height={DIMENSION}
          name="polygon"
          color="green_approval"
        />
      );
    case 'mid':
      return (
        <span className="rotate-90">
          <Icon
            width={DIMENSION}
            height={DIMENSION}
            name="polygon"
            color="yellow_warning"
          />
        </span>
      );
    case 'low':
      return (
        <Icon
          width={DIMENSION}
          height={DIMENSION}
          name="polygon"
          color="red_error"
        />
      );
    default:
      return <></>;
  }
};

export default PerformancePolygon;
