'use client';
import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowCarouselLeft from '@/assets/images/common/arrow-carousel-left.svg';
import ArrowCarouselRight from '@/assets/images/common/arrow-carousel-right.svg';

interface IFooterCards {
  cards: {
    title: string;
    icon: StaticImport | string;
    subtitle?: string;
    href?: string;
  }[];
  bgColor?: string;
}

interface CustomPrevArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
}

interface CustomNextArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
}

const CustomNextArrow: React.FC<CustomNextArrowProps> = (props) => {
  const { className, ...rest } = props;

  const isDisabled = className?.includes('slick-disabled');

  return (
    <div
      {...rest}
      className={className}
      style={{
        ...props.style,
        position: 'relative',
        left: '100%',
        bottom: '0',
        opacity: isDisabled ? 0.5 : 1
      }}
    >
      <Image
        style={{ rotate: '90deg' }}
        width={36}
        height={36}
        alt="next"
        src={ArrowCarouselRight}
      />
    </div>
  );
};

const CustomPrevArrow: React.FC<CustomPrevArrowProps> = (props) => {
  const { className, ...rest } = props;

  const isDisabled = className?.includes('slick-disabled');

  return (
    <div
      {...rest}
      className={className}
      style={{
        ...props.style,
        position: 'relative',
        bottom: '-302px',
        opacity: isDisabled ? 0.5 : 1
      }}
    >
      <Image
        style={{ rotate: '-90deg' }}
        width={36}
        height={36}
        alt="next"
        src={ArrowCarouselLeft}
      />
    </div>
  );
};

const FooterCards: React.FC<IFooterCards> = ({ cards, bgColor }) => {
  const settings = {
    slidesToShow: 4,
    initialSlide: 0,
    infinite: false,
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          nextArrow: <CustomNextArrow />,
          prevArrow: <CustomPrevArrow />
        }
      }
    ]
  };

  return (
    <div className={bgColor ?? ''}>
      <div className="px-8 mx-4 sm:mx-[136px] pb-[32px]">
        <Slider {...settings}>
          {cards.map((item, index) => (
            <Link
              href={item?.href ?? '#'}
              key={index}
              className="flex flex-col justify-between w-full max-w-[274px] h-full min-h-[280px] p-[24px] sm:gap-[24px] border border-gray_light rounded-[12px] shadow-md bg-white"
            >
              <div className="flex justify-center">
                <Image
                  alt={index.toString()}
                  src={item.icon}
                  className="w-[100px] h-[100px]"
                />
              </div>
              <div className="flex flex-col justify-center mt-2 gap-2">
                <p className="text-center font-bold md:text-lg 2xl:text-[24px]">
                  {item.title.split('\n').map((line, index) => (
                    <span key={index}>{line}</span>
                  ))}
                </p>
                {item.subtitle && (
                  <p className="text-center font-bold md:text-lg 2xl:text-[24px] text-purple_dark">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FooterCards;
