'use client';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import BannerImg from '@/assets/images/banner-img.svg';

interface IDetailHeader {
  title: string;
}

const DetailHeader: React.FC<IDetailHeader> = ({ title }) => {
  return (
    <div className="flex w-full">
      <div className="w-full h-[200px] bg-purple_dark shadow-lg flex md:items-center xs:items-start justify-center relative">
        <Image
          className="bg-purple_dark md:w-[25%] xs:w-full absolute bottom-0"
          src={BannerImg}
          alt="banner-img"
        />
        <div className="w-full h-full mx-auto max-w-[100rem] px-8 flex md:justify-between justify-center md:items-center items-start absolute flex-col md:flex-row flex-wrap gap-4">
          <h2 className="font-light md:text-[48px] text-[30px] text-white">
            {title}
          </h2>
          <div className="flex flex-row divide-x gap-2 text-center h-5 text-white text-base flex-wrap">
            <p className="md:px-2">Beranda</p>
            <p className="px-2 font-semibold">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHeader;
