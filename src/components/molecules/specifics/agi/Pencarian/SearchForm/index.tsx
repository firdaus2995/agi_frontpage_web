'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import SearchBox from '../../SearchBox';
import SliderComponent from '../../Slider';
import NEWS_DATA from './dummy.json';
import NewsCard from './NewsCard';
import Pagination from './Pagination';
import Button from '@/components/atoms/Button/Button';

const SearchForm = () => {
  const [selectedTab, setSelectedTab] = useState({
    title: 'Semua',
    slug: 'Produk-Avras'
  });

  const tabs = useMemo(
    () => [
      {
        title: 'Semua',
        slug: 'Produk-Avras'
      },
      {
        title: 'Produk',
        slug: 'Produk-Avras'
      },
      {
        title: 'Klaim',
        slug: 'Berita-dan-Kegiatan-Detail'
      },
      {
        title: 'Berita Pers',
        slug: 'Bulletin-AvriStory'
      },
      {
        title: 'Tanya AvGen',
        slug: 'List-Avrist-Life-Guide'
      }
    ],
    []
  );
  return (
    <div className="w-full flex flex-col xs:-mt-[3.4rem]">
      <div className="lg:px-[8.5rem] lg:pt-0 pb-[28px] lg:pb-[5rem] xs:pt-[50px] xs:px-[2.25rem] bg-white rounded-t-[3.75rem] flex flex-col lg:gap-[3rem] xs:gap-[2.25rem]">
        <SearchBox onSearch={() => {}} />

        <div className="px-3 hidden lg:grid grid-cols-5 gap-x-4">
          <Button title={'Semua'} onClick={() => {}} />
          <Button title={'Produk'} onClick={() => {}} />
          <Button title={'Klaim'} onClick={() => {}} />
          <Button title={'Berita Pers'} onClick={() => {}} />
          <Button title={'Tanya AvGen'} onClick={() => {}} />
        </div>
        <div className="md:hidden">
          <SliderComponent
            selected={selectedTab.title}
            slideItems={tabs}
            onClickItem={(item) => {
              const { title, slug } = item;
              setSelectedTab({
                title,
                slug
              });
            }}
            customLabel="title"
          />
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
