import React from 'react';
import Image from 'next/image';
import BOOK from '@/assets/images/common/book.svg';

interface INewsCard {
  label: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

const NewsCard: React.FC<INewsCard> = ({
  label,
  title,
  date,
  description,
  tags
}) => {
  return (
    <div className="mx-3 rounded-xl border-2 border-gray_light p-6 flex flex-col gap-3">
      <span className="flex flex-row gap-2">
        <p className="font-bold text-purple_dark text-sm">{label}</p>
        <span className="w-[1px] h-auto bg-black" />
        <p className="text-sm">{date}</p>
      </span>
      <p className="text-2xl w-[74%] font-bold">{title}</p>
      <p className="text-sm text-body-text-1 line-clamp-2">{description}</p>

      <div className="flex flex-row gap-2">
        {tags.map((item, index) => (
          <p
            key={index}
            className="text-purple_dark font-medium bg-gray_bglightgray px-2 py-1 text-sm"
          >
            {item}
          </p>
        ))}
      </div>

      <div className="flex flex-row gap-2">
        <Image alt="book" src={BOOK} />
        <p className="text-sm font-bold">Baca 2 Menit</p>
      </div>
    </div>
  );
};

export default NewsCard;
