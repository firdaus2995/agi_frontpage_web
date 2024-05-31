import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

import BlankImage from '@/assets/images/blank-image.svg';
import ButtonSmall from '@/components/atoms/ButtonSmall';
import MediumTag from '@/components/atoms/Tag/MediumTag';

interface ICardCategoryA {
  symbol: StaticImport | string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  href?: string;
  imageProduk?: string;
}

const CardCategoryA = ({
  symbol,
  title,
  summary,
  description,
  tags,
  href,
  imageProduk
}: ICardCategoryA) => {
  return (
    <div className="flex flex-col gap-[24px] px-[24px] pt-[24px] pb-[36px] border border-gray_light border-b-8 border-b-purple_dark rounded-[18px] rounded-b-[12px]">
      <Image
        alt="blank-image"
        width={100}
        height={172}
        src={imageProduk || BlankImage}
        className="w-full h-[172px] rounded-[10px]"
      />
      <div className="flex flex-row items-center gap-[4px]">
        <Image alt="symbol" src={symbol} width={24} height={24} />
        <p className="text-purple_dark font-bold text-sm">{title}</p>
      </div>
      <p className="text-[32px] font-bold">{summary}</p>
      <p
        className="line-clamp-3"
        dangerouslySetInnerHTML={{ __html: description ?? '' }}
      />
      <div className="flex flex-col justify-between grow gap-4">
        <div className="flex flex-row flex-wrap gap-[12px]">
          {tags.map((item: string, index: number) => (
            <MediumTag key={index} title={item} />
          ))}
        </div>
        {href ? (
          <Link href={href} className="w-full">
            <ButtonSmall
              title="Pelajari Produk"
              customClassName="w-full text-[18px]"
            />
          </Link>
        ) : (
          <ButtonSmall title="Pelajari Produk" />
        )}
      </div>
    </div>
  );
};

export default CardCategoryA;
