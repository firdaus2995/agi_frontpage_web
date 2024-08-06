'use client';

import React from 'react';
import Image from 'next/image';
import Input from '@/components/atoms/Input';

const SearchTerm = ({
  bannerImage = '',
  onSearch,
  loading,
  onChange,
  value
}: {
  bannerImage?: string;
  onSearch: any;
  loading: boolean;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="z-10 w-full bg-purple_dark -mt-[4rem] lg:-mt-[6.5rem] relative">
      <div className="w-full h-[20rem] md:h-[40rem] z-10 flex items-center absolute">
        <div className="w-full h-full grid sm:grid-cols-2 xs:grid-cols-1">
          <span />
          <div className="flex flex-col xs:justify-center sm:gap-1 xs:gap-[36px] xs:px-[36px] sm:px-0 sm:pb-0 xs:pb-[4rem]">
            <div>
              <p className="font-karla text-[20px] lg:text-[48px] font-extrabold text-white text-shadow-h1 sm:leading-[57.6px] tracking-[0.03em]">
                Halo, apa kabar?
              </p>
              <p className="font-karla text-[20px] lg:text-[48px] text-white text-shadow-h1 sm:leading-[57.6px] tracking-[0.03em]">
                Ada yang AvGen bisa bantu?
              </p>
            </div>
            <div className="w-full sm:mt-2 mt-6">
              <Input
                customInputClass="md:w-[60%] 2xl:w-[72%] grow !bg-gray_bglightgray !border-none"
                placeholder="Ketik kata kunci (misal: promosi berlangsung)"
                onChange={onChange}
                value={loading ? 'Loading data...' : value}
                onKeyDown={(e: any) => {
                  if (e.key === 'Enter' || e.keyCode === 13) {
                    onSearch(
                      'List-Pertanyaan-dan-Jawaban-Tanya-Avgen',
                      value);
                  }
                }}
                disabled={loading}
              />
            </div>
          </div>
        </div>
      </div>
      {bannerImage !== '' && (
        <Image
          className="w-full sm:object-cover xs:object-none xs:object-right sm:object-center h-[320px] lg:h-[50vh]"
          alt="gambar-produk-individu"
          src={bannerImage}
          width={0}
          height={0}
        />
      )}
    </div>
  );
};

export default SearchTerm;
