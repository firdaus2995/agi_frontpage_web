import { ReactElement } from 'react';
import Image from 'next/image';
import PlayButton from '@/assets/images/play-button.svg';
import Button from '@/components/atoms/Button/Button';

interface ISliderInformation {
  title: ReactElement;
  buttonTitle?: string;
  image: string;
  isVideo?: boolean;
  bgColor?: string;
}

const SliderInformation = ({
  title,
  buttonTitle,
  image,
  isVideo,
  bgColor,
}: ISliderInformation) => {
  return (
    <div className="flex px-[136px] py-[72px] bg-white w-full">
      <div className={`grid grid-cols-2 rounded-[24px] ${bgColor ? `bg-${bgColor}` : 'bg-white'} border`}>
        <div className="flex flex-col gap-[24px] items-start justify-center p-[36px]">
          <div>{title}</div>
          {buttonTitle && <Button title={buttonTitle} />}
        </div>
        <div className="flex relative">
          <Image
            height={0}
            width={0}
            alt="sliderInformationImage"
            className="min-h-[400px] w-full object-cover"
            src={image}
          />
          {isVideo && (
            <div className="w-full h-full absolute flex items-center justify-center">
              <Image alt={'play-button'} className="w-16" src={PlayButton} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SliderInformation;
