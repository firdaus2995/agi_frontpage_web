'use client';

import React, { useRef } from 'react';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AGI1 from '@/assets/images/avrast/component/total-solution/agi-1.svg';
import AGI2 from '@/assets/images/avrast/component/total-solution/agi-2.svg';
import ARROW_LEFT from '@/assets/images/avrast/component/total-solution/arrow-left.svg';
import ARROW_RIGHT from '@/assets/images/avrast/component/total-solution/arrow-right.svg';
import AVRAM1 from '@/assets/images/avrast/component/total-solution/avram-1.svg';
import AVRAM2 from '@/assets/images/avrast/component/total-solution/avram-2.svg';
import AVRAST1 from '@/assets/images/avrast/component/total-solution/avrast-1.svg';
import AVRAST2 from '@/assets/images/avrast/component/total-solution/avrast-2.svg';
import Button from '@/components/atoms/Button/Button';

const data = [
  {
    category: 'Avrist Life Insurance',
    icon: AVRAST1,
    title: 'Asuransi Jiwa Individu',
    content:
      'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies.',
    btnText: 'Kami Paham',
    bgColor: 'foamy_milk',
    color: 'purple_dark'
  },

  {
    category: 'Avrist General Insurance',
    icon: AGI1,
    title: 'Asuransi Properti',
    content:
      'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies.',
    btnText: 'Kami Mudah',
    bgColor: 'soft_grey',
    color: 'agi_grey'
  },

  {
    category: 'Avrist Asset Management',
    icon: AVRAM1,
    title: 'Reksa Dana',
    content:
      'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies.',
    btnText: 'Mulai Investasi',
    bgColor: 'avram_bg',
    color: 'avram_green'
  },
  {
    category: 'Avrist Life Insurance',
    icon: AVRAST2,
    title: 'Asuransi Jiwa Korporasi',
    content:
      'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies.',
    btnText: 'Solusi Anda',
    bgColor: 'foamy_milk',
    color: 'purple_dark'
  },

  {
    category: 'Avrist General Insurance',
    icon: AGI2,
    title: 'Asuransi Kendaraan',
    content:
      'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies.',
    btnText: 'Pasti Tertarik',
    bgColor: 'soft_grey',
    color: 'agi_grey'
  },
  {
    category: 'Avrist Asset Management',
    icon: AVRAM2,
    title: 'Jasa Investasi',
    content:
      'Lorem ipsum dolor sit amet consectetur. Purus tortor praesent feugiat ultricies.',
    btnText: 'Kami Berpengalaman',
    bgColor: 'avram_bg',
    color: 'avram_green'
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
      bgColor?: string;
      color?: string;
    },
    idx: number
  ) => (
    <div
      className={`w-96 flex flex-col gap-4 rounded-xl bg-${val.bgColor} items-center justify-center text-center shadow-xl`}
    >
      {idx <= 2 && (
        <div
          className={`w-full bg-${val.color} text-sm font-semibold p-2 text-white rounded-t-xl`}
        >
          {val.category}
        </div>
      )}
      <div className="p-5 flex flex-col items-center justify-center gap-4 pb-10">
        <Image alt="loop-image" src={val.icon} />
        <p className="font-bold text-2xl">{val.title}</p>
        <p>{val.content}</p>
        <Button
          title={val.btnText}
          customButtonClass={`bg-${val.color} hover:bg-${val.color} border-none`}
          customTextClass="text-white"
        />
      </div>
      {idx > 2 && (
        <div
          className={`w-full bg-${val.color} text-sm font-semibold p-2 text-white rounded-b-xl`}
        ></div>
      )}
    </div>
  );

  const renderMobileCard = (val: {
    category?: string;
    icon: StaticImport;
    title?: string;
    content?: string;
    btnText?: string;
    bgColor?: string;
    color?: string;
  }) => (
    <div
      className={`w-84 mb-10 flex flex-col gap-4 rounded-xl bg-${val.bgColor} items-center justify-center text-center shadow-xl`}
    >
      <div
        className={`w-full bg-${val.color} text-sm font-semibold p-2 text-white rounded-t-xl`}
      >
        {val.category}
      </div>
      <div className="p-5 flex flex-col items-center justify-center gap-4 pb-10">
        <Image alt="loop-image" src={val.icon} />
        <p className="font-bold text-2xl">{val.title}</p>
        <p>{val.content}</p>
        <Button
          title={val.btnText}
          customButtonClass={`bg-${val.color} hover:bg-${val.color} border-none`}
          customTextClass="text-white"
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col self-stretch items-center justify-center py-32 px-20 gap-16 bg-white rounded-b-[65px] relative">
      <div>
        <p className="md:text-5xl xs:text-3xl text-center font-bold text-purple_dark">
          Kami ada untuk Anda
        </p>
        <p className="md:text-4xl xs:text-2xl text-gray_black_dark text-center">
          Avrist Total Solution
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
          <div key={idx}>{renderCard(val, idx)}</div>
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
