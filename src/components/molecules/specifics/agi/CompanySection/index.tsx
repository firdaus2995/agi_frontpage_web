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
    infinite: false,
    arrows: false,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  const renderCard = (val: any) => {
    return (
      <div
        className={`md:mx-[4.5rem] md:h-[50vh] flex mb-10 md:flex-row xs:flex-col gap-4 rounded-xl bg-white items-center justify-center text-center shadow-xl`}
      >
        <div
          className={`h-[392px] md:w-1/2 xs:w-full p-5 flex flex-col items-start justify-center gap-6`}
        >
          <p className="text-[28px] text-left text-purple_dark">
            {contentStringTransformer(val['why-us-text-1'])}
          </p>
          <p
            dangerouslySetInnerHTML={{
              __html: contentStringTransformer(val['why-us-text-2'])
            }}
            className="text-[50px] text-left text-purple_dark line-clamp-2"
          />
          <Link
            href={contentStringTransformer(val['why-us-button-link'])}
            target="_blank"
          >
            <Button
              title={contentStringTransformer(val['why-us-button-label'])}
              customButtonClass="bg-purple_dark"
              customTextClass="text-white"
            />
          </Link>
        </div>
        <div
          className={`md:w-1/2 xs:w-full h-full xs:max-md:h-[212px] md:rounded-r-xl md:rounded-bl-none xs:rounded-b-xl flex flex-col items-end justify-end overflow-hidden relative`}
        >
          <Image
            src={singleImageTransformer(val['why-us-banner']).imageUrl}
            alt={singleImageTransformer(val['why-us-banner']).altText}
            className="w-full md:rounded-r-xl md:rounded-bl-none xs:rounded-b-xl"
            fill
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col self-stretch items-center justify-center py-32 gap-16 bg-purple_dark">
      <div>
        <p className="md:text-[4rem] xs:text-3xl text-center font-extrabold text-white px-10 font-karla">
          {contentStringTransformer(content['why-us-title-section'])}
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: contentStringTransformer(
              content['why-us-description-section']
            )
          }}
          className="md:text-[2.25rem] xs:text-3xl text-center font-light px-10 font-karla lg:mt-10 text-white"
        />
      </div>
      <div className="w-full grid grid-cols-1">
        <Slider {...sliderSettings}>
          {sliderData.map((val: any, idx: any) => (
            <div
              key={idx}
              className="w-full flex items-center justify-center sm:px-[24px] sm:py-[36px] xs:p-4"
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
