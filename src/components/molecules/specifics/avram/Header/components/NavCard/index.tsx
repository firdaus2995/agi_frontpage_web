import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { NavbarMenuItemContent } from '../../types';

import ANALISIS from '@/assets/images/navbar-analisis.svg';
import INFORMASI from '@/assets/images/navbar-informasi.svg';
import INVESTASI from '@/assets/images/navbar-investasi.svg';
import KARIR from '@/assets/images/navbar-karir.svg';
import TENTANG from '@/assets/images/navbar-tentang.svg';
import Button from '@/components/atoms/Button/Button';
import { camelToKebabCase } from '@/utils/helpers';

type NavCardProps = {
  content: NavbarMenuItemContent;
  customClass?: string;
};

const TEMPORARY_IMAGE_MAPPING = [
  INVESTASI,
  ANALISIS,
  INFORMASI,
  TENTANG,
  KARIR
];

const NavCard: React.FC<NavCardProps> = ({ content, customClass }) => {
  // This component has become a client component even when there's not a "use client" withint this file.
  // This is because this component has been imported into a Header component that is a client component.
  // Therefore, the usage of useState in this component is justified
  const [shouldForceHideBanner, setShouldForceHideBanner] = useState(false);

  return (
    <div
      className={`${shouldForceHideBanner ? '!opacity-0 !invisible' : ''} font-karla w-full bg-white gap-4 shadow-xl text-gray_body ${customClass ?? ''}`}
    >
      <div className="w-full max-w-[89rem] m-auto flex items-stretch justify-between gap-6 pr-16">
        <div className="max-w-[35rem] w-full flex flex-col justify-center pl-12 py-16">
          <h2 className="text-4xl font-bold text-gray_title">
            {content.title}
          </h2>
          <div className="mt-8 flex justify-between gap-6">
            <div className="flex flex-col gap-6 items-start max-w-[15rem]">
              <p>{content.description}</p>
              <Button title={content.buttonTitle} />
            </div>
            <div className="flex flex-col justify-between">
              {content.subMenus.map((item, index) => (
                <React.Fragment key={index}>
                  <Link
                    href={`/avram/${camelToKebabCase(content.title)}${camelToKebabCase(content.title) === 'analisis' ? '?tab=' : '/'}${camelToKebabCase(item)}`}
                    className={`font-bold ${index === 0 && 'text-purple_dark'}`}
                    onClick={() => {
                      setShouldForceHideBanner(true);
                      setTimeout(() => {
                        setShouldForceHideBanner(false);
                      }, 700);
                    }}
                  >
                    {item}
                  </Link>
                  {index < content.subMenus.length - 1 && (
                    <div className="border-gray_light border-solid border-b" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <Image
          className="h-auto sm:max-w-[20rem] lg:max-w-[30rem] w-full hidden md:inline-block"
          src={
            TEMPORARY_IMAGE_MAPPING[
              content.imageSource as keyof typeof TEMPORARY_IMAGE_MAPPING
            ]
          }
          alt={content.title}
        />
      </div>
    </div>
  );
};

export default NavCard;
