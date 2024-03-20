'use client';

import React from 'react';
import { format } from 'date-fns';
import VideoPlayer from '../../../../VideoPlayer';
import { VideoItem } from '../../../types';
import Icon from '@/components/atoms/Icon';
import MediumTag from '@/components/atoms/Tag/MediumTag';

type MainCardProps = {
  item: VideoItem;
};

const MainCard: React.FC<MainCardProps> = ({ item }) => {
  return (
    <div className="grid lg:grid-cols-3 rounded-lg border border-solid border-gray_bglightgray">
      <div className="w-full min-h-[25rem] lg:col-span-2 rounded-lg border border-solid border-gray_bglightgray shadow-md">
        <VideoPlayer url={item.videoUrl} thumbnail={item.videoThumbnail} />
      </div>
      {/* Main Content */}
      <div className="px-8 py-16 rounded-lg border border-solid border-gray_bglightgray shadow-md flex flex-col gap-6">
        <p>
          <span className="font-bold text-purple_dark">{item.type}</span> |{' '}
          <span>{format(new Date(item.date), 'MMMM dd, yyyy')}</span>
        </p>
        <h3 className="font-extrabold text-gray_body text-4xl">{item.title}</h3>
        <p className="line-clamp-3">{item.description}</p>
        {/* Tags */}
        <div className="flex gap-4 flex-wrap">
          {item.tags.map((item, index) => (
            <MediumTag key={index} title={item} customClass="cursor-pointer" />
          ))}
        </div>
        <p className="cursor-pointer font-bold text-purple_dark flex gap-2 items-center">
          Selengkapnya{' '}
          <span className="mt-[3px]">
            <Icon name="arrowRightIcon" color="purple_dark" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default MainCard;
