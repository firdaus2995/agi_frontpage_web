import React from 'react';
import { format } from 'date-fns';
import Image from 'next/image';
import { VideoItem } from '../../../types';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon';

type SubCardProps = {
  item: VideoItem;
  onClick: (cardId: string) => void;
};

const SubCard: React.FC<SubCardProps> = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick(item.id)}
      className="w-full md:max-w-[25rem] flex flex-col gap-4 rounded-xl shadow-md cursor-pointer group"
    >
      <div className="w-full relative h-[15rem] md:h-[10rem] overflow-hidden rounded-xl">
        <Image
          alt={item.title}
          width={0}
          height={0}
          className='absolute w-full h-full inset-0'
          src={item.videoThumbnail}
        />
        <Button.IconButton
          customButtonClass={`
          absolute rounded-full bg-purple_verylight 
          aspect-square w-[5rem] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          z-10 grid place-items-center pl-4 hover:opacity-50 group-hover:opacity-50
          transition-all
        `}
        >
          <Icon name="playIcon" color="white" width={45} height={45} />
        </Button.IconButton>
      </div>
      <div className="p-4">
        <p>
          <span className="font-bold text-purple_dark">{item.type}</span> |{' '}
          <span>{format(new Date(item.date), 'MMMM dd, yyyy')}</span>
        </p>
        <h3 className="font-extrabold text-gray_body text-2xl mt-2">
          {item.title}
        </h3>
      </div>
    </div>
  );
};

export default SubCard;
