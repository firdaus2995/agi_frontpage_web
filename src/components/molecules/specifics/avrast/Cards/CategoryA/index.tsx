import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import BlankImage from '@/assets/images/blank-image.svg';
import ButtonSmall from '@/components/atoms/ButtonSmall';
import MediumTag from '@/components/atoms/Tag/MediumTag';

interface ICardCategoryA {
  symbol: StaticImport | string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
}

const CardCategoryA = ({
  symbol,
  title,
  summary,
  description,
  tags
}: ICardCategoryA) => {
  return (
    <div className="flex flex-col gap-[18px] p-[24px] border border-gray_light border-b-8 border-b-purple_dark rounded-[18px] rounded-b-[12px]">
      <Image
        alt="blank-image"
        width={0}
        height={170}
        src={BlankImage}
        className="w-auto"
      />
      <div className="flex flex-row items-center gap-[4px]">
        <Image alt="symbol" src={symbol} />
        <p className="text-purple_dark font-bold text-sm">{title}</p>
      </div>
      <p className="text-[32px] font-bold">{summary}</p>
      <p>{description}</p>
      <div className="flex flex-row flex-wrap gap-[12px]">
        {tags.map((item: string, index: number) => (
          <MediumTag key={index} title={item} />
        ))}
      </div>
      <ButtonSmall title="Pelajari Produk" />
    </div>
  );
};

export default CardCategoryA;
