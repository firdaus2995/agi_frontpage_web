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

  const renderedDescription = (description: string) => {
    const isOrdered = description.includes('<ol>');
    const isUnordered = description.includes('<ul>');

    if (isOrdered) {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: description.replace(
              /<ol>/g,
              `<ol class="list-decimal pl-6 font-opensans">`
            )
          }}
        />
      );
    }
    if (isUnordered) {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: description.replace(
              /<ul>/g,
              `<ul class="list-disc pl-6 font-opensans">`
            )
          }}
        />
      );
    }

    return <p dangerouslySetInnerHTML={{ __html: description }}></p>;
  };

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
          <p className="font-bold text-banner-title-mobile text-purple_dark">
            {categoryTitle}
          </p>
        </div>
        <p className="font-bold text-tanya-avgen-detail-title-mobile lg:text-tanya-avgen-detail-title-desktop text-purple_dark">
          {productTitle}
        </p>
      </div>
      <div className="flex flex-col gap-[12px]">
        <p
          className="font-karla xs:text-[1.5rem] lg:text-[2.25rem] font-bold lg:pb-0 -tracking-[1.08px] xs:leading-[28.8px] lg:leading-[43.2px]"
          dangerouslySetInnerHTML={{ __html: tagLineProduk ?? '' }}
        />
        <p className="font-karla lg:text-[24px] xs:text-[24px] -tracking-[0.72px] leading-[33.6px]">
          {renderedDescription(deskripsiLengkapProduk)}
        </p>
        {tags[0] !== '' && (
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
        )}
      </div>
    </div>
  );
};

export default DescriptionCategoryA;
