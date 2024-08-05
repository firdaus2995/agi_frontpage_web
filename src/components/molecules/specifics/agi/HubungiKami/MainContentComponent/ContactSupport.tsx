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
  const sliderRef: any = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    slidesToShow: 1,
    initialSlide: 0,
    infinite: false,
    arrows: false,
    swipeToSlide: false,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(Math.ceil(newIndex))
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className="hidden md:flex flex-row gap-[1.5rem] font-['Source Sans Pro']">
        <div className="min-h-[340px] md:w-[373px] border bg-white border-b-8 border-b-purple_dark rounded-2xl border-gray_light overflow-hidden flex flex-col xs:items-center md:items-start justify-between">
          <div className="p-[2.25rem] gap-[1.5rem] flex flex-col h-full">
            <Image
              src={
                singleImageTransformer(pageData['informasi-1-icon']).imageUrl
              }
              alt={singleImageTransformer(pageData['informasi-1-icon']).altText}
              width={100}
              height={100}
            />
            <p className="font-karla font-extrabold  md:text-[3rem] leading-10 md:leading-[3.3rem] -tracking-[1.44px]">
              {contentStringTransformer(pageData['informasi-1-nama'])}
            </p>
          </div>
        </div>
        <div className="min-h-[340px] w-[240px] border border-b-8 border-b-purple_dark bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
          <Link
            href={contentStringTransformer(pageData['informasi-2-link'])}
            className="h-full font-opensans md:text-[1.5rem] font-bold  flex flex-col items-center text-center px-[1.5rem] py-[2.25rem] gap-[1.5rem]"
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
              <p className="text-purple_dark text-[16px] font-opensanspro">
                {contentStringTransformer(pageData['informasi-2-label-link'])}
              </p>
            </div>
          </Link>
        </div>
        <div className="min-h-[340px] w-[240px] border border-b-8 border-b-purple_dark bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
          <Link
            href={contentStringTransformer(pageData['informasi-3-link'])}
            className="h-full font-opensans font-bold md:text-[1.5rem] flex flex-col items-center text-center px-[1.5rem] py-[2.25rem] gap-[1.5rem]"
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
              <p className="text-purple_dark text-[16px] font-opensanspro">
                {contentStringTransformer(pageData['informasi-3-label-link'])}
              </p>
            </div>
          </Link>
        </div>
        <div className="min-h-[340px] w-[240px] border border-b-8 border-b-purple_dark bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
          <Link
            href={contentStringTransformer(pageData['informasi-4-link'])}
            className="h-full font-opensans font-bold md:text-[1.5rem] flex flex-col items-center text-center px-[1.5rem] py-[2.25rem] gap-[1.5rem]"
          >
            <Image
              src={
                singleImageTransformer(pageData['informasi-4-icon']).imageUrl
              }
              alt={singleImageTransformer(pageData['informasi-4-icon']).altText}
              width={100}
              height={100}
            />
            <div className="flex flex-col">
              <p className="font-opensanspro font-bold">
                {contentStringTransformer(pageData['informasi-4-nama'])}
              </p>
              <p className="text-purple_dark text-[16px] font-opensanspro">
                {contentStringTransformer(pageData['informasi-4-label-link'])}
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full md:hidden">
        <Slider {...settings} ref={sliderRef} className="min-h-[300px]">
          <div className="w-full grid grid-cols-1 mx-2">
            <div className="min-h-[320px] w-[95%] border bg-white border-b-8 border-b-purple_dark rounded-2xl border-gray_light overflow-hidden flex flex-col items-start justify-between">
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
                <p className="font-karla font-extrabold  text-[3rem] leading-[3.3rem] -tracking-[1.44px]">
                  {contentStringTransformer(pageData['informasi-1-nama'])}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 mx-2">
            <div className="min-h-[320px] w-[95%] border border-b-8 border-b-purple_dark bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
              <Link
                href="tel:021-5789-8188"
                className="h-full font-opensans md:text-[1.5rem] font-bold  flex flex-col items-center text-center px-[1.5rem] py-[2.25rem] gap-[1.5rem]"
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
                  <p className="">
                    {contentStringTransformer(pageData['informasi-2-nama'])}
                  </p>
                  <p className="text-purple_dark text-[16px] font-opensanspro">
                    {contentStringTransformer(
                      pageData['informasi-2-label-link']
                    )}
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 mx-2">
            <div className="min-h-[320px] w-[95%] border border-b-8 border-b-purple_dark bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
              <Link
                href="mailto:customer-service@avrist.com"
                className="h-full font-opensans font-bold md:text-[1.5rem] flex flex-col items-center text-center px-[1.5rem] py-[2.25rem] gap-[1.5rem]"
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
                  <p className="">
                    {contentStringTransformer(pageData['informasi-3-nama'])}
                  </p>
                  <p className="text-purple_dark text-[16px] font-opensanspro">
                    {contentStringTransformer(
                      pageData['informasi-3-label-link']
                    )}
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 mx-2">
            <div className="min-h-[320px] w-[95%] border border-b-8 border-b-purple_dark bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
              <div className="h-full font-opensans font-bold md:text-[1.5rem] flex flex-col items-center text-center px-[1.5rem] py-[2.25rem] gap-[1.5rem]">
                <Image
                  src={
                    singleImageTransformer(pageData['informasi-4-icon'])
                      .imageUrl
                  }
                  alt={
                    singleImageTransformer(pageData['informasi-4-icon']).altText
                  }
                  width={100}
                  height={100}
                />
                <div className="flex flex-col">
                  <p className="">
                    {contentStringTransformer(pageData['informasi-4-nama'])}
                  </p>
                  <p className="text-purple_dark text-[16px] font-opensanspro">
                    {contentStringTransformer(
                      pageData['informasi-4-label-link']
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="flex flex-row justify-between md:mx-[1.25rem] xs:mt-[36px] md:mt-0">
          <Image
            className={currentSlide === 0 ? 'opacity-50' : 'opacity-100'}
            alt="prev"
            src={ARROW_LEFT}
            role="button"
            onClick={previous}
          />
          <Image
            className={currentSlide === 3 ? 'opacity-50' : 'opacity-100'}
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
