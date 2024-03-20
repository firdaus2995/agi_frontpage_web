'use client';

import React from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import PaginationButton from './components/PaginationButton';

type PaginationProps = {
  perPage: number;
  totalItem: number;
  hasNext: boolean;
  hasPrev: boolean;
};

export type GoToPageParams = 'next' | 'prev' | number;

const PAGINATION_MAX_DISPLAY = 5;
const WINGS = PAGINATION_MAX_DISPLAY - Math.round(PAGINATION_MAX_DISPLAY / 2);

const Pagination: React.FC<PaginationProps> = ({
  perPage,
  totalItem,
  hasNext,
  hasPrev
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentPage = (() => {
    const result = searchParams.get('page') ?? '1';
    try {
      return parseInt(result);
    } catch (err) {
      console.error(err);
      return 1;
    }
  })();
  const lastPage = (() => {
    try {
      return Math.ceil(totalItem / perPage);
    } catch (err) {
      console.error(err);
      return 2;
    }
  })();

  let numberOfPages = 0;
  try {
    numberOfPages = Math.ceil(totalItem / perPage);
  } catch (err) {
    console.error(err);
  }

  const goToPage = (target: GoToPageParams) => {
    const params = new URLSearchParams(searchParams);
    if (typeof target === 'number') {
      params.set('page', target.toString());
      router.push(`${pathname}?${params.toString()}`);
      return;
    }

    if (target === 'next') {
      params.set('page', (currentPage + 1).toString());
    } else {
      params.set('page', (currentPage - 1).toString());
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  if (totalItem === 0) return <></>;

  const generateArray = (start: number, end: number) => {
    if (start > end) return [];

    const temp = [];
    for (let index = start; index <= end; index++) {
      temp.push(index);
    }
    return temp;
  };

  const {
    data: paginationArray,
    showDotAtStart,
    showDotAtEnd
  } = ((): {
    data: number[];
    showDotAtStart: boolean;
    showDotAtEnd: boolean;
  } => {
    if (numberOfPages <= 2) {
      return { data: [], showDotAtStart: false, showDotAtEnd: false };
    }

    if (numberOfPages <= PAGINATION_MAX_DISPLAY) {
      return {
        data: generateArray(2, numberOfPages - 1),
        showDotAtStart: false,
        showDotAtEnd: false
      };
    }

    if (currentPage - WINGS - 1 <= 0) {
      return {
        data: generateArray(2, PAGINATION_MAX_DISPLAY),
        showDotAtStart: false,
        showDotAtEnd: true
      };
    } else if (currentPage + WINGS + 1 >= lastPage) {
      return {
        data: generateArray(
          lastPage - PAGINATION_MAX_DISPLAY + 1,
          lastPage - 1
        ),
        showDotAtStart: true,
        showDotAtEnd: false
      };
    }

    const temp = [];
    for (
      let index = currentPage - WINGS;
      index <= currentPage + WINGS;
      index++
    ) {
      temp.push(index);
    }

    return {
      data: temp,
      showDotAtStart: true,
      showDotAtEnd: true
    };
  })();

  return (
    <div className="flex items-stretch flex-wrap gap-1">
      {hasPrev && <PaginationButton onClick={goToPage} page={'prev'} />}

      <PaginationButton
        onClick={goToPage}
        page={1}
        isActive={currentPage === 1}
      />
      {showDotAtStart && <span>...</span>}
      {paginationArray.map((benchmark, index) => {
        return (
          <PaginationButton
            onClick={() => goToPage(benchmark)}
            page={benchmark}
            key={index}
            isActive={currentPage === benchmark}
          />
        );
      })}
      {numberOfPages > 1 && (
        <>
          {showDotAtEnd && <span>...</span>}
          <PaginationButton
            onClick={goToPage}
            page={lastPage}
            isActive={currentPage === lastPage}
          />
        </>
      )}

      {hasNext && <PaginationButton onClick={goToPage} page={'next'} />}
    </div>
  );
};

export default Pagination;
