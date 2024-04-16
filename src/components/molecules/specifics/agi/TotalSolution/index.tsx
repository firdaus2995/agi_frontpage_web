'use client';

import React, { useRef } from 'react';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ARROW_LEFT from '@/assets/images/agi/component/total-solution/arrow-left.svg';
import ARROW_RIGHT from '@/assets/images/agi/component/total-solution/arrow-right.svg';
import AGI1 from '@/assets/images/agi/component/total-solution/icon-1.svg';
import AGI2 from '@/assets/images/agi/component/total-solution/icon-2.svg';
import AGI3 from '@/assets/images/agi/component/total-solution/icon-3.svg';
import AGI4 from '@/assets/images/agi/component/total-solution/icon-4.svg';
import AGI5 from '@/assets/images/agi/component/total-solution/icon-5.svg';
import AGI6 from '@/assets/images/agi/component/total-solution/icon-6.svg';
import Button from '@/components/atoms/Button/Button';

const data = [
  {
    icon: AGI1,
    title: 'Asuransi Jiwa Individu',
    content:
      'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies.',
    btnText: 'Lihat Produk'
  },

  {
    icon: AGI2,
    title: 'Asuransi Properti',
    content:
      'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies.',
    btnText: 'Lihat Produk'
  },

  {
    icon: AGI3,
    title: 'Reksa Dana',
    content:
      'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies.',
    btnText: 'Lihat Produk'
  },
  {
    icon: AGI4,
    title: 'Asuransi Jiwa Korporasi',
    content:
      'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies.',
    btnText: 'Lihat Produk'
  },

  {
    icon: AGI5,
    title: 'Asuransi Kendaraan',
    content:
      'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies.',
    btnText: 'Lihat Produk'
  },
  {
    icon: AGI6,
    title: 'Jasa Investasi',
    content:
      'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies.',
    btnText: 'Lihat Produk'
  }
];

const TotalSolution = () => {
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const renderCard = (
    val: {
      category?: string;
      icon: StaticImport;
      title?: string;
      content?: string;
      btnText?: string;
    }
  ) => (
    <div
      className={`w-96 flex flex-col gap-4 rounded-xl bg-white items-center justify-center text-center shadow-xl`}
    >
      <div className="p-5 flex flex-col items-center justify-center gap-4 pb-10">
        <Image alt="loop-image" src={val.icon} />
        <p className="font-bold text-2xl">{val.title}</p>
        <p>{val.content}</p>
        <Button
          title={val.btnText}
        />
      </div>
        <div
          className={`w-full bg-purple_dark text-sm font-semibold p-1 text-white rounded-b-xl`}
        ></div>
    </div>
  );

  const renderMobileCard = (val: {
    category?: string;
    icon: StaticImport;
    title?: string;
    content?: string;
    btnText?: string;
  }) => (
    <div
      className={`w-84 mb-10 flex flex-col gap-4 rounded-xl bg-white items-center justify-center text-center shadow-xl`}
    >
      <div
        className={`w-full bg-white text-sm font-semibold p-2 text-white rounded-t-xl`}
      >
        {val.category}
      </div>
      <div className="p-5 flex flex-col items-center justify-center gap-4 pb-10">
        <Image alt="loop-image" src={val.icon} />
        <p className="font-bold text-2xl">{val.title}</p>
        <p>{val.content}</p>
        <Button
          title={val.btnText}
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col self-stretch items-center justify-center py-32 px-20 gap-16 bg-white rounded-b-[65px] relative">
      <div>
        <p className="md:text-5xl xs:text-3xl text-center font-bold text-purple_dark">
          Kami memberi kemudahan untuk Anda
        </p>
        <p className="md:text-4xl xs:text-2xl text-gray_black_dark text-center">
          Beragam <span className="font-bold">produk unggulan</span>{' '}
          perlindungan Kami
        </p>
      </div>
      <div className="lg:hidden" style={{ width: '90vw' }}>
        <Slider
          ref={(slider) => {
            sliderRef.current = slider;
          }}
          {...sliderSettings}
        >
          {data.map((val, idx) => (
            <div key={idx}>{renderMobileCard(val)}</div>
          ))}
        </Slider>
        <div className="flex flex-row gap-4">
          <Image alt="prev" src={ARROW_LEFT} role="button" onClick={previous} />
          <Image alt="next" src={ARROW_RIGHT} role="button" onClick={next} />
        </div>
      </div>
      <div className="xs:max-lg:hidden grid grid-cols-3 gap-4">
        {data.map((val, idx) => (
          <div key={idx}>{renderCard(val)}</div>
        ))}
      </div>
      <div className="w-full absolute z-20 bottom-2 h-20 bg-white rounded-b-[65px]"></div>
      <div className="w-full flex flex-row absolute z-10 bottom-0 h-20 rounded-b-[65px]">
        <div className="w-1/5 h-full bg-green_border rounded-bl-[65px]"></div>
        <div className="w-1/5 h-full bg-orange_border"></div>
        <div className="w-1/5 h-full bg-purple_dark"></div>
        <div className="w-1/5 h-full bg-agi_grey"></div>
        <div className="w-1/5 h-full bg-avram_green rounded-br-[65px]"></div>
      </div>
    </div>
  );
};

export default TotalSolution;
