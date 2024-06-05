import React from 'react';
import Image from 'next/image';

import BlankImage from '@/assets/images/blank-image.svg';

interface ICardCategoryB {
  summary: string;
  description: string;
  imageUrl?: string;
  lineClamp?: number;
  imageStyle?: string;
}

const CardCategoryB = ({
  summary,
  description,
  imageUrl,
  imageStyle,
  lineClamp
}: ICardCategoryB) => {
  return (
    <div className="flex flex-col gap-[18px] border border-gray_light border-b-8 border-b-purple_dark rounded-[12px] text-left h-full">
      <Image
        alt="blank-image"
        width={0}
        height={170}
        src={imageUrl ?? BlankImage}
        className={`w-auto rounded-t-[12px] ${imageStyle ?? ''}`}
      />
      <div className="h-full flex flex-col justify-between px-5 pb-5">
        <p
          className={`text-[20px] font-bold font-karla line-clamp-3 ${lineClamp?.toString() ?? ''}`}
          dangerouslySetInnerHTML={{
            __html: summary
          }}
        />
        <p className="text-xs mt-2 font-opensans">{description}</p>
      </div>
    </div>
  );
};

export default CardCategoryB;
