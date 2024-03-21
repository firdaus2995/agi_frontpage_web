import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import BlankImage from '@/assets/images/blank-image.svg';

interface CardProductProps {
  symbol: StaticImport | string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  cardClassname?: string;
  cardTitleClassname?: string;
  cardTagsClassname?: string;
  cardButtonClassname?: string;
}

const CardProduct = ({
  symbol,
  title,
  summary,
  description,
  tags,
  cardClassname,
  cardTitleClassname,
  cardTagsClassname,
  cardButtonClassname
}: CardProductProps) => {
  return (
    <div
      className={`${cardClassname} flex flex-col gap-[18px] p-[24px] border border-gray_light border-b-8 rounded-[12px] rounded-b-[12px]`}
    >
      <Image
        alt="blank-image"
        width={0}
        height={170}
        src={BlankImage}
        className="w-auto"
      />
      <div className="flex flex-row items-center gap-[4px]">
        <Image width={24} height={24} alt="symbol" src={symbol} />
        <p className={`${cardTitleClassname} font-bold text-sm`}>{title}</p>
      </div>
      <p className="text-[32px] font-bold">{summary}</p>
      <p>{description}</p>
      <div className="flex flex-row flex-wrap gap-[12px]">
        {tags.map((item: string, index: number) => (
          <div
            key={index}
            className={`${cardTagsClassname} px-2 py-1 rounded-sm text-sm font-semibold`}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
      <button
        className={`${cardButtonClassname} px-[19px] py-[7px] rounded-[6px] font-bold`}
      >
        <p>Pelajari Produk</p>
      </button>
    </div>
  );
};

export default CardProduct;
