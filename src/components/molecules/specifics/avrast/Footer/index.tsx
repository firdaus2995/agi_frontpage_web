'use client';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import IconWrapper from './components/IconWrapper';
import APPSTORE from '@/assets/images/avrast/appstore.svg';
import GOOGLEPLAY from '@/assets/images/avrast/googleplay.svg';
import AVRIST_LOGO from '@/assets/images/avrast/logo.svg';
import FOOTER_IMAGE from '@/assets/images/footer-image.svg';
import REKSADANA_IMAGE from '@/assets/images/reksadana-logo.svg';
import Icon from '@/components/atoms/Icon';

const Footer = () => {
  const pathname = usePathname();
  if (pathname.includes('/under-construction')) return null;
  return (
    <footer className="bg-gradient-to-b from-purple_soft to-purple_dark text-white relative">
      <div className="md:p-16 p-8">
        <Image
          alt="Avrist"
          width={0}
          height={0}
          className="h-auto w-[10rem]"
          src={AVRIST_LOGO}
        />
        {/* Main Content */}
        <div className="lg:grid lg:grid-cols-[minmax(10rem,_30rem)_minmax(8rem,_1fr)_1fr_1fr] mt-8 lg:gap-16 gap-10 flex flex-col">
          {/* Opening content */}
          <div className="flex flex-col gap-4 lg:gap-10">
            <p className="font-semibold">
              PT Avrist Assurance berizin dan diawasi oleh Otoritas Jasa
              Keuangan.
            </p>
            <p className="text-xs font-extralight">
              Hak Cipta © 2023.
              <br />
              PT Avrist Life Insurance.
            </p>
            <Image
              width={0}
              height={0}
              alt="Avrist"
              className="h-auto min-w-[5rem] max-w-[25rem] w-full"
              src={FOOTER_IMAGE}
            />
          </div>

          {/* Communication content */}
          <div className="flex flex-col gap-4 whitespace-nowrap">
            <p className="font-bold text-space_purpink">Tanya Avrista</p>
            <div className="text-sm flex flex-col gap-4 justify-between h-full">
              <div>
                <p className="font-semibold text-base">Layanan Nasabah</p>
                <a href='tel:+622157898188' className="font-semibold text-lg">021 5789 8188</a>
              </div>
              <div>
                <p className="font-semibold text-base">Waktu Operasional</p>
                <p>Senin - Jumat, 08.00 - 17.00 WIB</p>
              </div>
              <div>
                <p className="font-semibold text-base">Email</p>
                <a href='mailto:service@avrist.com'>service@avrist.com</a>
              </div>
            </div>
          </div>

          {/* Investation content */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-space_purpink">Quick Links</p>
            <div className="flex flex-col gap-2 h-full">
              <div className="text-xs flex flex-col gap-2 font-light whitespace-nowrap">
                <p className="text-base font-semibold">Asuransi Jiwa</p>
              </div>
              <div>
                <p className="font-semibold">Investasi</p>
              </div>
              <div>
                <p className="font-semibold">Bengkel Rekanan</p>
              </div>
              <div>
                <p className="font-semibold">Avrist Total Solution</p>
              </div>
              <div className="flex flex-row gap-2">
                <Image
                  alt="Google Play"
                  width={0}
                  height={0}
                  className="h-auto w-28"
                  src={GOOGLEPLAY}
                />
                <Image
                  alt="App Store"
                  width={0}
                  height={0}
                  className="h-auto w-28"
                  src={APPSTORE}
                />
              </div>
            </div>
          </div>

          {/* Quick links content */}
          <div className="flex flex-col gap-4 whitespace-nowrap">
            <p className="font-bold text-space_purpink">Avrist Group</p>
            <div className="flex flex-col gap-4 justify-between h-full">
              <p className="font-semibold">Avrist Life Insurance</p>
              <p className="font-semibold">Avrist Asset Management</p>
              <p className="font-semibold">Avrist General Insurance</p>
              <Image
                alt="Reksadana"
                width={0}
                height={0}
                className="h-auto min-w-[8rem] max-w-[15rem]"
                src={REKSADANA_IMAGE}
              />
            </div>
          </div>
        </div>
        {/* Separator */}
        <div className="border-solid border-purple_separator border-b my-8"></div>
        {/* Bottom content */}
        <div className="flex md:flex-row flex-col justify-between md:gap-4 gap-8 flex-wrap">
          {/* Additional information */}
          <div className="flex md:flex-row flex-col justify-between gap-2 md:gap-4 md:items-center items-start">
            {['Syarat Penggunaan', 'Keamanan Online', 'Kebijakan Cookie'].map(
              (item, index) => (
                <React.Fragment key={index}>
                  <span className="font-semibold">{item}</span>
                  {index < 2 && (
                    <div className="opacity-1 border-solid border-l border-white opacity-50 self-stretch" />
                  )}
                </React.Fragment>
              )
            )}
          </div>
          {/* Social media */}
          <div className="flex items-center gap-4">
            <IconWrapper>
              <Icon name="youtubeIcon" color="white" />
            </IconWrapper>
            <IconWrapper>
              <Icon name="linkedInIcon" color="white" />
            </IconWrapper>
            <IconWrapper>
              <Icon name="instaIcon" color="white" />
            </IconWrapper>
            <IconWrapper>
              <Icon name="facebookIcon" color="white" />
            </IconWrapper>
            <IconWrapper>
              <Icon name="tiktokIcon" color="white" />
            </IconWrapper>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
