import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import Button from '@/components/atoms/Button/Button';

interface IFooterInformation {
  title: ReactElement;
  buttonTitle?: string;
  image: string;
  buttonVariant?: string;
  bgColor?: string;
  href?: string;
  outerClassName?: string;
  openInNewTab?: boolean;
}

// button variants: primary, secondary

const FooterInformation = ({
  title,
  buttonTitle,
  image,
  buttonVariant,
  href,
  bgColor,
  outerClassName,
  openInNewTab
}: IFooterInformation) => {
  return (
    <div
      className={`w-full lg:px-[8.5rem] lg:pt-[6.25rem] lg:pb-[7.5rem] xs:px-[2rem] xs:py-[3.125rem] bg-avrast_product_bg justify-center ${outerClassName}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[24px] bg-white overflow-hidden">
        <div
          className={`xs:px-[1.5rem] xs:pb-[2.25rem] xs:min-h-[212px] lg:h-auto flex flex-col gap-[24px] lg:justify-center py-[2.25rem] lg:pl-[3rem] lg:pr-[2.25rem] xs:text-center lg:text-start ${bgColor}`}
        >
          <div className="text-information-title-mobile lg:text-information-title-desktop">{title}</div>
          {buttonTitle && (
            <div className="w-auto">
              <Link
                href={href ?? ''}
                target={openInNewTab ? '_blank' : '_self'}
              >
                {/* <Button
                customButtonClass={
                  !buttonVariant || buttonVariant === 'primary'
                    ? '!bg-purple_dark'
                    : buttonVariant === 'secondary'
                      ? 'bg-white'
                      : buttonVariant === 'syariah'
                        ? 'bg-white hover:bg-syariah_green hover:text-white border-none'
                        : ''
                }
                customTextClass={`text-[20px] text-white
                  ${
                    !buttonVariant || buttonVariant === 'primary'
                      ? 'text-white font-semibold'
                      : buttonVariant === 'secondary'
                        ? ''
                        : buttonVariant === 'syariah'
                          ? 'text-syariah_green font-semibold hover:text-white'
                          : ''
                  }
                `}
                title={buttonTitle}
              /> */}
                <button
                  className={`px-[2.5rem] py-[1.125rem] rounded-xl ${
                    !buttonVariant || buttonVariant === 'primary'
                      ? 'bg-purple_dark text-white'
                      : buttonVariant === 'secondary'
                        ? 'bg-white border border-purple_dark text-purple_dark'
                        : buttonVariant === 'syariah'
                          ? 'text-syariah_green bg-white !py-[0.75rem]'
                          : buttonVariant === 'dplk'
                            ? 'text-dplk_yellow bg-white'
                            : ''
                  }`}
                >
                  <p className="font-opensans text-banner-btn-label font-semibold whitespace-nowrap">
                    {buttonTitle}
                  </p>
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="flex rounded-r-[24px]">
          <Image
            height={0}
            width={0}
            alt="footerInformationImage"
            className="min-h-[160px] md:h-[300px] lg:min-h-[392px] w-full object-contain md:object-cover lg:object-cover"
            src={image}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterInformation;
