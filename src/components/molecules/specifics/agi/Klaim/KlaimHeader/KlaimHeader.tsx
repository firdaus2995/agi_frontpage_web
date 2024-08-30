'use client';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import BannerImg from '@/assets/images/agi/component/klaim-header/header-image.svg';

interface IKlaimHeader {
  title: string;
}

const KlaimHeader: React.FC<IKlaimHeader> = ({ title }) => {
  return (
    <div className="flex w-full">
      <div className="w-full lg:h-[300px] xs:h-[200px] bg-purple_dark flex lg:items-center xs:items-start justify-center relative">
        <Image
          className="bg-purple_dark w-full absolute top-0 object-top"
          src={BannerImg}
          alt="banner-img"
          layout="fill"
          objectFit="cover"
          object-position="center"
        />
        <div className="w-full h-full mx-auto max-w-[100rem] px-8 flex lg:justify-between lg:justify-center xs:justify-start lg:items-center items-start absolute flex-col lg:flex-row flex-wrap gap-4">
          <h2 className="font-light text-[48px] lg:block xs:hidden text-white">
            {title}
          </h2>
          <div className="flex flex-row divide-x gap-2 text-center h-5 text-white text-base flex-wrap lg:mt-0 xs:mt-10">
            <p className="lg:px-2">Beranda</p>
            <p className="px-2 font-semibold">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KlaimHeader;
