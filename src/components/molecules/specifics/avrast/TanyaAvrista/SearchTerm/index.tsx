'use client';

import React from 'react';
import Image from 'next/image';
import TANYA_AVRISTA from '@/assets/images/tanya-avrista.svg';
import Input from '@/components/atoms/Input';

const SearchTerm = () => {
  return (
    <div className="z-[1] w-full bg-purple_dark -mt-1">
      <div className="w-full h-[640px] flex items-center absolute">
        <div className="w-full h-full grid grid-cols-2">
          <span />
          <div className="flex flex-col justify-center gap-4 2xl:ml-20">
            <p className="font-karla md:text-4xl 2xl:text-5xl font-bold text-white">
              Halo, apa kabar?
            </p>
            <p className="font-karla md:text-3xl 2xl:text-5xl text-white">
              Ada yang Avrista bisa bantu?
            </p>
            <div className="w-full mt-6">
              <Input
                customInputClass="md:w-[60%] 2xl:w-[72%] grow !bg-gray_bglightgray !border-none"
                placeholder="Ketik kata kunci (misal: promosi berlangsung)"
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        className="rounded-t-[65px] w-full object-cover h-[640px]"
        alt="gambar-produk-individu"
        src={TANYA_AVRISTA}
      />
    </div>
  );
};

export default SearchTerm;
