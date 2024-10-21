'use client';

import React from 'react';
import Image from 'next/image';
import Input from '@/components/atoms/Input';

const SearchTerm = ({
  bannerImage = '',
  bannerImageFit = '',
  onSearch,
  loading,
  onChange,
  value
}: {
  bannerImage?: string;
  bannerImageFit?: string;
  onSearch: any;
  loading: boolean;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  // const isBrowser = typeof window !== 'undefined';
  // const width = isBrowser ? window.innerWidth : 0;
  return (
    <div className="z-10 w-full bg-purple_dark -mt-[4rem] lg:-mt-[6.5rem] relative">
      <div className="w-full h-[20rem] lg:h-[50vh] z-10 flex items-center absolute">
        <div className="w-full h-full grid lg:grid-cols-2 xs:grid-cols-1">
          <span />
          <div className="flex flex-col xs:justify-center lg:gap-1 xs:px-[36px] lg:px-0 lg:pb-0 xs:pb-[4rem]">
            <div>
              <p className="font-karla text-[20px] lg:text-[48px] font-extrabold text-white text-shadow-h1 lg:leading-[57.6px] tracking-[0.03em]">
                Halo, apa kabar?
              </p>
              <p className="font-karla text-[20px] lg:text-[48px] text-white text-shadow-h1 lg:leading-[57.6px] tracking-[0.03em]">
                Ada yang AvGen bisa bantu?
              </p>
            </div>
            <div className="w-full lg:mt-2 mt-6">
              <Input
                customInputClass="lg:w-[60%] 2xl:w-[72%] grow !bg-gray_bglightgray !border-none"
                placeholder="Ketik kata kunci (misal: promosi berlangsung)"
                onChange={onChange}
                value={loading ? 'Loading data...' : value}
                onKeyDown={(e: any) => {
                  if (e.key === 'Enter' || e.keyCode === 13) {
                    onSearch('List-Pertanyaan-dan-Jawaban-Tanya-Avgen', value);
                  }
                }}
                disabled={loading}
              />
            </div>
          </div>
        </div>
      </div>
      {/* {bannerImage && (
        <div className="w-full h-[320px] lg:h-[380px] relative">
          <Image
            // ref={bannerRef}
            className={`w-full h-full ${bannerImageFit === 'proportional_full' ? 'object-fill' : 'object-cover'}`}
            alt="gambar-produk-individu"
            // fill={width > 1024 && bannerImageFit === 'proportional_crop' || bannerImageFit === 'proportional_full' }
            width={0}
            height={0}
            src={bannerImage}
            priority
          />
        </div>
      )} */}
      {bannerImage !== '' && (
        <Image
          className={`w-full xs:object-right lg:object-center h-[320px] lg:h-[50vh] ${bannerImageFit === 'proportional_full' ? 'object-fill' : 'object-cover'}`}
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
