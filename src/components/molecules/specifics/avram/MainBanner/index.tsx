import React from 'react';
import Image from 'next/image';

type MainBannerProps = {
  isWhiteColored?: boolean;
  renderTitle: () => React.ReactNode;
  imageUrl: string;
  renderButton: () => React.ReactNode;
};

const MainBanner: React.FC<MainBannerProps> = ({
  isWhiteColored,
  renderTitle,
  imageUrl,
  renderButton
}) => {
  return (
    <div
      className={`${isWhiteColored ? 'bg-white' : 'bg-purple_light_bg'} w-full relative px-8 md:px-[136px] md:py-[100px] flex items-center isolate h-[45rem] md:h-[30rem]`}
    >
      <div className="flex justify-start items-start flex-col gap-10">
        {renderTitle()}
        {renderButton()}
      </div>
      <Image
        width={50}
        height={50}
        className="h-auto w-[40rem] absolute right-0 bottom-0 md:top-0 -z-10"
        src={imageUrl}
        alt="Banner"
      />
    </div>
  );
};

export default MainBanner;
