import React from 'react';
import { DividerPurple, DividerRainbow } from './Divider';

type Props = {
  children: React.ReactNode;
  className?: string;
};
export const CardPurple: React.FC<Props> = (props) => {
  const { children, className } = props;
  return (
    <div
      className={`border rounded-xl border-gray_light overflow-hidden flex flex-col justify-between ${className}`}
    >
      <div>{children}</div>
      <DividerPurple />
    </div>
  );
};

export const Card: React.FC<Props> = (props) => {
  const { children, className } = props;
  return (
    <div
      className={`border rounded-xl border-gray_light overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export const CardRainbow: React.FC<Props> = (props) => {
  const { children, className } = props;
  return (
    <div
      className={`border rounded-xl border-gray_light overflow-hidden flex flex-col justify-between ${className}`}
    >
      <div>{children}</div>
      <DividerRainbow />
    </div>
  );
};
