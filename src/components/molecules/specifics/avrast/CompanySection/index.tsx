'use client';

import React from 'react';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CHEVRONRIGHTGRAY from '@/assets/images/avrast/component/product-section/chevron-right-gray.svg';
import CHEVRONRIGHTGREEN from '@/assets/images/avrast/component/product-section/chevron-right-green.svg';
import CHEVRONRIGHTPURPLE from '@/assets/images/avrast/component/product-section/chevron-right-purple.svg';
import ICON1PRODUCT1 from '@/assets/images/avrast/component/product-section/icon-1-product-1.svg';
import ICON1PRODUCT2 from '@/assets/images/avrast/component/product-section/icon-1-product-2.svg';
import ICON1PRODUCT3 from '@/assets/images/avrast/component/product-section/icon-1-product-3.svg';
import ICON2PRODUCT1 from '@/assets/images/avrast/component/product-section/icon-2-product-1.svg';
import ICON2PRODUCT2 from '@/assets/images/avrast/component/product-section/icon-2-product-2.svg';
import ICON2PRODUCT3 from '@/assets/images/avrast/component/product-section/icon-2-product-3.svg';
import PRODUCTIMG1 from '@/assets/images/avrast/component/product-section/product-1-img.svg';
import PRODUCTIMG2 from '@/assets/images/avrast/component/product-section/product-2-img.svg';
import PRODUCTIMG3 from '@/assets/images/avrast/component/product-section/product-3-img.svg';

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
    let color: string;
    let textColor: string;

    if (val.category === 'Avrist Life Insurance') {
      color = 'avrast_product_bg';
      textColor = 'avrast_product_text';
    } else if (val.category === 'Avrist Asset Management') {
      color = 'avram_green';
      textColor = 'avram_product_text';
    } else {
      color = 'agi_grey';
      textColor = 'agi_product_text';
    }

    return (
      <div
        className={`w-full md:h-[40vh] xs:h-[65vh] flex mb-10 md:flex-row xs:flex-col gap-4 rounded-xl bg-${color} items-center justify-center text-center shadow-xl`}
      >
        <div
          className={`md:w-1/2 xs:w-full p-5 flex h-full flex-col items-start justify-center gap-10 text-white`}
        >
          <p className="md:text-5xl xs:text-2xl font-black text-left">
            {val.category}
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2 flex-wrap">
              <Image
                src={val.icon1}
                alt={val.title1}
                className="xs:w-7 md:w-15"
              />
              <p className="md:text-xl xs:text-xs font-semibold">
                {val.title1}
              </p>
              <div role="button" className="flex flex-row items-center gap-1">
                <p
                  className={`font-semibold md:text-xl xs:text-xs text-${textColor}`}
                >
                  {val.link1}
                </p>
                <Image src={val.linkIcon} alt={val.link1} className="w-4" />
              </div>
            </div>
            <div className="flex flex-row items-center gap-2 flex-wrap">
              <Image
                src={val.icon2}
                alt={val.title2}
                className="xs:w-7 md:w-15"
              />
              <p className="md:text-xl xs:text-xs font-semibold">
                {val.title2}
              </p>
              <div role="button" className="flex flex-row items-center gap-1">
                <p
                  className={`font-semibold md:text-xl xs:text-xs text-${textColor}`}
                >
                  {val.link2}
                </p>
                <Image src={val.linkIcon} alt={val.link2} className="w-4" />
              </div>
            </div>
          </div>
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
    <div className="flex flex-col self-stretch items-center justify-center py-32 gap-16 bg-purple_light_bg">
      <div>
        <p className="md:text-5xl xs:text-3xl text-center font-bold text-purple_dark px-10">
          Mengapa Memilih Avrist?
        </p>
        <p className="md:text-4xl xs:text-2xl text-gray_black_dark text-center px-10">
          Satu Polis untuk setiap rumah tangga di Indonesia
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
