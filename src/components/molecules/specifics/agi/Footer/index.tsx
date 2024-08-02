'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconWrapper from './components/IconWrapper';
import AGI_LOGO from '@/assets/images/agi-logo.svg';
import FOOTER_IMAGE from '@/assets/images/footer-image.svg';
import WHATSAPP_IMAGE from '@/assets/images/whatsapp-image.svg';
import Icon from '@/components/atoms/Icon';
import { getListGlobalConfig } from '@/services/global-config.api';

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
  const [globalConfig, setGlobalConfig] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const globalConfig = await getListGlobalConfig();
      setGlobalConfig(globalConfig.data.configs);
    };

    fetchData();
  }, []);

  const getLink = (value: string) => {
    if (globalConfig.length === 0) {
      return '';
    }

    const foundItem = globalConfig.filter(
      (item: { variable: string }) => item.variable === value
    )[0];

    if (foundItem) {
      let linkValue = foundItem.value;
      if (linkValue.startsWith('0')) {
        linkValue = '62' + linkValue.slice(1);
      }
      return linkValue;
    }

    return '';
  };

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
            <p className="font-bold font-opensanspro text-footer-title">
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
            <p className="font-bold font-opensanspro text-footer-title">Hubungi AvGen</p>
            <div className="text-sm flex flex-col gap-4 justify-between h-full">
              <div>
                <a
                  href="tel:+62812842422"
                  className="font-semibold font-karla text-footer-phone"
                >
                  0812 8424 22
                </a>
              </div>
              <div>
                <p className="font-semibold font-opensanspro text-footer-subtitle">Layanan Nasabah</p>
                <a href="tel:+62215740381" className="text-footer-list">
                  (021) 574 0381
                </a>
              </div>
              <div>
                <p className="font-semibold font-opensanspro text-footer-subtitle">Email</p>
                <a href="mailto:avrist.general@avrist.com" className='text-footer-list'>
                  avrist.general@avrist.com
                </a>
              </div>
              <div>
                <a
                  href="/pusat-informasi/pusat-informasi?tab=Kantor+Cabang"
                  className="font-semibold font-opensanspro text-footer-subtitle whitespace-normal"
                >
                  Lokasi Avrist General Insurance
                </a>
              </div>
            </div>
          </div>

          {/* Product content */}
          <div className="flex flex-col gap-4">
            <p className="font-bold font-opensanspro text-footer-title">Produk</p>
            <div className="flex flex-col gap-2 h-full text-sm font-light">
              <Link href={'/produk?tab=Asuransi+Kendaraan'}>
                <p className="hover:text-purple_light cursor-pointer text-footer-list">
                  Asuransi Kendaraan
                </p>
              </Link>
              <Link href={'/produk?tab=Asuransi+Harta+Benda'}>
                <p className="hover:text-purple_light cursor-pointer text-footer-list">
                  Asuransi Harta Benda
                </p>
              </Link>
              <Link href={'/produk?tab=Asuransi+Kecelakaan+Diri'}>
                <p className="hover:text-purple_light cursor-pointer text-footer-list">
                  Asuransi Kecelakaan Diri
                </p>
              </Link>
              <Link href={'/produk?tab=Asuransi+Rekayasa'}>
                <p className="hover:text-purple_light cursor-pointer text-footer-list">
                  Asuransi Rekayasa
                </p>
              </Link>
              <Link href={'/produk?tab=Asuransi+Pengangkutan+Barang'}>
                <p className="hover:text-purple_light cursor-pointer text-footer-list">
                  Asuransi Pengangkutan Barang
                </p>
              </Link>
              <Link href={'/produk?tab=Asuransi+Aneka'}>
                <p className="hover:text-purple_light cursor-pointer text-footer-list">
                  Asuransi Aneka
                </p>
              </Link>
              <Link href={'/produk?tab=Asuransi+Tanggung+Gugat'}>
                <p className="hover:text-purple_light cursor-pointer text-footer-list">
                  Asuransi Tanggung Gugat
                </p>
              </Link>
              <Link href={'/produk?tab=Asuransi+Mikro'}>
                <p className="hover:text-purple_light cursor-pointer text-footer-list">
                  Asuransi Mikro
                </p>
              </Link>
              <Link href={'/produk?tab=Asuransi+Perjalanan'}>
                <p className="hover:text-purple_light cursor-pointer text-footer-list">
                  Asuransi Perjalanan
                </p>
              </Link>
            </div>
          </div>

          {/* Investation content */}
          <div className="flex flex-col gap-4">
            <p className="font-bold font-opensanspro text-footer-title">Quick Links</p>
            <div className="flex flex-col gap-2 h-full">
              <Link href="/tanya-avgen">
                <div className="text-xs flex flex-col gap-2 font-light whitespace-nowrap">
                  <p className="text-base font-semibold font-opensanspro text-footer-subtitle">Tanya AvGen</p>
                </div>
              </Link>
              <Link href="/pusat-informasi/pusat-informasi?tab=Formulir+Penutupan">
                <p className="font-semibold font-opensanspro text-footer-subtitle">Formulir</p>
              </Link>
              <Link href="/hubungi-kami?tab=Karir">
                <p className="font-semibold font-opensanspro text-footer-subtitle">Karir</p>
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
                  <span className="font-bold text-footer-link ml-4">{item.title}</span>
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
      <Link
        href={`https://api.whatsapp.com/send?phone=${getLink('phoneAGI')}`}
        target="_blank"
      >
        <Image
          alt="Whatsapp"
          height={0}
          width={0}
          className="absolute bottom-full right-10 translate-y-1/2 aspect-square w-[6rem] sm:w-[10rem]"
          src={WHATSAPP_IMAGE.src}
        />
      </Link>
    </footer>
  );
};

export default Footer;
