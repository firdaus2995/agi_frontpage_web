'use client';

import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

import HERO_IMAGE from '@/assets/images/hero-image.svg';

interface IHero {
  title: string;
  breadcrumbsData: {
    title: string;
    href: string;
  }[];
  bottomImage?: StaticImport | string;
  imageUrl?: string;
  customClassName?: string;
}

const Hero: React.FC<IHero> = ({
  title,
  breadcrumbsData,
  bottomImage,
  imageUrl,
  customClassName
}) => {
  return (
    <div
      className={`${customClassName} relative w-full md:auto z-0 overflow-hidden ${bottomImage ? 'h-[26.25rem] sm:h-[38.5rem]' : 'xs:h-[9.375rem] md:h-[18.75rem]'}`}
    >
      <div className="w-full flex items-center">
        <div
          className={`w-full flex sm:flex-row xs:flex-row-reverse justify-between px-[2rem] md:px-[8.5rem] items-center xs:pt-[2.5rem] md:pt-[3.75rem]`}
        >
          <div className="line-clamp-1 md:w-[60%]">
            <p className="hidden sm:block font-karla text-white text-[1.125rem] sm:text-[3rem] font-light">
              {title}
            </p>
          </div>

          <span className="flex flex-row gap-2 md:w-[40%] md:justify-end items-center h-full">
            {breadcrumbsData.map((item, index) => (
              <React.Fragment key={index}>
                <Link
                  href={item.href}
                  className={`font-opensanspro text-footer-subtitle text-white ${index === breadcrumbsData.length - 1 ? 'font-bold cursor-default pointer-events-none' : ''}`}
                >
                  {item.title}
                </Link>
                {index < breadcrumbsData.length - 1 && (
                  <span className="w-[0.063rem] h-[1.125rem] bg-[#AA95B4]" />
                )}
              </React.Fragment>
            ))}
          </span>
        </div>
      </div>
      <Image
        className={`-z-[2] w-full top-0 absolute object-cover object-bottom ${bottomImage ? 'h-[9.375rem] sm:h-[17.5rem]' : 'lg:h-[15.625rem] xs:h-[150px]'}`}
        alt="Avrist"
        src={imageUrl ?? HERO_IMAGE}
        width={100}
        height={100}
      />
      {bottomImage && (
        <div className="-z-[1] w-full top-[6.25rem] sm:top-[12.5rem] absolute h-[50vh]">
          <Image
            className="w-full h-full object-cover"
            alt="gambar-produk-individu"
            width={0}
            height={0}
            src={bottomImage}
          />
        </div>
      )}
    </div>
  );
};

export default Hero;
