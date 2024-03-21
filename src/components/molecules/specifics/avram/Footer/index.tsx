import React from 'react';
import Image from 'next/image';
import IconWrapper from './components/IconWrapper';
import AVRIST_LOGO from '@/assets/images/avrist-logo.svg';
import FOOTER_IMAGE from '@/assets/images/footer-image.svg';
import REKSADANA_IMAGE from '@/assets/images/reksadana-logo.svg';
import WHATSAPP_IMAGE from '@/assets/images/whatsapp-image.svg';
import Icon from '@/components/atoms/Icon';

const Footer = () => {
  return (
    // Margin top can not be put in here because there are pages that --
    // requires the most bottom part to touch the footer (e.g. Bandingkan produk page)
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
              PT Avrist Asset Management berizin dan diawasi oleh Otoritas Jasa
              Keuangan.
            </p>
            <p className="text-xs font-extralight">
              Hak Cipta © 2023.
              <br />
              PT Avrist Asset Management.
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
            <p className="font-bold">Hubungi Kami</p>
            <div className="text-sm flex flex-col gap-4 justify-between h-full">
              <div>
                <p className="font-semibold text-base">Tanya Avram</p>
                <p className="font-semibold text-lg">0811 1960 1000</p>
              </div>
              <div>
                <p className="font-semibold text-base">Layanan Nasabah</p>
                <p>(021) 5789 8188</p>
              </div>
              <div>
                <p className="font-semibold text-base">Email</p>
                <p>service@avram.com</p>
              </div>
              <p className="font-semibold text-base">Lokasi Avram</p>
            </div>
          </div>

          {/* Investation content */}
          <div className="flex flex-col gap-4">
            <p className="font-bold">Investasi</p>
            <div className="flex flex-col gap-4 justify-between h-full">
              <div className="text-xs flex flex-col gap-2 font-light whitespace-nowrap">
                <p className="text-base font-semibold">Reksa Dana</p>
                <p>Reksa Dana Saham</p>
                <p>Reksa Dana Campuran</p>
                <p>Reksa Dana Pendapatan Tetap</p>
                <p>Reksa Dana Pasar Uang</p>
              </div>
              <div>
                <p className="font-semibold">Avrampedia</p>
              </div>
              <div>
                <p className="font-semibold">Kalkulator</p>
              </div>
            </div>
          </div>

          {/* Quick links content */}
          <div className="flex flex-col gap-4 whitespace-nowrap">
            <p className="font-bold">Quick Links</p>
            <div className="flex flex-col gap-4 justify-between h-full">
              <p className="font-semibold">FAQs</p>
              <p className="font-semibold">Formulir</p>
              <p className="font-semibold">Karir</p>
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
              <Icon name="linkedInIcon" color="white" />
            </IconWrapper>
            <IconWrapper>
              <Icon name="tiktokIcon" color="white" />
            </IconWrapper>
            <IconWrapper>
              <Icon name="facebookIcon" color="white" />
            </IconWrapper>
            <IconWrapper>
              <Icon name="instaIcon" color="white" />
            </IconWrapper>
          </div>
        </div>
      </div>
      <Image
        alt="Whatsapp"
        height={0}
        width={0}
        className="absolute bottom-full right-0 translate-y-1/2 aspect-square w-[8rem] md:w-[10rem]"
        src={WHATSAPP_IMAGE.src}
      />
    </footer>
  );
};

export default Footer;
