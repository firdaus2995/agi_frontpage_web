import React from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../tailwind.config';

import mapIcon, { IconsList } from './mapIcon';

export interface IIcon {
  name: IconsList;
  width?: number;
  height?: number;
  color?: string;
  isSquare?: boolean;
}

const Icon = ({
  name,
  width = 20,
  height = 20,
  color = 'black',
  isSquare
}: IIcon) => {
  const colorConfig = resolveConfig(tailwindConfig).theme?.colors;
  const currentColor: string = colorConfig
    ? (colorConfig[color as keyof typeof colorConfig] as string)
    : color;

  return (
    mapIcon({
      name,
      width,
      height: isSquare ? width : height,
      color: currentColor
    }) ?? <p style={{ color: 'red' }}>ICON_ERROR</p>
  );
};

export default Icon;
