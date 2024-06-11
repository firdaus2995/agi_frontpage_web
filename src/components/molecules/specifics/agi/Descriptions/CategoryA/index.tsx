'use client';
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import MediumTag from '@/components/atoms/Tag/MediumTag';

interface IDescriptionCategoryA {
  tags: string[];
  categoryTitle: string;
  productTitle: string;
  categorySymbol?: StaticImageData;
  tagLineProduk?: string;
  deskripsiLengkapProduk?: string;
}

const DescriptionCategoryA = ({
  tags,
  categoryTitle,
  productTitle,
  categorySymbol,
  tagLineProduk = '',
  deskripsiLengkapProduk = ''
}: IDescriptionCategoryA) => {
  const [showMoreTags, setShowMoreTags] = useState(false);
  return (
    <div className="flex flex-col gap-[24px] font-karla">
      <div className="flex flex-col gap-[8px]">
        <div className="flex flex-row gap-[12px]">
          <Image
            width={36}
            height={36}
            alt="symbol"
            src={categorySymbol ?? ''}
            className="hidden"
          />
          <p className="font-bold text-[24px] text-purple_dark">
            {categoryTitle}
          </p>
        </div>
        <p className="font-bold text-[36px] sm:text-[56px] text-purple_dark">
          {productTitle}
        </p>
      </div>
      <div className="flex flex-col gap-[12px]">
        <p
          className="font-bold md:text-[36px] xs:text-[24px]"
          dangerouslySetInnerHTML={{ __html: tagLineProduk ?? '' }}
        />
        <p
          className="md:text-[24px] xs:text-[24px]"
          dangerouslySetInnerHTML={{ __html: deskripsiLengkapProduk ?? '' }}
        />
        <div className="flex flex-row flex-wrap gap-[8px] font-opensans">
          {tags
            .slice(0, showMoreTags ? tags.length : 10)
            .map((item: string, index: number) => (
              <MediumTag
                key={index}
                title={item}
                customClass="font-semibold text-[14px]"
              />
            ))}
          {tags.length > 10 && (
            <a
              className="font-bold cursor-pointer"
              onClick={() => {
                setShowMoreTags(!showMoreTags);
              }}
            >
              {showMoreTags ? 'Sembunyikan sisa tag' : 'Tampilkan sisa tag'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DescriptionCategoryA;
