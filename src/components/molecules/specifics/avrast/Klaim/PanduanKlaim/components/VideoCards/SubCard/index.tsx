import React from 'react';
import Image from 'next/image';
import { VideoItem } from '../../../types';
import PlayButton from '@/assets/images/play-button.svg';

type SubCardProps = {
  item: VideoItem;
  onClick: (cardId: string) => void;
};

const SubCard: React.FC<SubCardProps> = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick(item.id)}
      className="w-full md:max-w-[25rem] flex flex-col rounded-xl shadow-md cursor-pointer group mt-10"
    >
      <div className="w-full relative h-[15rem] md:h-[10rem] overflow-hidden rounded-t-xl">
        <Image
          alt={item.type}
          width={0}
          height={0}
          className="absolute w-full h-full inset-0"
          src={item.videoThumbnail}
        />
        <div className="w-full h-full absolute flex items-center justify-center">
          <Image alt={'play-button'} className="w-16" src={PlayButton} />
        </div>
      </div>
      <div
        className={`p-4 w-full bg-${item.color} rounded-b-xl text-sm text-white font-semibold`}
      >
        {item.type}
      </div>
    </div>
  );
};

export default SubCard;
