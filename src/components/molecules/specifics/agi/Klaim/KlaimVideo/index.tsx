'use client';
import React from 'react';
import Image from 'next/image';
import BannerImg from '@/assets/images/agi/component/klaim-video/img-video.svg';
import PlayButton from '@/assets/images/play-button.svg';
import Icon from '@/components/atoms/Icon';

const KlaimVideo = () => {
  const renderCard = () => (
    <div
      className={`w-[75%] lg:h-[35vh] xs:h-[65vh] flex mb-10 lg:flex-row xs:flex-col gap-4 rounded-xl bg-white items-center justify-center text-center`}
    >
      <div
        className={`lg:w-1/2 xs:w-full p-5 flex h-full flex-col lg:items-start xs:items-center justify-center gap-10`}
      >
        <p className="lg:text-4xl xs:text-2xl lg:text-left xs:text-center">
          <span className="font-bold text-purple_dark">Warisan Kebaikan,</span>{' '}
          Solusi Perlindungan Masa Depan
        </p>
        <div
          role="button"
          className="p-4 bg-purple_dark rounded-xl text-sm font-semibold text-white flex flex-row gap-2"
        >
          Cerita Lebih Detail di
          <Icon name="youtubeIcon" color="white" />
        </div>
      </div>
      <div
        className={`lg:w-1/2 xs:w-full h-full lg:rounded-r-xl lg:rounded-bl-none xs:rounded-b-xl flex flex-col items-end justify-end overflow-hidden relative`}
      >
        <Image
          className="bg-purple_dark w-full absolute lg:top-0 xs:bottom-0 object-bottom"
          src={BannerImg}
          alt="banner-img"
        />
        <div className="w-full h-full absolute flex items-center justify-center">
          <Image alt={'play-button'} className="w-16" src={PlayButton} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col self-stretch items-center justify-center py-32 gap-16 bg-avrast_product_bg">
      <div className="w-full flex items-center justify-center gap-4">
        {renderCard()}
      </div>
    </div>
  );
};

export default KlaimVideo;
