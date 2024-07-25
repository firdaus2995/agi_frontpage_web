'use client';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ARROW_LEFT from '@/assets/images/agi/component/total-solution/arrow-left.svg';
import ARROW_RIGHT from '@/assets/images/agi/component/total-solution/arrow-right.svg';
import Button from '@/components/atoms/Button/Button';
import {
  contentStringTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

type TotalSolution = {
  content: any;
};

const TotalSolution = (props: TotalSolution) => {
  const { content } = props;
  const sliderRef = useRef<Slider | null>(null);
  const [data, setData] = useState<any>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (content) {
      const tempData = [];
      for (let i = 1; content[`produk-card-${i}-icon`]; i++) {
        tempData.push({
          icon: singleImageTransformer(content[`produk-card-${i}-icon`]),
          title: contentStringTransformer(content[`produk-card-${i}-title`]),
          content: contentStringTransformer(
            content[`produk-card-${i}-description`]
          ),
          btnText: contentStringTransformer(
            content[`produk-card-${i}-button-label`]
          ),
          btnLink: contentStringTransformer(
            content[`produk-card-${i}-button-link`]
          )
        });
      }

      setData(tempData);
    }
  }, [content]);

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
    slidesToScroll: 1,
    slidesPerRow: 2,
    adaptiveHeight: true
  };

  const renderCard = (val: {
    category?: string;
    icon: any;
    title?: string;
    content: string;
    btnText?: string;
    btnLink: string;
  }) => (
    <div
      className={`flex flex-col h-full gap-4 rounded-xl bg-white items-center justify-center text-center shadow-xl`}
    >
      <div className="border-[0.5px] border-b-8 border-b-purple_light rounded-[12px] px-[24px] py-[36px] flex grow flex-col items-center justify-between gap-[24px]">
        <div className="flex flex-col items-center gap-[24px]">
          <Image
            alt="loop-image"
            src={val.icon.imageUrl}
            width={100}
            height={100}
            className="w-[6.25rem] h-[6.25rem]"
          />
          <p className="font-bold text-card-title-desktop">{val.title}</p>
        </div>
        <div className="flex flex-col grow items-center justify-between gap-[24px]">
          <p
            className="text-card-subtitle-desktop"
            dangerouslySetInnerHTML={{
              __html: val.content
            }}
          />
          <Link href={val.btnLink}>
            <Button title={val.btnText} customTextClass="text-card-btn-label" />
          </Link>
        </div>
      </div>
    </div>
  );

  const renderMobileCard = (val: {
    category?: string;
    icon: any;
    title?: string;
    content: string;
    btnText?: string;
    btnLink: string;
  }) => (
    <div className="w-full flex items-center justify-center">
      <div
        className={`w-[90%] h-[580px] mb-10 flex flex-col gap-4 rounded-xl bg-white items-center justify-center text-center shadow-xl px-[24px] py-[36px]`}
      >
        <div className="flex flex-col items-center gap-[24px]">
          <Image
            alt="loop-image"
            src={val.icon.imageUrl}
            width={100}
            height={100}
          />
          <p className="font-bold text-card-title-mobile">{val.title}</p>
        </div>
        <div className="flex flex-col grow items-center justify-between gap-[24px]">
          <p
            className="text-card-subtitle-mobile"
            dangerouslySetInnerHTML={{
              __html: val.content
            }}
          />
          <Link href={val.btnLink}>
            <Button title={val.btnText} customTextClass="text-card-btn-label" />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col self-stretch items-center justify-center sm:py-[100px] sm:px-[136px] gap-[5rem] xs:px-8 xs:pt-[5rem] xs:pb-[100px] bg-white rounded-b-[65px] relative">
      <div>
        <p className="text-heading-1-mobile lg:text-heading-1-desktop text-center font-bold text-purple_dark">
          {contentStringTransformer(content['produk-unggulan-title'])}
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: contentStringTransformer(
              content['produk-unggulan-description']
            )
          }}
          className="text-heading-2-mobile lg:text-heading-2-desktop text-gray_black_dark text-center"
        />
      </div>
      <div className="lg:hidden" style={{ width: '90vw' }}>
        <Slider
          ref={(slider) => {
            sliderRef.current = slider;
          }}
          beforeChange={(_, index) => setCurrentSlide(index)}
          {...sliderSettings}
        >
          {data.map(
            (
              val: {
                category?: string | undefined;
                icon: any;
                title?: string | undefined;
                content: string;
                btnText?: string | undefined;
                btnLink: string;
              },
              idx: React.Key | null | undefined
            ) => (
              <Fragment key={idx}>{renderMobileCard(val)}</Fragment>
            )
          )}
        </Slider>
        <div className="flex flex-row w-full justify-between">
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
      <div className="xs:max-lg:hidden grid grid-cols-3 gap-x-[24px] gap-y-[48px]">
        {data.map(
          (
            val: {
              category?: string | undefined;
              icon: any;
              title?: string | undefined;
              content: string;
              btnText?: string | undefined;
              btnLink: string;
            },
            idx: React.Key | null | undefined
          ) => (
            <div key={idx}>{renderCard(val)}</div>
          )
        )}
      </div>
    </div>
  );
};

export default TotalSolution;
