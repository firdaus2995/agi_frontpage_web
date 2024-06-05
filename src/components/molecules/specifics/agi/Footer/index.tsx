'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconWrapper from './components/IconWrapper';
import AGI_LOGO from '@/assets/images/agi-logo.svg';
import FOOTER_IMAGE from '@/assets/images/footer-image.svg';
import Icon from '@/components/atoms/Icon';

const additionalInfo = [
  {
    title: 'Syarat Penggunaan',
    href: '/syarat-penggunaan'
  },
  {
    title: 'Keamanan Online',
    href: '/keamanan-online'
  },
  {
    title: 'Kebijakan Cookie',
    href: '/kebijakan-cookies'
  }
];

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
          src={AGI_LOGO}
        />
        {/* Main Content */}
        <div className="lg:grid lg:grid-cols-[minmax(10rem,_30rem)_minmax(8rem,_1fr)_1fr_1fr] mt-8 lg:gap-16 gap-10 flex flex-col">
          {/* Opening content */}
          <div className="flex flex-col gap-4 lg:gap-10">
            <p className="font-semibold">
              PT Avrist General Insurance berizin dan diawasi oleh Otoritas Jasa
              Keuangan.
            </p>
            <p className="text-xs font-extralight">
              Hak Cipta © 2023.
              <br />
              PT Avrist General insurance.
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
            <p className="font-bold">Hubungi AvGen</p>
            <div className="text-sm flex flex-col gap-4 justify-between h-full">
              <div>
                <a
                  href="tel:+6281119601000"
                  className="font-semibold text-base"
                >
                  0811 1960 1000
                </a>
              </div>
              <div>
                <p className="font-semibold text-base">Layanan Nasabah</p>
                <a href="tel:+62215740381" className="text-lg">
                  (021) 574 0381
                </a>
              </div>
              <div>
                <p className="font-semibold text-base">Email</p>
                <a href="mailto:avrist.general@avrist.com">
                  avrist.general@avrist.com
                </a>
              </div>
            </div>
          </div>

          {/* Product content */}
          <div className="flex flex-col gap-4">
            <p className="font-bold">Produk</p>
            <div className="flex flex-col gap-1 h-full text-sm font-light">
              <Link href={'/produk?tab=Asuransi+Kendaraan'}>
                <p className="hover:text-purple_light cursor-pointer">
                  Asuransi Kendaraan
                </p>
              </Link>
              <Link href={'/produk?tab=Asuransi+Harta+Benda'}>
                <p className="hover:text-purple_light cursor-pointer">
                  Asuransi Harta Benda
                </p>
              </Link>
              <Link href={'/produk?tab=Asuransi+Kecelakaan+Diri'}>
                <p className="hover:text-purple_light cursor-pointer">
                  Asuransi Kecelakaan Diri
                </p>
              </Link>
              <Link href={'/produk?tab=Asuransi+Rekayasa'}>
                <p className="hover:text-purple_light cursor-pointer">
                  Asuransi Rekayasa
                </p>
              </Link>
              <Link href={'/produk?tab=Asuransi+Pengangkutan+Barang'}>
                <p className="hover:text-purple_light cursor-pointer">
                  Asuransi Pengangkutan Barang
                </p>
              </Link>
              <Link href={'/produk?tab=Asuransi+Aneka'}>
                <p className="hover:text-purple_light cursor-pointer">
                  Asuransi Aneka
                </p>
              </Link>
              <Link href={'/produk?tab=Asuransi+Tanggung+Gugat'}>
                <p className="hover:text-purple_light cursor-pointer">
                  Asuransi Tanggung Gugat
                </p>
              </Link>
              <Link href={'/produk?tab=Asuransi+Mikro'}>
                <p className="hover:text-purple_light cursor-pointer">
                  Asuransi Mikro
                </p>
              </Link>
              <Link href={'/produk?tab=Asuransi+Perjalanan'}>
                <p className="hover:text-purple_light cursor-pointer">
                  Asuransi Perjalanan
                </p>
              </Link>
            </div>
          </div>

          {/* Investation content */}
          <div className="flex flex-col gap-4">
            <p className="font-bold">Quick Links</p>
            <div className="flex flex-col gap-2 h-full">
              <Link href="/tanya-avgen">
                <div className="text-xs flex flex-col gap-2 font-light whitespace-nowrap">
                  <p className="text-base font-semibold">Tanya AvGen</p>
                </div>
              </Link>
              <Link href="/pusat-informasi/pusat-informasi?tab=Formulir+Penutupan">
                <p className="font-semibold">Formulir</p>
              </Link>
              <Link href="/hubungi-kami/hubungi-kami?tab=Karir">
                <p className="font-semibold">Karir</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Separator */}
        <div className="border-solid border-purple_separator border-b my-8"></div>
        {/* Bottom content */}
        <div className="flex md:flex-row flex-col justify-between md:gap-4 gap-8 flex-wrap">
          {/* Additional information */}
          <div className="flex md:flex-row flex-col justify-between gap-2 md:gap-4 md:items-center items-start sm:divide-x-2 sm:divide-x-0">
            {additionalInfo.map((item, index) => (
              <React.Fragment key={index}>
                <Link href={item.href}>
                  <span className="font-bold text-lg ml-4">{item.title}</span>
                </Link>
              </React.Fragment>
            ))}
          </div>
          {/* Social media */}
          <div className="flex items-center gap-4">
            <IconWrapper>
              <Link
                href={'https://id.linkedin.com/company/avristassurance'}
                target="blank"
              >
                <Icon name="linkedInIcon" color="white" />
              </Link>
            </IconWrapper>
            <IconWrapper>
              <Link
                href={'https://www.instagram.com/avristsolution/'}
                target="blank"
              >
                <Icon name="instaIcon" color="white" />
              </Link>
            </IconWrapper>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
