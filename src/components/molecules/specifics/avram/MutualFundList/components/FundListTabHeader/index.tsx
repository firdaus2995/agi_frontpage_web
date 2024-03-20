'use client';

import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import TabHeader, { ItemType } from '../../../TabHeader';

type FundListTabHeaderProps = {
  items: ItemType[];
  category: string;
};

const FundListTabHeader: React.FC<FundListTabHeaderProps> = ({
  items,
  category
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleTabHeaderClick = (newTarget: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('cat', newTarget);
    params.set('page', '1');
    router.push(`${pathname}?${params}`);
  };

  return (
    <TabHeader
      items={items}
      category={category}
      handleTabHeaderClick={handleTabHeaderClick}
    />
  );
};

export default FundListTabHeader;
