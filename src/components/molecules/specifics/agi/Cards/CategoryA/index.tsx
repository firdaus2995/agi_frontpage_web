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
    <div className="flex flex-col px-[24px] pt-[24px] pb-[36px] gap-[24px] border border-gray_light border-b-8 border-b-purple_dark rounded-[18px] rounded-b-[12px]">
      <Image
        alt="blank-image"
        width={100}
        height={172}
        src={imageProduk || BlankImage}
        className="w-full h-[172px] rounded-[10px] object-cover"
      />
      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-col gap-[8px]">
          <div className="flex flex-row items-center">
            <Image
              alt="symbol"
              src={symbol}
              width={24}
              height={24}
              className="hidden"
            />
            <p className="text-purple_dark font-bold text-top-heading-group line-clamp-1">
              {title}
            </p>
          </div>
          <p className="text-card-title-desktop font-bold line-clamp-3">{summary}</p>
        </div>
        <p
          className="line-clamp-3 text-card-subtitle-desktop"
          dangerouslySetInnerHTML={{ __html: description ?? '' }}
        />
        <div className="flex flex-row flex-wrap gap-2">
          {tags
            .slice(0, 4)
            .map(
              (item: string, index: number) =>
                item !== '' && <MediumTag key={index} title={item} />
            )}
        </div>
      </div>
      <div className="flex flex-col grow items-end justify-end">
        {href ? (
          <Link href={href} className="w-full">
            <ButtonSmall
              title="Pelajari Produk"
              customClassName="w-full text-[18px]"
              variant="outlined"
            />
          </Link>
        ) : (
          <ButtonSmall variant="outlined" title="Pelajari Produk" />
        )}
      </div>
    </div>
  );
};

export default CardCategoryA;
