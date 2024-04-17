'use client';

import React from 'react';
import Link from 'next/link';
import SearchBox from '../../SearchBox';
import NEWS_DATA from './dummy.json';
import NewsCard from './NewsCard';
import Pagination from './Pagination';
import Button from '@/components/atoms/Button/Button';

const SearchForm = () => {
  return (
    <div className="bg-purple_dark w-full flex flex-col -mt-[1px]">
      <div className="sm:px-10 md:px-40 2xl:px-96 pt-12 bg-white rounded-t-[80px] flex flex-col gap-6">
        <SearchBox onSearch={() => {}} />

        <div className="px-3 grid grid-cols-5 gap-x-4">
          <Button title={'Semua'} onClick={() => {}} />
          <Button title={'Produk'} onClick={() => {}} />
          <Button title={'Klaim'} onClick={() => {}} />
          <Button title={'Berita Pers'} onClick={() => {}} />
          <Button title={'Tanya AvGen'} onClick={() => {}} />
        </div>
        <div className="flex flex-col gap-3">
          {NEWS_DATA.data.map((item, index) => (
            <Link href="" key={index}>
              <NewsCard
                label={item.label}
                date={item.date}
                title={item.title}
                description={item.description}
                tags={item.tags}
              />
            </Link>
          ))}
        </div>

        <Pagination />
      </div>
    </div>
  );
};

export default SearchForm;
