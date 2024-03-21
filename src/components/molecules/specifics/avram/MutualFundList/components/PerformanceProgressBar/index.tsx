import React from 'react';

import styles from './styles.module.css';

type PerformanceProgressBarProps = {
  // Number in here range from 0 and 1
  value: number;
};

const HIGH_THRESHOLD = 0.7;
const MID_THRESHOLD = 0.4;

const determineThreshold = (target: number) => {
  if (target >= HIGH_THRESHOLD) {
    return 'high';
  } else if (target < HIGH_THRESHOLD && target >= MID_THRESHOLD) {
    return 'mid';
  }
  return 'low';
};

const PerformanceProgressBar: React.FC<PerformanceProgressBarProps> = ({
  value
}) => {
  const toPercentage = (target: number) => {
    return target * 100;
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">Rendah</span>
      <progress
        data-progress-color={determineThreshold(value)}
        className={`${styles['progress-bar']} w-[5rem] sm:w-[10rem]`}
        value={value}
        max={1}
      >
        {toPercentage(value)}
      </progress>
      <span className="text-sm">Tinggi</span>
    </div>
  );
};

export default PerformanceProgressBar;
