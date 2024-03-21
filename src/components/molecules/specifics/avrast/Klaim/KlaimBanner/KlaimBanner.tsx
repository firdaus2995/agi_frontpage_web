'use client';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import BannerImg1 from '@/assets/images/avrast/component/klaim-banner/banner-img-1.svg';
import BannerImg2 from '@/assets/images/avrast/component/klaim-banner/banner-img-2.svg';
import BannerImg3 from '@/assets/images/avrast/component/klaim-banner/banner-img-3.svg';
import BannerImg4 from '@/assets/images/avrast/component/klaim-banner/banner-img-4.svg';
import BannerImg5 from '@/assets/images/avrast/component/klaim-banner/banner-img-5.svg';
import BannerImg6 from '@/assets/images/avrast/component/klaim-banner/banner-img-6.svg';

interface KlaimBannerComponentProps {
  changeImg: number;
}

const KlaimBanner: React.FC<KlaimBannerComponentProps> = ({ changeImg }) => {
  const imgData = [
    BannerImg1,
    BannerImg2,
    BannerImg3,
    BannerImg4,
    BannerImg5,
    BannerImg6
  ];
  return (
    <div className="flex w-full">
      <div className="w-full h-[640px] flex md:items-center xs:items-start justify-center relative bg-white rounded-t-[72px] md:-mt-28 xs:-mt-20 relative">
        <Image
          className="bg-purple_dark absolute bottom-0 object-bottom rounded-t-[72px]"
          src={imgData[changeImg]}
          alt={'banner-img'}
          layout="fill"
          objectFit="cover"
          object-position="bottom"
        />
      </div>
    </div>
  );
};

export default KlaimBanner;
