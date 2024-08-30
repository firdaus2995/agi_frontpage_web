'use client';

import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Button from '@/components/atoms/Button/Button';
import {
  contentStringTransformer,
  heroContentTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

type CompanySection = {
  content: any;
};

const CompanySection = (props: CompanySection) => {
  const { content } = props;
  const [sliderData, setSliderData] = useState<any>([]);

  useEffect(() => {
    setSliderData(heroContentTransformer(content['why-us-looping']));
  }, []);

  const sliderSettings = {
    dots: true, 
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  const renderCard = (val: any) => {
    return (
      <div
        className={`lg:mx-[4.5rem] lg:h-[50vh] flex mb-10 lg:flex-row xs:flex-col gap-4 rounded-xl bg-white items-center justify-center text-center shadow-xl`}
      >
        <div
          className={`h-[392px] lg:w-1/2 xs:w-full lg:px-[48px] px-[24px] pt-[36px] lg:pb-[36px] pb-[24px] flex flex-col items-start justify-center gap-6`}
        >
          <p className="font-karla text-information-slider-title-mobile lg:text-information-slider-title-desktop text-left text-purple_dark">
            {contentStringTransformer(val['why-us-text-1'])}
          </p>
          <p
            dangerouslySetInnerHTML={{
              __html: contentStringTransformer(val['why-us-text-2'])
            }}
            className="font-karla text-information-slider-subtitle-mobile lg:text-information-slider-subtitle-desktop text-left text-purple_dark line-clamp-3"
          />
          <Link
            href={contentStringTransformer(val['why-us-button-link'])}
            className='flex w-full items-center justify-start'
>
            <Button
              title={contentStringTransformer(val['why-us-button-label'])}
              customButtonClass="bg-purple_dark"
              customTextClass="text-white text-card-btn-label"
            />
          </Link>
        </div>
        <div
          className={`lg:w-1/2 xs:w-full h-full xs:max-lg:h-[212px] lg:rounded-r-xl lg:rounded-bl-none xs:rounded-b-xl flex flex-col items-end justify-end overflow-hidden relative`}
        >
          <Image
            src={singleImageTransformer(val['why-us-banner']).imageUrl}
            alt={singleImageTransformer(val['why-us-banner']).altText}
            className="w-full lg:rounded-r-xl lg:rounded-bl-none xs:rounded-b-xl"
            fill
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col self-stretch items-center justify-center lg:py-32 xs:py-[5rem] px-[2rem] gap-[5rem] bg-purple_dark">
      <div>
        <p className="text-heading-1-mobile lg:text-heading-1-desktop text-center font-extrabold text-white px-10 font-karla">
          {contentStringTransformer(content['why-us-title-section'])}
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: contentStringTransformer(
              content['why-us-description-section']
            )
          }}
          className="text-heading-2-mobile lg:text-heading-2-desktop text-center font-light px-10 font-karla lg:mt-10 text-white"
        />
      </div>
      <div className="w-full grid grid-cols-1 company-section">
        <Slider {...sliderSettings}>
          {sliderData.map((val: any, idx: any) => (
            <div
              key={idx}
              className="w-full flex items-center justify-center lg:px-[24px] lg:py-[36px] xs:p-4"
            >
              {renderCard(val)}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CompanySection;
