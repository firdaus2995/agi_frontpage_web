import React from 'react';
import Image from 'next/image';
import Search from '@/assets/images/common/search.svg';

const NotFound = () => {
  return (
    <div className="w-full flex flex-col md:px-52 2xl:px-[345px] mt-8 mb-10 gap-4 items-center justify-center">
      <Image src={Search} alt="search" />
      <div className="flex flex-col gap-4">
        <div className="w-[324px] text-center">
          <p className="font-karla font-bold text-[24px]">Page Not Found</p>
          <p className="font-opensans text-[16px] mt-[12px]">
            Coba sesuaikan pencarian Anda untuk menemukan apa yang Anda cari.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
