'use client';

import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Slider from 'react-slick';
import MainCard from './components/VideoCards/MainCard';
import SubCard from './components/VideoCards/SubCard';
import COMMUNITY_DATA from './sample-data.json';
import { VideoItem } from './types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ARROW_LEFT from '@/assets/images/avrast/component/total-solution/arrow-left.svg';
import ARROW_RIGHT from '@/assets/images/avrast/component/total-solution/arrow-right.svg';

const PanduanKlaim = () => {
  const sliderRef = useRef<Slider | null>(null);
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
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const [videoData, setVideoData] = useState<VideoItem[]>([]);
  const [isMainVisible, setIsMainVisible] = useState(true);

  useEffect(() => {
    setVideoData(COMMUNITY_DATA['community-videos']);
  }, []);

  const handleSubcardClick = (cardId: string) => {
    setIsMainVisible(false);
    setTimeout(() => {
      setVideoData((prevState) => {
        const copiedState = structuredClone(prevState);
        let index = 0;
        copiedState.forEach((item, currentIndex) => {
          if (item.id === cardId) {
            index = currentIndex;
          }
        });

        const temp = copiedState[0];
        copiedState[0] = copiedState[index];
        copiedState[index] = temp;

        return copiedState;
      });
      setIsMainVisible(true);
    }, 150);
  };

  const renderSub = () => {
    return videoData
      .slice(1)
      .map((item) => (
        <SubCard onClick={handleSubcardClick} key={item.id} item={item} />
      ));
  };

  const renderMobileVideo = () => {
    return videoData.map((item) => (
      <SubCard onClick={handleSubcardClick} key={item.id} item={item} />
    ));
  };

  return (
    <div className="w-full flex flex-col justify-center gap-4 relative pb-28 bg-purple_light_bg rounded-b-[65px]">
      <div className="w-full max-w-[78rem] m-auto p-8 xs:p-5 flex flex-col gap-4">
        <div className="w-full flex flex-col items-center justify-center py-2 text-center">
          <h2 className="text-[32px] font-bold mb-6 text-purple_dark">
            Video Panduan Klaim
          </h2>
          <h2 className="text-[20px] mb-6">
            Kami memberikan <span className="font-bold">solusi</span> dan{' '}
            <span className="font-bold">efisiensi waktu</span> untuk Anda
          </h2>
        </div>
        {videoData.length >= 1 && (
          <div
            className={`transition-all hidden md:grid ${isMainVisible ? 'visible opacity-100' : 'invisible opacity-0'}`}
          >
            <MainCard item={videoData[0]} />
          </div>
        )}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mt-2 justify-center p-2">
          {renderSub()}
        </div>
        <Slider
          ref={(slider) => {
            sliderRef.current = slider;
          }}
          className="md:!hidden"
          {...sliderSettings}
        >
          {renderMobileVideo()}
        </Slider>
        <div className="flex flex-row justify-between mx-5 md:hidden xs:flex">
          <Image alt="prev" src={ARROW_LEFT} role="button" onClick={previous} />
          <Image alt="next" src={ARROW_RIGHT} role="button" onClick={next} />
        </div>
      </div>
      <div className="w-full absolute z-20 bottom-2 h-20 bg-purple_light_bg rounded-b-[65px]"></div>
      <div className="w-full flex flex-row absolute z-10 bottom-0 h-20 rounded-b-[65px]">
        <div className="w-1/4 h-full bg-purple_light rounded-bl-[65px]"></div>
        <div className="w-1/4 h-full bg-green_border"></div>
        <div className="w-1/4 h-full bg-orange_border"></div>
        <div className="w-1/4 h-full bg-agi_grey rounded-br-[65px]"></div>
      </div>
    </div>
  );
};

export default PanduanKlaim;
