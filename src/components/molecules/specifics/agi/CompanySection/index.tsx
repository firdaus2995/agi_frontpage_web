'use client';

import React from 'react';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CHEVRONRIGHTGRAY from '@/assets/images/agi/component/product-section/chevron-right-gray.svg';
import CHEVRONRIGHTGREEN from '@/assets/images/agi/component/product-section/chevron-right-green.svg';
import CHEVRONRIGHTPURPLE from '@/assets/images/agi/component/product-section/chevron-right-purple.svg';
import ICON1PRODUCT1 from '@/assets/images/agi/component/product-section/icon-1-product-1.svg';
import ICON1PRODUCT2 from '@/assets/images/agi/component/product-section/icon-1-product-2.svg';
import ICON1PRODUCT3 from '@/assets/images/agi/component/product-section/icon-1-product-3.svg';
import ICON2PRODUCT1 from '@/assets/images/agi/component/product-section/icon-2-product-1.svg';
import ICON2PRODUCT2 from '@/assets/images/agi/component/product-section/icon-2-product-2.svg';
import ICON2PRODUCT3 from '@/assets/images/agi/component/product-section/icon-2-product-3.svg';
import PRODUCTIMG1 from '@/assets/images/agi/component/product-section/product-1-img.svg';
import PRODUCTIMG2 from '@/assets/images/agi/component/product-section/product-2-img.svg';
import PRODUCTIMG3 from '@/assets/images/agi/component/product-section/product-3-img.svg';
import Button from '@/components/atoms/Button/Button';

const data = [
  {
    category: 'Avrist Life Insurance',
    icon1: ICON1PRODUCT1,
    icon2: ICON2PRODUCT1,
    title1: 'Integritas.',
    title2: '1000+ Rekanan di Indonesia',
    link1: 'Penghargaan',
    link2: 'Rumah Sakit Rekanan',
    linkIcon: CHEVRONRIGHTPURPLE,
    img: PRODUCTIMG1
  },
  {
    category: 'Avrist Asset Management',
    icon1: ICON1PRODUCT2,
    icon2: ICON2PRODUCT2,
    title1: 'Inovasi Solusi.',
    title2: 'Investasi dengan Tim Profesional',
    link1: 'Penghargaan',
    link2: 'Tentang Kami',
    linkIcon: CHEVRONRIGHTGREEN,
    img: PRODUCTIMG2
  },
  {
    category: 'Avrist General Insurance',
    icon1: ICON1PRODUCT3,
    icon2: ICON2PRODUCT3,
    title1: 'Dinamis progresif.',
    title2: 'Efektif, terpercaya dan transparan ',
    link1: 'Penghargaan',
    link2: 'Tentang Kami',
    linkIcon: CHEVRONRIGHTGRAY,
    img: PRODUCTIMG3
  }
];

const CompanySection = () => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    arrows: false,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const renderCard = (val: {
    category: string;
    icon1: StaticImport;
    icon2: StaticImport;
    title1: string;
    title2: string;
    link1: string;
    link2: string;
    linkIcon: StaticImport;
    img: StaticImport;
  }) => {
    return (
      <div
        className={`w-full md:h-[40vh] xs:h-[65vh] flex mb-10 md:flex-row xs:flex-col gap-4 rounded-xl bg-white items-center justify-center text-center shadow-xl`}
      >
        <div
          className={`md:w-1/2 xs:w-full p-5 flex h-full flex-col items-start justify-center gap-5`}
        >
          <p className="text-[28px] text-left text-purple_dark">Penghargaan</p>
          <p className="text-[50px] text-left text-purple_dark">
            <span className="font-bold text-purple_dark">Best Insurance</span>{' '}
            Award Media Asuransi 2022
          </p>
          <Button
            title="Berita Pers"
            customButtonClass="bg-purple_dark"
            customTextClass="text-white"
          />
        </div>
        <div
          className={`md:w-1/2 xs:w-full h-full md:rounded-r-xl xs:rounded-b-xl flex flex-col items-end justify-end overflow-hidden`}
        >
          <Image
            src={val.img}
            alt={val.category}
            className="w-full md:rounded-r-xl xs:rounded-b-xl"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col self-stretch items-center justify-center py-32 gap-16 bg-purple_dark">
      <div>
        <p className="md:text-5xl xs:text-3xl text-center font-bold text-white px-10">
          Mengapa Avrist General Insurance?
        </p>
        <p className="md:text-4xl xs:text-2xl text-white text-center px-10">
          Berkembang dengan{' '}
          <span className="font-bold">solusi yang inovatif</span>
        </p>
      </div>
      <div className="w-full grid grid-cols-1  gap-4">
        <Slider {...sliderSettings}>
          {data.map((val, idx) => (
            <div key={idx}>{renderCard(val)}</div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CompanySection;
