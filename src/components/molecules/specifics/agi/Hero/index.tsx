'use client';

import React, { ReactNode, useState, useEffect, useRef } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

interface IHero {
  title: string;
  breadcrumbsData: {
    title: string;
    href: string;
  }[];
  bottomImage?: StaticImport | string;
  imageUrl?: string;
  customClassName?: string;
  customComponent?: ReactNode;
  bottomImageFit?: string;
}

const Hero: React.FC<IHero> = ({
  title,
  breadcrumbsData,
  bottomImage,
  imageUrl,
  customClassName,
  customComponent,
  bottomImageFit
}) => {
  const bannerRef: any = useRef<HTMLDivElement>(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  // const tabletSize = 1024;

  useEffect(() => {
    const updateSize = () => {
      if (bannerRef.current) {
        setImageSize({
          width: bannerRef.current.offsetWidth,
          height: bannerRef.current.offsetHeight
        });
      }
    };

    updateSize();

    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, [bannerRef.current]);

  useEffect(() => {
    if (imageSize.width === 0 || imageSize.height === 0) {
      const timer = setTimeout(() => {
        if (bannerRef.current) {
          setImageSize({
            width: bannerRef.current.offsetWidth,
            height: bannerRef.current.offsetHeight
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [imageSize]);

  return (
    <div
      className={`relative w-full md:auto z-0 overflow-hidden ${bottomImage ? 'h-[18rem] sm:h-[35.5rem]' : 'h-[9rem] sm:h-[12rem]'} ${customClassName}`}
      style={{
        marginBottom: imageSize.height < 160 ? -(imageSize.height * 0.6) : 0
      }}
    >
      <div className="w-full flex items-center">
        <div
          className={`w-full flex sm:flex-row xs:flex-row-reverse justify-between px-[2rem] md:px-[8.5rem] items-center xs:pt-[2rem] md:pt-[0.5rem]`}
        >
          <div className="line-clamp-1">
            <p className="hidden sm:block font-karla text-white text-[1.125rem] sm:text-[3rem] font-light">
              {title}
            </p>
          </div>

          <span className="flex flex-row gap-2">
            {breadcrumbsData.map((item, index) => (
              <React.Fragment key={index}>
                <Link
                  href={item.href}
                  className={`line-clamp-1 font-opensans text-white text-[1.125rem] ${index === breadcrumbsData.length - 1 ? 'font-bold cursor-default' : ''}`}
                >
                  {item.title}
                </Link>
                {index < breadcrumbsData.length - 1 && (
                  <span className="w-[0.063rem] h-auto bg-[#AA95B4]" />
                )}
              </React.Fragment>
            ))}
          </span>
        </div>
      </div>
      {imageUrl && !imageUrl.includes('no-image') ? (
        <Image
          className={`-z-[2] w-full top-0 absolute object-cover object-bottom ${bottomImage ? 'h-[9.375rem] sm:h-[17.5rem]' : 'h-[100px]'}`}
          alt="Avrist"
          src={imageUrl ?? ''}
          width={0}
          height={0}
        />
      ) : (
        <div
          className={`-z-[2] w-full top-0 absolute object-cover object-bottom h-[100px] bg-purple_soft`}
        ></div>
      )}
      {bottomImage && (
        <div className="-z-[1] w-full top-[5.25rem] sm:top-[5.5rem] absolute">
          <Image
            ref={bannerRef}
            className={`w-full xs:h-auto sm:h-full md:h-[50vh] ${bottomImageFit === 'proportional_full' ? 'object-fill' : 'object-cover'}`}
            alt="gambar-produk-individu"
            width={0}
            height={0}
            src={bottomImage}
            priority
          />
        </div>
      )}
      {customComponent && (
        <div className="w-full top-[12.5rem] absolute">{customComponent}</div>
      )}
    </div>
  );
};

export default Hero;
