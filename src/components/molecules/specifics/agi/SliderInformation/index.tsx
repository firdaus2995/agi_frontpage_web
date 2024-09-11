import { ReactElement, useState } from 'react';
import Image from 'next/image';
import BlankImage from '@/assets/images/blank-image.svg';
import PlayButton from '@/assets/images/play-button.svg';
import Button from '@/components/atoms/Button/Button';
import { VideoModal } from '@/components/molecules/specifics/agi/Modal/VideoModal';
import { getYouTubeId } from '@/utils/helpers';

interface ISliderInformation {
  title: ReactElement;
  buttonTitle?: string;
  image: string;
  isVideo?: boolean;
  bgColor?: string;
  imageClassName?: string;
}

const SliderInformation = ({
  title,
  buttonTitle,
  image,
  isVideo,
  bgColor,
  imageClassName
}: ISliderInformation) => {
  const imageUrl = isVideo
    ? `https://img.youtube.com/vi/${getYouTubeId(image)}/hqdefault.jpg`
    : image;

  const [show, setShow] = useState(false);

  return (
    <div className="xs:mx-[5px] lg:mx-[5px]">
      {/* Desktop */}
      <div className="flex pt-[80px] pb-[16px] bg-white w-full xs:hidden lg:block">
        <div
          className={`grid grid-cols-2 rounded-[24px] ${bgColor ? `bg-${bgColor}` : 'bg-white'} border xs:max-lg:flex-wrap xs:max-lg:flex xs:max-lg:grid-cols-1`}
        >
          <div className="flex flex-col gap-[24px] items-start justify-center py-[36px] px-[24px]">
            <div>{title}</div>
            {buttonTitle && <Button title={buttonTitle} />}
          </div>
          <div
            className={`flex relative ${isVideo && 'cursor-pointer'}`}
            onClick={() => isVideo && setShow(true)}
          >
            <Image
              height={0}
              width={0}
              alt="sliderInformationImage"
              className={`h-[360px] w-full object-cover ${imageClassName} rounded-r-3xl`}
              src={imageUrl !== '' ? imageUrl : BlankImage}
            />
            {isVideo && (
              <div className="w-full h-full absolute flex items-center justify-center">
                <Image alt={'play-button'} className="w-16" src={PlayButton} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex py-[1.5rem] bg-white w-full lg:hidden">
        <div
          className={`w-full min-h-[480px] grid grid-cols-1 rounded-[24px] ${bgColor ? `bg-${bgColor}` : 'bg-white'} border`}
        >
          <div
            className={`flex relative ${isVideo && 'cursor-pointer'}`}
            onClick={() => isVideo && setShow(true)}
          >
            <div className='flex w-full h-[200px]'>
              <Image
                height={0}
                width={0}
                alt="sliderInformationImage"
                className={`w-full object-cover rounded-t-3xl`}
                src={imageUrl !== '' ? imageUrl : BlankImage}
              />
            </div>
            {isVideo && (
              <div className="w-full h-full absolute flex items-center justify-center">
                <Image alt={'play-button'} className="w-16" src={PlayButton} />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-[24px] items-start justify-center py-[2.25rem] px-[1.5rem] bg-purple_superlight rounded-b-3xl">
            <div>{title}</div>
            {buttonTitle && <Button title={buttonTitle} />}
          </div>
        </div>
      </div>

      <VideoModal
        show={show}
        onClose={() => {
          setShow(!show);
        }}
        videoUrl={getYouTubeId(image) ?? ''}
      />
    </div>
  );
};

export default SliderInformation;
