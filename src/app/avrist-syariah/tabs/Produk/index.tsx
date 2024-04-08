import React from 'react';

import ProdukCard from '@/assets/images/avrast/avrist-syariah/about.svg';

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
            buttonTitle={['Via Online', 'Via Bank', 'Via Tenaga Pemasaran']}
            buttonClassname="accent-syariah_green_informing border-syariah_green_informing"
            buttonTextClassname="text-syariah_green"
          />
        </div>
        <div className="w-1/2">
          <SearchBar
            placeholder="Cari Produk"
            searchButtonTitle="Cari"
            searchButtonClassname="bg-syariah_green_informing text-white"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[24px]">
        {[...Array(6)].map((_, index) => (
          <CardProduct
            key={index}
            symbol={ProdukCard}
            title="Avrist Syariah"
            summary="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet consectetur purus tortor praesent feugiat ultricies aliquam lacinia pretium potenti."
            tags={['Avrist Syariah', 'Premi Tetap', 'Premi Berkala']}
            cardClassname="bg-white border-b-syariah_green"
            cardTitleClassname="text-syariah_green"
            cardTagsClassname="bg-syariah_green/[.2] text-syariah_green_informing"
            cardButtonClassname="bg-syariah_green_informing text-white"
            href={`/avrist-syariah/produk/produk-syariah-` + index}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 sm:flex-row justify-between">
        <div>
          <p className="text-[20px]">
            Menampilkan{' '}
            <span className="font-bold text-syariah_green_informing">1-9</span>{' '}
            dari <span className="font-bold">20</span> hasil
          </p>
        </div>
        <div className="flex flex-row gap-[8px] items-center">
          <p className="text-[20px] text-syariah_green_informing font-bold">
            1
          </p>
          <p className="text-[20px]">2</p>
          <p className="text-[20px]">3</p>
          <p className="text-[20px]">4</p>
          <Icon name="chevronRight" color="syariah_green_informing" />
        </div>
      </div>
    </div>
  );
};

export default Produk;
