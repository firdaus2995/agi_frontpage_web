import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/atoms/Button/Button';

interface IFooterInformation {
  title: ReactElement;
  buttonTitle?: string;
  image: string;
  buttonVariant?: string;
  bgColor?: string;
  href?: string;
}

// button variants: primary, secondary

const FooterInformation = ({
  title,
  buttonTitle,
  image,
  buttonVariant,
  href,
  bgColor
}: IFooterInformation) => {
  return (
    <div className="w-full flex px-[32px] py-[50px] sm:px-[136px] sm:py-[72px] bg-avrast_product_bg justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 rounded-[24px] bg-white overflow-hidden">
        <div
          className={`flex flex-col gap-[24px] justify-center p-[36px] ${bgColor}`}
        >
          <div>{title}</div>
          {buttonTitle && (
            <Link
              href={href ?? ''}
              className="flex justify-center sm:justify-start"
            >
              <Button
                customButtonClass={
                  !buttonVariant || buttonVariant === 'primary'
                    ? '!bg-purple_dark'
                    : buttonVariant === 'secondary'
                      ? ''
                      : ''
                }
                customTextClass={
                  !buttonVariant || buttonVariant === 'primary'
                    ? 'text-white font-medium'
                    : buttonVariant === 'secondary'
                      ? ''
                      : ''
                }
                title={buttonTitle}
              />
            </Link>
          )}
        </div>
        <div className="flex rounded-r-[24px]">
          <Image
            height={0}
            width={0}
            alt="footerInformationImage"
            className="min-h-[400px] w-full object-cover"
            src={image}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterInformation;
