'use client';

import React from 'react';
import Button from '@/components/atoms/Button/Button';

export type ItemType = {
  title: string;
  value: string;
};

type TabHeaderProps = {
  items: ItemType[];
  category: string;
  handleTabHeaderClick: (value: string) => void;
};

const TabHeader: React.FC<TabHeaderProps> = ({
  items,
  category,
  handleTabHeaderClick
}) => {
  return (
    <div
      className={`flex justify-between gap-2 overflow-auto tab-header-container flex-wrap`}
    >
      {items.map((item, index) => (
        <Button.Radio
          onClick={() => handleTabHeaderClick(item.value)}
          customButtonClass="flex-grow whitespace-nowrap"
          key={index}
          isActive={category === item.value}
        >
          {item.title}
        </Button.Radio>
      ))}
    </div>
  );
};

export default TabHeader;
