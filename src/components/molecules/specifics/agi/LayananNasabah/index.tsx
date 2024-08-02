'use client';
import React, { useRef, useState } from 'react';

import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

import Slider from 'react-slick';
import CHEVRONRIGHTPURPLE from '@/assets/images/agi/component/layanan-nasabah/chevron-right.svg';
import ARROW_LEFT from '@/assets/images/agi/component/total-solution/arrow-left.svg';
import ARROW_RIGHT from '@/assets/images/agi/component/total-solution/arrow-right.svg';
import {
  contentStringTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

type LayananNasabah = {
  content: any;
};

const LayananNasabah = (props: LayananNasabah) => {
  const { content } = props;
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
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
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const data = [
    {
      icon: singleImageTransformer(content['card-1-layanan-icon']).imageUrl,
      title: contentStringTransformer(content['card-1-layanan-title']),
      link1: contentStringTransformer(content['card-1-layanan-1-label']),
      link2: contentStringTransformer(content['card-1-layanan-2-label']),
      link3: contentStringTransformer(content['card-1-layanan-3-label']),
      linkIcon: CHEVRONRIGHTPURPLE,
      href1: contentStringTransformer(content['card-1-layanan-1-link']),
      href2: contentStringTransformer(content['card-1-layanan-2-link']),
      href3: contentStringTransformer(content['card-1-layanan-3-link'])
    },
    {
      icon: singleImageTransformer(content['card-2-layanan-icon']).imageUrl,
      title: contentStringTransformer(content['card-2-layanan-title']),
      link1: contentStringTransformer(content['card-2-layanan-1-label']),
      link2: contentStringTransformer(content['card-2-layanan-2-label']),
      link3: contentStringTransformer(content['card-2-layanan-3-label']),
      linkIcon: CHEVRONRIGHTPURPLE,
      href1: contentStringTransformer(content['card-2-layanan-1-link']),
      href2: contentStringTransformer(content['card-2-layanan-2-link']),
      href3: contentStringTransformer(content['card-2-layanan-3-link'])
    }
  ];

  const renderCard = (val: {
    icon: any;
    title: string;
    link1: string;
    link2: string;
    link3: string;
    linkIcon: any;
    href1: string;
    href2: string;
    href3: string;
  }) => (
    <div className="w-full flex items-center justify-center">
      <div
        className={`xs:w-[90%] lg:w-full min-h-[240px] sm:gap-[32px] xs:gap-[12px] flex mb-10 md:flex-row xs:flex-col rounded-xl bg-white border-1 items-center justify-center text-center shadow-xl border-b-8 border-b-purple_dark`}
      >
        <div className="xs:block md:hidden flex items-start w-full pt-6 pl-5">
          <Image src={val.icon} alt={val.title} width={80} height={80} />
        </div>
        <div
          className={`w-full md:py-[24px] md:px-[32px] xs:px-8 xs:pb-6 flex h-full flex-col items-start md:justify-center xs:justify-start md:gap-[24px] xs:gap-5`}
        >
          <div className="flex flex-row items-center gap-8">
            <div className="xs:hidden md:block">
              <Image
                src={val.icon}
                alt={val.title}
                width={100}
                height={100}
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-footer-card-title font-bold text-left w-full mb-6">
                {val.title}
              </p>
              <div className="flex flex-row items-center gap-2 flex-wrap">
                <Link
                  role="button"
                  className="flex flex-row flex-wrap items-center gap-4 whitespace-nowrap"
                  href={val.href1}
                >
                  <p className={`font-semibold text-footer-card-subtitle`}>
                    {val.link1}
                  </p>
                  <Image
                    src={val.linkIcon}
                    alt={val.link1}
                    width={24}
                    height={24}
                    className="w-4 mix-blend-multiply"
                  />
                </Link>
              </div>
              <div className="flex flex-row items-center gap-2 flex-wrap">
                <Link
                  role="button"
                  className="flex flex-row items-center gap-4 whitespace-nowrap"
                  href={val.href2}
                >
                  <p className={`font-semibold text-footer-card-subtitle`}>
                    {val.link2}
                  </p>
                  <Image
                    src={val.linkIcon}
                    alt={val.link2}
                    width={24}
                    height={24}
                    className="w-4 mix-blend-multiply"
                  />
                </Link>
              </div>
              <div className="flex flex-row items-center gap-2 flex-wrap">
                <Link
                  role="button"
                  className="flex flex-row items-center gap-4 whitespace-nowrap"
                  href={val.href3}
                >
                  <p className={`font-semibold text-footer-card-subtitle`}>
                    {val.link3}
                  </p>
                  <Image
                    src={val.linkIcon}
                    alt={val.link3}
                    width={24}
                    height={24}
                    className="w-4 mix-blend-multiply"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col self-stretch items-center justify-center py-[5rem] gap-[5rem] bg-white relative">
      <div>
        <p className="text-heading-1-mobile lg:text-heading-1-desktop text-center font-bold text-purple_dark px-10">
          {contentStringTransformer(content['layanan-nasabah-title'])}
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: contentStringTransformer(
              content['layanan-nasabah-description']
            )
          }}
          className="text-heading-2-mobile lg:text-heading-2-desktop text-gray_bold_dark text-center px-10"
        />
      </div>
      <div className="w-full sm:flex sm:flex-row items-center justify-center gap-10 xs:hidden md:flex xs:grid xs:grid-cols-1">
        {data.map((val, idx) => (
          <div key={idx}>{renderCard(val)}</div>
        ))}
      </div>
      <div className="w-full grid grid-cols-1 md:hidden gap-4">
        <Slider
          ref={(slider) => {
            sliderRef.current = slider;
          }}
          beforeChange={(_, index) => setCurrentSlide(index)}
          {...sliderSettings}
        >
          {data.map((val, idx) => (
            <div className="p-2" key={idx}>
              {renderCard(val)}
            </div>
          ))}
        </Slider>
        <div className="flex flex-row gap-4 justify-between w-[85%] m-auto">
          <Image
            alt="prev"
            src={ARROW_LEFT}
            role="button"
            onClick={previous}
            className={currentSlide === 0 ? 'opacity-50' : 'opacity-100'}
          />
          <Image
            alt="next"
            src={ARROW_RIGHT}
            role="button"
            onClick={next}
            className={
              currentSlide === data.length - 1 ? 'opacity-50' : 'opacity-100'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LayananNasabah;
