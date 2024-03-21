'use client';

import React from 'react';
import Icon from '@/components/atoms/Icon';

const Pagination = () => {
  return (
    <div className="w-full px-4 flex flex-row justify-between">
      <p className="text-xl">
        Menampilkan <span className="font-bold text-purple_dark">1-5</span> dari{' '}
        <span className="font-bold">50</span> hasil
      </p>
      <div className="flex flex-row gap-2 items-center">
        <p className="text-xl">
          <span className="font-bold text-purple_dark">1</span> 2 3 4 5 ... 10{' '}
        </p>
        <Icon width={20} height={20} name="chevronRight" color="purple_dark" />
      </div>
    </div>
  );
};

export default Pagination;
