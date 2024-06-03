'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowCarouselLeft from '@/assets/images/common/arrow-carousel-left.svg';
import ArrowCarouselRight from '@/assets/images/common/arrow-carousel-right.svg';
interface ITopicsCard {
  cards: { title: string; icon: string; }[];
  onClickCards: (title: string) => void;
}

const TopicsCard = ({ cards, onClickCards }: ITopicsCard) => {
  const sliderRef: any = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    slidesToShow: 1.3,
    initialSlide: 0,
    infinite: false,
    swipeToSlide: false,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(Math.ceil(newIndex)),
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="w-full bg-white flex flex-col sm:gap-[7.5rem] xs:gap-[2.25rem] items-center bg-[#F7F4F8] sm:px-[5rem] sm:py-[3.90625rem] xs:py-[1.875rem] xs:px-[1.3125rem]">
      <h1 className="font-karla sm:text-[3.5rem] xs:text-[2.25rem] text-purple_dark text-center">
        Apa yang ingin <span className="font-bold">Anda </span> ketahui?
      </h1>
      <div className="xs:hidden sm:grid xs:grid-rows-1 xs:grid-cols-2 sm:grid-cols-4 gap-[1.5rem]">
        {cards.map((item, index) => (
          <div
            key={index}
            role="button"
            onClick={() => onClickCards(item.title)}
            className="flex flex-col items-center"
          >
            <div
              className={`xs:w-[11.25rem] bg-white sm:w-[17.125rem] xs:h-[11.625rem] sm:h-[16.25rem] flex flex-col items-center justify-center px-[1.5rem] pt-[1.5rem] pb-[2.25rem] gap-[1.5rem] border border-gray_light rounded-xl border-b-[0.5rem] border-b-purple_dark`}
            >
              <Image
                alt={item.title}
                src={item.icon}
                className="xs:w-[3.75rem] xs:h-[3.75rem] sm:w-[6.25rem] sm:h-[6.25rem]"
                width={60}
                height={60}
              />
              <p className="text-center font-bold xs:text-[2rem] sm:text-[1.5rem] leading-[2.4rem]">
                {item.title.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full'>
        <div className="md:hidden py-[0.375rem] flex flex-col gap-[2.25rem]">
          <Slider {...settings} ref={sliderRef}>
            {cards.map((item, index) => (
              <div
                key={index}
                role="button"
                onClick={() => onClickCards(item.title)}
                className="flex flex-col items-center justify-center w-full"
              >
                <div
                key={index}
                role="button"
                onClick={() => onClickCards(item.title)}
                  className={`w-[95%] bg-white h-[16.25rem] pb-[2.25rem] px-[1.5rem] pt-[1.5rem] flex flex-col items-center justify-center gap-[0.5rem] border border-gray_light rounded-xl border-b-[0.5rem] border-b-purple_dark`}
                >
                  <Image
                    alt={item.title}
                    src={item.icon}
                    className="xs:w-[3.75rem] xs:h-[3.75rem] sm:w-[6.25rem] sm:h-[6.25rem]"
                    width={60}
                    height={60}
                  />
                  <p className="text-center font-bold xs:text-[2rem] sm:text-[1.5rem] leading-[2.4rem]">
                    {item.title.split('\n').map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
          <div className="w-full flex flex-row justify-between px-[2.5rem]">
            <Image
              style={{ rotate: '-90deg' }}
              width={36}
              height={36}
              alt="next"
              src={ArrowCarouselLeft}
              onClick={previous}
              className={currentSlide === 0 ? 'opacity-50' : 'opacity-100'}
            />
            <Image
              style={{ rotate: '90deg' }}
              width={36}
              height={36}
              alt="next"
              src={ArrowCarouselRight}
              onClick={next}
              className={
                currentSlide === cards.length - 1 ? 'opacity-50' : 'opacity-100'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsCard;
