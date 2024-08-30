'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Slider from 'react-slick';
import ARROW_LEFT from '@/assets/images/agi/component/total-solution/arrow-left.svg';
import ARROW_RIGHT from '@/assets/images/agi/component/total-solution/arrow-right.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  contentStringTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

type Props = {
  pageData?: any;
};

export const ContactSupport = (props: Props) => {
  const { pageData } = props;
  console.log(pageData)
  const sliderRef: any = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    slidesToShow: 1,
    initialSlide: 0,
    infinite: false,
    arrows: false,
    swipeToSlide: false,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(Math.ceil(newIndex)),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          swipeToSlide: true,
          verticalSwiping: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          vertical: false,
          swipeToSlide: true,
          verticalSwiping: true
        }
      }
    ]
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className="hidden lg:flex flex-row gap-[1.5rem] font-['Source Sans Pro']">
        <div className="min-h-[340px] lg:w-[480px] border bg-white border-b-8 border-b-purple_dark rounded-2xl border-gray_light overflow-hidden flex flex-col xs:items-center lg:items-start justify-between">
          <div className="p-[2.25rem] gap-[1.5rem] flex flex-col h-full">
            <Image
              src={
                singleImageTransformer(pageData['informasi-1-icon']).imageUrl
              }
              alt={singleImageTransformer(pageData['informasi-1-icon']).altText}
              width={100}
              height={100}
            />
            <p className="font-karla font-extrabold  lg:text-[3rem] leading-10 lg:leading-[3.3rem] -tracking-[1.44px]">
              {contentStringTransformer(pageData['informasi-1-nama'])}
            </p>
          </div>
        </div>
        <div className="min-h-[340px] w-[320px] border border-b-8 border-b-purple_dark bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
          <Link
            href={contentStringTransformer(pageData['informasi-2-link'])}
            className="h-full font-opensans lg:text-[1.5rem] font-bold  flex flex-col items-center text-center px-[1.5rem] py-[2.25rem] gap-[1.5rem]"
          >
            <Image
              src={
                singleImageTransformer(pageData['informasi-2-icon']).imageUrl
              }
              alt={singleImageTransformer(pageData['informasi-2-icon']).altText}
              width={100}
              height={100}
            />
            <div className="flex flex-col">
              <p className="font-opensanspro font-bold">
                {contentStringTransformer(pageData['informasi-2-nama'])}
              </p>
              <p className="text-purple_dark text-[24px] font-opensanspro">
                {contentStringTransformer(pageData['informasi-2-label-link'])}
              </p>
            </div>
          </Link>
        </div>
        <div className="min-h-[340px] w-[320px] border border-b-8 border-b-purple_dark bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
          <Link
            href={contentStringTransformer(pageData['informasi-3-link'])}
            className="h-full font-opensans font-bold lg:text-[1.5rem] flex flex-col items-center text-center px-[1.5rem] py-[2.25rem] gap-[1.5rem]"
          >
            <Image
              src={
                singleImageTransformer(pageData['informasi-3-icon']).imageUrl
              }
              alt={singleImageTransformer(pageData['informasi-3-icon']).altText}
              width={100}
              height={100}
            />

            <div className="flex flex-col">
              <p className="font-opensanspro font-bold">
                {contentStringTransformer(pageData['informasi-3-nama'])}
              </p>
              <p className="text-purple_dark text-[24px] font-opensanspro">
                {contentStringTransformer(pageData['informasi-3-label-link'])}
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full lg:hidden">
        <Slider {...settings} ref={sliderRef} className="min-h-[300px]">
          <div className="w-full grid grid-cols-1 mx-2">
            <div className="min-h-[375px] w-[95%] border bg-white border-b-8 border-b-purple_dark rounded-2xl border-gray_light overflow-hidden flex flex-col items-start justify-between">
              <div className="p-[2.25rem] gap-[1.5rem] flex flex-col h-full">
                <Image
                  src={
                    singleImageTransformer(pageData['informasi-1-icon'])
                      .imageUrl
                  }
                  alt={
                    singleImageTransformer(pageData['informasi-1-icon']).altText
                  }
                  width={100}
                  height={100}
                />
                <p className="font-karla font-extrabold  text-[3rem] leading-[3.3rem] -tracking-[1.44px] line-clamp-2">
                  {contentStringTransformer(pageData['informasi-1-nama'])}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 mx-2">
            <div className="min-h-[375px] w-[95%] border border-b-8 border-b-purple_dark bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
              <Link
                href="tel:021-5789-8188"
                className="h-full font-opensans lg:text-[1.5rem] font-bold  flex flex-col items-center text-center px-[1.5rem] py-[2.25rem] gap-[1.5rem]"
              >
                <Image
                  src={
                    singleImageTransformer(pageData['informasi-2-icon'])
                      .imageUrl
                  }
                  alt={
                    singleImageTransformer(pageData['informasi-2-icon']).altText
                  }
                  width={100}
                  height={100}
                />
                <div className="flex flex-col">
                  <p className="text-[24px]">
                    {contentStringTransformer(pageData['informasi-2-nama'])}
                  </p>
                  <p className="text-purple_dark text-[24px] font-opensanspro">
                    {contentStringTransformer(
                      pageData['informasi-2-label-link']
                    )}
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 mx-2">
            <div className="min-h-[375px] w-[95%] border border-b-8 border-b-purple_dark bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
              <Link
                href="mailto:customer-service@avrist.com"
                className="h-full font-opensans font-bold lg:text-[1.5rem] flex flex-col items-center text-center px-[1.5rem] py-[2.25rem] gap-[1.5rem]"
              >
                <Image
                  src={
                    singleImageTransformer(pageData['informasi-3-icon'])
                      .imageUrl
                  }
                  alt={
                    singleImageTransformer(pageData['informasi-3-icon']).altText
                  }
                  width={100}
                  height={100}
                />

                <div className="flex flex-col">
                  <p className="text-[24px]">
                    {contentStringTransformer(pageData['informasi-3-nama'])}
                  </p>
                  <p className="text-purple_dark text-[24px] font-opensanspro">
                    {contentStringTransformer(
                      pageData['informasi-3-label-link']
                    )}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </Slider>
        <div className="flex flex-row justify-between lg:mx-[1.25rem] xs:mt-[36px] lg:mt-0 md:hidden">
          <Image
            className={currentSlide === 0 ? 'opacity-50' : 'opacity-100'}
            alt="prev"
            src={ARROW_LEFT}
            role="button"
            onClick={previous}
          />
          <Image
            className={currentSlide === 2 ? 'opacity-50' : 'opacity-100'}
            alt="next"
            src={ARROW_RIGHT}
            role="button"
            onClick={next}
          />
        </div>
        <div className="md:flex flex-row justify-between lg:mx-[1.25rem] xs:mt-[36px] lg:mt-0 hidden">
          <Image
            className={currentSlide === 0 ? 'opacity-50' : 'opacity-100'}
            alt="prev"
            src={ARROW_LEFT}
            role="button"
            onClick={previous}
          />
          <Image
            className={currentSlide === 1 ? 'opacity-50' : 'opacity-100'}
            alt="next"
            src={ARROW_RIGHT}
            role="button"
            onClick={next}
          />
        </div>
      </div>
    </>
  );
};
