import React from 'react';
import Image from 'next/image';
import CHEVRONRIGHTPURPLE from '@/assets/images/agi/component/product-section/chevron-right-purple.svg';

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
        <p className="font-bold text-purple_dark text-top-heading-group">{label}</p>
        <span className="w-[1px] h-auto bg-black" />
        <p className="text-top-heading-group">{date}</p>
      </span>
      <p className="text-[1.5rem] w-[74%] font-bold">{title}</p>
      <p className="text-base text-body-text-1 line-clamp-2">{description}</p>

      <div className="flex flex-row gap-2">
        {tags.map((item, index) => (
          <p
            key={index}
            className="text-purple_dark font-medium bg-gray_bglightgray px-2 py-1 text-top-heading-group"
          >
            {item}
          </p>
        ))}
      </div>

      <div className="flex flex-row gap-2 items-center">
        <p className="text-[14px] font-bold text-purple_dark">Selengkapnya</p>
        <Image alt="chevron" src={CHEVRONRIGHTPURPLE} width={17} />
      </div>
    </div>
  );
};

export default NewsCard;
