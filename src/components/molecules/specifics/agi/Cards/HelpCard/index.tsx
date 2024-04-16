import { ReactElement } from 'react';
import Image from 'next/image';

interface HelpCardProps {
  title: ReactElement;
  buttonTitle: string;
  cardClassname?: string;
  buttonClassname?: string;
  buttonTextClassname?: string;
  image: string;
}

const HelpCard = ({
  title,
  buttonTitle,
  cardClassname,
  buttonClassname,
  buttonTextClassname,
  image
}: HelpCardProps) => {
  return (
    <div className="flex px-[32px] py-[50px] sm:px-[136px] sm:py-[72px]">
      <div
        className={`${cardClassname} grid grid-cols-1 sm:grid-cols-2 rounded-[24px] overflow-hidden`}
      >
        <div className="flex flex-col gap-[24px] justify-center p-[36px]">
          <div>{title}</div>
          <div className="flex justify-center sm:justify-start">
            <button
              className={`${buttonClassname} rounded-[8px] hover:shadow-lg px-[40px] py-[14px] w-[fit-content]`}
            >
              <p className={`${buttonTextClassname} font-semibold text-[20px]`}>
                {buttonTitle}
              </p>
            </button>
          </div>
        </div>
        <div className="flex">
          <Image
            height={0}
            width={0}
            alt="HelpCardImage"
            className="min-h-[400px] w-full object-cover"
            src={image}
          />
        </div>
      </div>
    </div>
  );
};

export default HelpCard;
