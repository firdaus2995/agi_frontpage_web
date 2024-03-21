'use client';

import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import TabHeader, { ItemType } from '../../../../TabHeader';

type CustomerFundTabsProps = {
  items: ItemType[];
  tab: string;
};

const CustomerFundTabs: React.FC<CustomerFundTabsProps> = ({ items, tab }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleTabHeaderClick = (newTarget: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('tab', newTarget);
    router.push(`${pathname}?${params}`);
  };

  return (
    <TabHeader
      handleTabHeaderClick={handleTabHeaderClick}
      items={items}
      category={tab}
    />
  );
};

export default CustomerFundTabs;
