import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface AboutHeadingProps {
  categoriesName: string;
  categoriesClassname?: string;
  categoriesIcon?: StaticImport | string;
  headingText: string;
  subHeadingText?: string;
  description: string;
  tags: string[];
  tagsClassname?: string;
  tagsTextClassname?: string;
  idTags?: string;
}

const AboutHeading: React.FC<AboutHeadingProps> = ({
  categoriesName,
  categoriesClassname,
  categoriesIcon,
  headingText,
  subHeadingText,
  description,
  tags,
  tagsClassname,
  tagsTextClassname,
  idTags
}) => (
  <div className="flex flex-col flex-nowrap" id={idTags}>
    <div>
      <div className="flex flex-row items-center gap-[12px] font-karla">
        {categoriesIcon && (
          <Image width={36} height={36} alt="symbol" src={categoriesIcon} />
        )}
        <p className={`${categoriesClassname} font-bold text-[24px]`}>
          {categoriesName}
        </p>
      </div>
      <div className="font-karla my-[12px]">
        <h1 className="text-[56px] font-bold">{headingText}</h1>
        <p className="text-[36px] font-bold">{subHeadingText}</p>
        <p className="text-[24px] font-light">{description}</p>
      </div>
      <div className="flex flex-row flex-nowrap my-[24px] gap-[12px]">
        {tags.map((item: string, index: number) => (
          <div
            key={index}
            className={`${tagsClassname} px-[8px] py-[4px] rounded-[2px]`}
          >
            <p className={`${tagsTextClassname} text-[14px] font-semibold`}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutHeading;
