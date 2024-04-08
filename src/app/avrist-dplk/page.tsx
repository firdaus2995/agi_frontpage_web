'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Link as LinkScroll } from 'react-scroll';

import DewanPengawasDPLK from './tabs/DewanPengawasDPLK';
import KlaimDanLayanan from './tabs/KlaimDanLayanan';
import ManfaatUtama from './tabs/ManfaatUtama';
import Produk from './tabs/Produk';
import TentangAvristDPLK from './tabs/TentangAvristDPLK';

import ProdukEmail from '@/assets/images/avrast/component/proses-klaim/step-4-icon-1.svg';
import ProdukNasabah from '@/assets/images/avrast/component/proses-klaim/step-4-icon-3.svg';
import ProdukTanya from '@/assets/images/avrast/component/proses-klaim/step-4-icon-4.svg';
import HeroDplk1 from '@/assets/images/avrast/dplk/hero-dplk-1.svg';
import HeroDplk2 from '@/assets/images/avrast/dplk/hero-dplk-2.svg';
import HeroDplk4 from '@/assets/images/avrast/dplk/hero-dplk-4.svg';
import BlankImage from '@/assets/images/blank-image.svg';
import ProdukClaim from '@/assets/images/produk-claim.svg';
import ProdukPolis from '@/assets/images/produk-polis.svg';
import ProdukRumahSakit from '@/assets/images/produk-rumah-sakit.svg';
import ProdukTestimoni from '@/assets/images/produk-testimoni.svg';

import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import HelpCard from '@/components/molecules/specifics/avrast/Cards/HelpCard';

import SimpleContainer from '@/components/molecules/specifics/avrast/Containers/Simple';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import Hero from '@/components/molecules/specifics/avrast/Hero';

import { ParamsProps } from '@/utils/globalTypes';

const AvristSyariah: React.FC<ParamsProps> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [tab, setTab] = useState('');

  const handleTabClick = (tabs: string) => {
    setTab(tabs);
    router.push(pathname + '?' + createQueryString('tab', tabs), {
      scroll: false
    });
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const value = searchParams.get('tab');
    if (value !== null) {
      setTab(value);
    }
  }, [searchParams]);

  const tabs = [
    'Tentang Avrist DPLK',
    'Dewan Pengawas DPLK',
    'Manfaat Utama',
    'Produk',
    'Klaim dan Layanan'
  ];

  return (
    <div>
      <Hero
        title={tab}
        breadcrumbsData={[
          { title: 'Beranda', href: '/' },
          { title: tab, href: '#' }
        ]}
        bottomImage={
          tab === 'Produk'
            ? HeroDplk2
            : tab === 'Klaim dan Layanan'
              ? HeroDplk4
              : HeroDplk1
        }
      />
      <div className="flex flex-col justify-center mx-[32px] my-[50px] sm:mx-[136px] sm:my-[72px] gap-[64px]">
        <div className="flex flex-nowrap w-full justify-between gap-2 items-stretch">
          {tabs.map((val, idx) => (
            <LinkScroll
              key={idx}
              to={'#' + val.replace(/\s+/g, '')}
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onClick={() => handleTabClick(val)}
              className={`flex justify-center items-center w-full min-h-full border-1 rounded-lg px-[15px] py-[8px] cursor-pointer text-center align-middle border-dplk_yellow hover:bg-dplk_yellow hover:text-white ${tab === val ? 'bg-dplk_yellow text-white' : 'text-black'} font-semibold`}
            >
              <span className="font-semibold text-[16px]">{val}</span>
            </LinkScroll>
          ))}
        </div>
        {tab === 'Tentang Avrist DPLK' && <TentangAvristDPLK />}
        {tab === 'Dewan Pengawas DPLK' && <DewanPengawasDPLK />}
        {tab === 'Manfaat Utama' && <ManfaatUtama />}
        {tab === 'Produk' && <Produk />}
        {tab === 'Klaim dan Layanan' && <KlaimDanLayanan />}
      </div>

      <RoundedFrameBottom bgColor="bg-white" frameColor="bg-gray_bglightgray" />
      <SimpleContainer>
        <HelpCard
          title={
            <p className="text-[56px] text-black">
              <span className="font-bold">Hello,</span> Ada yang bisa{' '}
              <span className="font-bold">Avrista</span> bantu?
            </p>
          }
          cardClassname="bg-dplk_yellow"
          buttonClassname="bg-white border border-white"
          buttonTextClassname="text-dplk_yellow"
          buttonTitle="Tanya Avrista"
          image={BlankImage}
        />
      </SimpleContainer>
      <RoundedFrameTop bgColor="bg-white" frameColor="bg-white" />
      {tabs.includes('Klaim dan Layanan') ? (
        <FooterCards
          cards={[
            {
              title: 'Layanan Nasabah',
              icon: ProdukNasabah,
              subtitle: '021 5789 8188'
            },
            {
              title: 'Tanya Avrista',
              icon: ProdukTanya,
              subtitle: 'Lebih Lanjut'
            },
            {
              title: 'Tanya Lewat Email',
              icon: ProdukEmail,
              subtitle: 'Kirim Email'
            },
            {
              title: 'Prosedur Pengaduan',
              icon: ProdukTestimoni,
              subtitle: 'Lihat Prosedur'
            }
          ]}
        />
      ) : (
        <FooterCards
          cards={[
            {
              title: 'Rumah Sakit Rekanan',
              icon: ProdukRumahSakit
            },
            {
              title: 'Klaim & Layanan',
              icon: ProdukClaim,
              subtitle: 'Lebih Lanjut'
            },
            {
              title: 'Kelola Polis',
              icon: ProdukPolis,
              subtitle: 'Login Akun'
            },
            {
              title: 'Testimonial',
              icon: ProdukTestimoni,
              subtitle: 'Lebih Lanjut'
            }
          ]}
        />
      )}
    </div>
  );
};

export default AvristSyariah;
