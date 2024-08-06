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
      className={`${customClassName} relative w-full md:auto z-0 overflow-hidden ${bottomImage ? 'h-[24rem] sm:h-[35.5rem]' : 'xs:h-[9.375rem] md:h-[12rem]'}`}
    >
      <div className="w-full flex items-center">
        <div
          className={`w-full flex sm:flex-row xs:flex-row-reverse justify-between px-[2rem] md:px-[8.5rem] items-center xs:pt-[2rem] md:pt-[0.5rem]`}
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
                  className={`font-opensanspro text-footer-subtitle line-clamp-1 text-white ${index === breadcrumbsData.length - 1 ? 'font-bold cursor-default pointer-events-none' : ''}`}
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
      {imageUrl && !imageUrl.includes('no-image') ? (
        <Image
          className={`-z-[2] w-full top-0 absolute object-cover object-bottom h-[90px]`}
          alt="Avrist"
          src={imageUrl ?? HERO_IMAGE}
          width={100}
          height={100}
        />
      ) : (
        <div
          className={`-z-[2] w-full top-0 absolute object-cover object-bottom h-[90px] bg-purple_soft`}
        ></div>
      )}
      {bottomImage && (
        <div className="-z-[1] w-full top-[5.25rem] sm:top-[5.5rem] absolute h-full lg:h-[50vh]">
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
