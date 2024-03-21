'use client';

import React, { useEffect, useState } from 'react';

import Slider from 'react-slick';
import MainCard from './components/VideoCards/MainCard';
import SubCard from './components/VideoCards/SubCard';
import COMMUNITY_DATA from './sample-data.json';
import { VideoItem } from './types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSettings = {
  dots: true,
  infinite: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
};

const AvramCommunity = () => {
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

  return (
    <div className="w-full flex flex-col justify-center gap-4">
      <div className="w-full max-w-[78rem] m-auto p-8 xs:p-5 flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-6">Avram Komunitas</h2>
        {videoData.length >= 1 && (
          <div
            className={`transition-all ${isMainVisible ? 'visible opacity-100' : 'invisible opacity-0'}`}
          >
            <MainCard item={videoData[0]} />
          </div>
        )}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mt-2 justify-center p-2">
          {renderSub()}
        </div>
        <Slider className="md:!hidden" {...sliderSettings}>
          {renderSub()}
        </Slider>
      </div>
    </div>
  );
};

export default AvramCommunity;
