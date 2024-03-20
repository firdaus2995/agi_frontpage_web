import React from 'react';
import Image from 'next/image';

import BlankImage from '@/assets/images/blank-image.svg';
import PlayButton from '@/assets/images/play-button.svg';

interface ICardCategoryC {
  summary: string;
  name: string;
  position: string;
}

const CardCategoryC = ({ summary, name, position }: ICardCategoryC) => {
  return (
    <div className="flex flex-col gap-[18px] border border-gray_light border-b-8 border-b-purple_dark rounded-[12px]">
      <div className="flex relative">
        <Image
          alt="blank-image"
          width={0}
          height={170}
          src={BlankImage}
          className="w-full object-cover"
        />
        <div className="w-full h-full absolute flex items-center justify-center">
          <Image alt={'play-button'} className="w-16" src={PlayButton} />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-5">
        <p className="text-[20px] font-bold text-left">{summary}</p>
        <p className="text-[14px] text-left">
          <span className="font-bold text-purple_dark">{name}</span> {position}
        </p>
      </div>
    </div>
  );
};

export default CardCategoryC;
