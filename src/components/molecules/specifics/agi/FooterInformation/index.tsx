import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import Button from '@/components/atoms/Button/Button';
// import Icon from '@/components/atoms/Icon';

interface IFooterInformation {
  title: ReactElement;
  subtitle?: ReactElement;
  buttonTitle?: string;
  image: string;
  buttonImage?: string;
  buttonVariant?: string;
  customButtonClass?: string;
  customButtonTextClass?: string;
  bgColor?: string;
  href?: string;
}

// button variants: primary, secondary

const FooterInformation = ({
  title,
  subtitle,
  image,
  buttonTitle,
  buttonVariant,
  buttonImage,
  customButtonClass,
  customButtonTextClass,
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
          <div className="flex flex-col">
            {buttonTitle && (
              <Link
                href={href ?? ''}
                className="flex justify-center sm:justify-start"
              >
                <div
                  role="button"
                  className={`${customButtonClass} text-4xl border p-4 ${buttonVariant === 'primary' ? 'bg-purple_dark text-white' : buttonVariant === 'secondary' ? 'bg-white text-purple_dark border-purple_dark' : 'bg-purple_dark text-white'} px-10 rounded-md text-sm font-semibold flex flex-row gap-2 justify-center`}
                >
                  {buttonImage && (
                    <Image
                      src={buttonImage}
                      alt="btnImage"
                      width={48}
                      height={48}
                    />
                  )}

                  <p className={customButtonTextClass}>{buttonTitle}</p>
                </div>
              </Link>
            )}
            {subtitle && (
              <div
                className={`mt-2 ${customButtonClass?.includes('w-full') && 'text-center'}`}
              >
                {subtitle}
              </div>
            )}
          </div>
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
