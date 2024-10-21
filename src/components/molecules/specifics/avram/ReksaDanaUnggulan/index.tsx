'use client';

import React from 'react';

import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import BLUE_SAFIR from '@/assets/images/blue-safir.svg';
import Button from '@/components/atoms/Button/Button';
import MediumTag from '@/components/atoms/Tag/MediumTag';

const ReksaDanaUnggulan = () => {
  const reksaDanaLength: number = 5;
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const renderReksaDanaCard = (index: number) => (
    <div
      key={index}
      className="w-96 p-6 flex flex-col gap-4 rounded-xl bg-white"
    >
      <Image alt="loop-image" src={BLUE_SAFIR} />
      <p className="font-bold text-2xl">Avrist Blue Safir</p>
      <p>
        Melangkah Lebih Jauh dengan Keamanan dan Pertumbuhan Finansial Bersama
        Avrist Blue Safir
      </p>
      <div className="flex flex-row gap-2">
        <MediumTag title="Reksa Dana" />
        <MediumTag title="Investasi" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col self-stretch items-center justify-center py-32 px-20 gap-16 bg-purple_light_bg">
      <p className="text-5xl text-gray_black_dark text-center">
        Reksa Dana <span className="font-bold text-purple_dark">Unggulan</span>
      </p>
      <div className="lg:hidden" style={{ width: '90vw' }}>
        <Slider {...sliderSettings}>
          {Array.from({ length: reksaDanaLength }, (_, index: number) =>
            renderReksaDanaCard(index)
          )}
        </Slider>
      </div>
      <div className="xs:max-lg:hidden grid grid-cols-3 gap-4">
        {Array.from({ length: reksaDanaLength }, (_, index: number) =>
          renderReksaDanaCard(index)
        )}
        <div className="w-96 p-6 flex flex-col justify-center gap-4 rounded-xl bg-gray_spacerlight">
          <p className="text-xl">
            Temukan potensi pertumbuhan finansial Anda di{' '}
            <span className="font-semibold text-purple_dark">Reksa Dana</span>{' '}
            Avrist Asset Management.
          </p>
          <div>
            <Button
              customButtonClass="bg-white"
              customTextClass="text-xl font-semibold"
              title="Lihat Produk Lainnya"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReksaDanaUnggulan;
