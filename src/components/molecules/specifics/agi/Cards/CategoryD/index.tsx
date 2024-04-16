import React from 'react';
import Image from 'next/image';

import BlankImage from '@/assets/images/blank-image.svg';
import Book from '@/assets/images/common/book.svg';
import MediumTag from '@/components/atoms/Tag/MediumTag';

interface ICardCategoryD {
  summary: string;
  category: string;
  time: string;
  title: string;
  tags: string[];
  type?: string;
}

const CardCategoryD = ({
  summary,
  category,
  time,
  title,
  tags,
  type
}: ICardCategoryD) => {
  return (
    <div className={`flex ${type === 'row' ? 'flex-row-reverse p-4' : 'flex-col border-b-8 border-b-purple_dark'} gap-[18px] border border-gray_light rounded-[12px]`}>
      <div className={`flex relative ${type === 'row' ? 'w-1/3 rounded-xl' : ''}`}>
        <Image
          alt="blank-image"
          width={0}
          height={170}
          src={BlankImage}
          className="w-full object-cover rounded-xl"
        />
      </div>
      <div className={`flex flex-col gap-4 p-5 ${type === 'row' ? 'w-2/3' : ''}`}>
        <p className="text-[14px] text-left">
          <span className="font-bold text-purple_dark">{category}</span> {time}
        </p>
        <p className="text-[24px] font-bold text-left">{title}</p>
        <p className="text-[16px] text-left line-clamp-2">{summary}</p>
        <div className="flex flex-row gap-2 items-center">
          <Image alt="book-image" width={0} height={20} src={Book} />
          <p className="font-bold text-[14px]">Baca 2 menit</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          {tags.map((val, idx) => (
            <MediumTag key={idx} title={val} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCategoryD;
