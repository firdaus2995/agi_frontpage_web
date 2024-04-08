import React from 'react';

import YellowHome from '@/assets/images/avrast/dplk/yellow-dplk-home-sun.svg';

import Icon from '@/components/atoms/Icon';
import CardProduct from '@/components/molecules/specifics/avrast/Cards/ProductCard';
import CategoryPillsBox from '@/components/molecules/specifics/avrast/CategoryPillsBox';
import SearchBar from '@/components/molecules/specifics/avrast/SearchBar';

const Produk = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex">
        <div className="w-1/2">
          <CategoryPillsBox
            buttonTitle={['Layanan Employer', 'Layanan Employee']}
            buttonClassname="accent-dplk_yellow border-dplk_yellow"
            buttonTextClassname="text-black"
          />
        </div>
        <div className="w-1/2">
          <SearchBar
            placeholder="Cari Produk"
            searchButtonTitle="Cari"
            searchButtonClassname="bg-dplk_yellow text-white"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[24px]">
        {[...Array(6)].map((_, index) => (
          <CardProduct
            key={index}
            symbol={YellowHome}
            title="Avrist DPLK"
            summary="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet consectetur purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti."
            tags={['Avrist DPLK', 'Premi Tetap', 'Premi Berkala']}
            cardClassname="bg-white border-b-dplk_yellow"
            cardTitleClassname="text-dplk_yellow"
            cardTagsClassname="bg-dplk_yellow/[.2] text-dplk_yellow"
            cardButtonClassname="bg-dplk_yellow text-white"
            href={`/avrist-dplk/produk/produk-dplk-` + index}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 sm:flex-row justify-between">
        <div>
          <p className="text-[20px]">
            Menampilkan <span className="font-bold text-dplk_yellow">1-9</span>{' '}
            dari <span className="font-bold">20</span> hasil
          </p>
        </div>
        <div className="flex flex-row gap-[8px] items-center">
          <p className="text-[20px] text-dplk_yellow font-bold">1</p>
          <p className="text-[20px]">2</p>
          <p className="text-[20px]">3</p>
          <p className="text-[20px]">4</p>
          <Icon name="chevronRight" color="dplk_yellow" />
        </div>
      </div>
    </div>
  );
};

export default Produk;
