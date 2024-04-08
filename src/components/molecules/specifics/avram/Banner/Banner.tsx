'use client';
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerImg from '@/assets/images/banner.svg';
import Button from '@/components/atoms/Button/Button';

const bannerData = [
  {
    category: 'Strategi Investasi',
    title: 'Reksa Dana atau SBN?',
    btn: 'Pelajari Lebih Lanjut',
    img: BannerImg
  },
  {
    category: 'Strategi Investasi',
    title: 'Reksa Dana atau SBN?',
    btn: 'Pelajari Lebih Lanjut',
    img: BannerImg
  },
  {
    category: 'Strategi Investasi',
    title: 'Reksa Dana atau SBN?',
    btn: 'Pelajari Lebih Lanjut',
    img: BannerImg
  }
];

const sliderSettings = {
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: true,
  pauseOnHover: true,
  speed: 1000,
  autoplaySpeed: 4500,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: (
    dots:
      | string
      | number
      | boolean
      | React.ReactElement<string | React.JSXElementConstructor<string>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | null
      | undefined
  ) => (
    <div
      style={{
        position: 'absolute',
        left: 36,
        width: 150,
        bottom: 16
      }}
    >
      <ul style={{ margin: '0px' }}> {dots} </ul>
    </div>
  )
};

const Banner = () => {
  return (
    <div className="flex w-full">
      <div className="w-full">
        <Slider {...sliderSettings}>
          {bannerData.map((data, index) => (
            <div
              key={index}
              className="flex w-full xs:h-[65vh] md:h-[90vh] relative"
            >
              <Image
                alt="loop-image"
                src={data.img}
                layout="fill"
                objectFit="contain"
                className="w-full h-auto xs:object-bottom md:object-right"
              />
              <div className="flex flex-col md:w-[40%] md:p-20 xs:p-10 gap-4 absolute z-50 xs:top-10 md:top-20">
                <p className="xs:text-[26px] md:text-[48px] text-bright-purple whitespace-nowrap xs:mt-10 md:mt-0">
                  {data.category}
                </p>
                <p className="xs:text-[36px] md:text-[56px] font-black">
                  {data.title}
                </p>
                <div>
                  <Button
                    title={data.btn}
                    customButtonClass="bg-white"
                    onClick={() => console.log('Button Clicked')}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
