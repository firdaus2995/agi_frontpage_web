'use client';

import React, { useState } from 'react';
import Icon from '@/components/atoms/Icon';
import { PageInfo } from '@/types/provider.type';

type Props = {
  className?: string;
  dataPage: PageInfo,
  onChangePage: (pageNumber: number) => void; 
};
export const Paginate = (props: Props) => {
  const { className, dataPage, onChangePage } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const renderPageNumbers = () => {
    const { totalPage } = dataPage;
    const pageNumbers = [];
    const pageCountToShow = 5;

    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(totalPage, pageCountToShow);
    }

    if (endPage > totalPage) {
      endPage = totalPage;
      startPage = Math.max(1, totalPage - pageCountToShow + 1);
    }

    for (let pageIndex = startPage; pageIndex <= endPage; pageIndex++) {

      if (pageIndex === dataPage.pagePos) {
        pageNumbers.push(
          <span key={pageIndex} className="cursor-pointer font-bold text-purple_dark" onClick={() => onChangePage(pageIndex)}>
            {pageIndex}
          </span>
        );
      }
      else {
        pageNumbers.push(
          <span key={pageIndex} className="cursor-pointer text-xl" onClick={() => handleChangePage(pageIndex)}>
            {pageIndex}
          </span>
        );
      }
      if (pageIndex !== totalPage) {
        pageNumbers.push(' ');
      }
    }

    return pageNumbers;
  };

  const handleChangePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    onChangePage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < dataPage.totalPage) {
      setCurrentPage(currentPage + 1);
      onChangePage(currentPage + 1);
    }
  };
  
  return (
    <div className={`w-full flex sm:flex-row xs:flex-col gap-4 justify-between ${className}`}>
      <p className="text-xl">
        Menampilkan <span className="font-bold text-purple_dark">1-{dataPage.pageSize}</span> dari{' '}
        <span className="font-bold">{dataPage?.totalData}</span> hasil
      </p>
      <div className="flex flex-row gap-2 items-center">
        <p className="text-xl">
          {renderPageNumbers()} ...{' '}
            <span className={`cursor-pointer font-bold ${dataPage.pagePos === dataPage.totalPage ? 'text-purple_dark' : ''}`} onClick={() => onChangePage(dataPage.totalPage)}>
              {dataPage.totalPage}
            </span>
          </p>
          <div onClick={handleNextPage} className='cursor-pointer'>
            <Icon width={20} height={20} name="chevronRight" color="purple_dark"/>
          </div>
      </div>
    </div>
  );
};
