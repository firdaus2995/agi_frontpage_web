'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import AsuransiJiwa from './tabs/AsuransiJiwa';
import AsuransiKecelakaan from './tabs/AsuransiKecelakaan';
import AsuransiKesehatan from './tabs/AsuransiKesehatan';
import AsuransiTambahan from './tabs/AsuransiTambahan';

import GambarProdukIndividu from '@/assets/images/gambar-produk-individu.svg';
import ProdukClaim from '@/assets/images/produk-claim.svg';
import ProdukIndividuImage from '@/assets/images/produk-individu-image.svg';
import ProdukPolis from '@/assets/images/produk-polis.svg';
import ProdukRumahSakit from '@/assets/images/produk-rumah-sakit.svg';
import ProdukTestimoni from '@/assets/images/produk-testimoni.svg';

import ButtonSmall from '@/components/atoms/ButtonSmall';
import ButtonSmallWithCheck from '@/components/atoms/ButtonSmallWithCheck';
import Icon from '@/components/atoms/Icon';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import FooterInformation from '@/components/molecules/specifics/avrast/FooterInformation';
import Hero from '@/components/molecules/specifics/avrast/Hero';

import { ParamsProps } from '@/utils/globalTypes';

const IndividuProduk: React.FC<ParamsProps> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [tab, setTab] = useState('Asuransi Jiwa');
  const [isOpen, setIsOpen] = useState(false);

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
    'Asuransi Jiwa',
    'Asuransi Kesehatan',
    'Asuransi Kecelakaan',
    'Asuransi Tambahan'
  ];

  const buttonHelper = [
    { type: 'button', label: 'Individu', href: '/produk/individu' },
    {
      type: 'button',
      label: 'Korporasi',
      href: '/produk/korporasi',
      variant: 'outlined'
    },
    { type: 'button-checkbox', label: 'Via Online' },
    { type: 'button-checkbox', label: 'Via Bank' },
    { type: 'button-checkbox', label: 'Via Tenaga Pemasar' }
  ];

  return (
    <div className="flex flex-col">
      <Hero
        title={tab}
        breadcrumbsData={[
          { title: 'Beranda', href: '/' },
          { title: tab, href: '#' }
        ]}
        bottomImage={GambarProdukIndividu}
      />
      <div className="flex flex-col px-[32px] sm:px-[136px] py-[50px] sm:py-[72px] gap-[36px] sm:gap-[48px] sm:flex-row">
        {/* start tabs kiri */}
        <div className="sm:block hidden rounded-lg">
          <div className="flex flex-col shrink min-w-[210px] bg-purple_light_bg rounded-r-[12px] rounded-l-[4px] overflow-hidden">
            {tabs.map((val, idx) =>
              tab === val ? (
                <div
                  key={idx}
                  className="border-l-4 border-purple_dark px-[15px] py-[10px] cursor-pointer text-left"
                >
                  <span className="font-bold text-purple_dark text-[18px]">
                    {val}
                  </span>
                </div>
              ) : (
                <div
                  key={idx}
                  role="button"
                  onClick={() => handleTabClick(val)}
                  className="border-l-4 border-purple_mediumlight px-[15px] py-[10px] cursor-pointer text-left"
                >
                  <span className="font-bold text-purple_mediumlight text-[18px]">
                    {val}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
        <div className="relative sm:hidden block">
          <div
            className="flex justify-between items-center border-l-4 border-purple_dark px-[15px] py-[10px] cursor-pointer rounded-lg font-bold text-purple_dark bg-purple_light_bg text-[18px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{tab}</span>
            <div
              className={`transform transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            >
              <Icon name="chevronDown" color="purple_dark" />
            </div>
          </div>
          {isOpen && (
            <div className="absolute w-full mt-1 rounded-lg bg-purple_light_bg shadow-lg">
              {tabs.map((val, idx) => (
                <div
                  key={idx}
                  onClick={() => handleTabClick(val)}
                  className={`border-l-4 px-[15px] py-[10px] cursor-pointer font-bold text-[18px] ${
                    tab === val
                      ? 'border-purple_dark text-purple_dark'
                      : 'border-purple_mediumlight text-purple_mediumlight'
                  }`}
                >
                  {val}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* end tabs kiri */}

        {/* start content */}
        <div className="flex flex-col gap-[24px] grow">
          <div className="flex flex-col gap-5 justify-between">
            {/* start search */}
            <div className="flex flex-row gap-[12px] ">
              <input
                placeholder="Cari"
                className="focus:outline-none w-full px-[16px] py-[8px] rounded-[12px] bg-purple_dark/[.06]"
              />
              <ButtonSmall title="Cari" />
            </div>
            {/* end search */}

            {/* start button */}
            <div className="flex flex-nowrap overflow-x-scroll sm:overflow-x-hidden py-1">
              <div className="flex flex-row gap-[12px] w-full justify-between">
                {buttonHelper.map((item, index) =>
                  item.type === 'button' ? (
                    item.href ? (
                      <Link href={item.href} key={index} className="w-full">
                        <ButtonSmall
                          title={item.label}
                          customClassName="w-full"
                          variant={item.variant}
                        />
                      </Link>
                    ) : null
                  ) : item.type === 'button-checkbox' ? (
                    <ButtonSmallWithCheck
                      key={index}
                      name={item.label}
                      title={item.label}
                    />
                  ) : null
                )}
              </div>
            </div>
            {/* end button */}
          </div>

          {tab === 'Asuransi Jiwa' && <AsuransiJiwa />}
          {tab === 'Asuransi Kesehatan' && <AsuransiKesehatan />}
          {tab === 'Asuransi Kecelakaan' && <AsuransiKecelakaan />}
          {tab === 'Asuransi Tambahan' && <AsuransiTambahan />}
          <div className="flex flex-col gap-4 sm:flex-row justify-between">
            <div>
              <p className="text-[20px]">
                Menampilkan{' '}
                <span className="font-bold text-purple_dark">1-9</span> dari{' '}
                <span className="font-bold">20</span> hasil
              </p>
            </div>
            <div className="flex flex-row gap-[8px] items-center">
              <p className="text-[20px] text-purple_dark font-bold">1</p>
              <p className="text-[20px]">2</p>
              <p className="text-[20px]">3</p>
              <p className="text-[20px]">4</p>
              <Icon name="chevronRight" color="purple_dark" />
            </div>
          </div>
        </div>
      </div>

      <RoundedFrameBottom frameColor="bg-white" />
      <FooterInformation
        title={
          <p className="text-[36px] sm:text-[56px] text-center sm:text-left">
            <span className="font-bold text-purple_dark">Hello,</span> Ada yang
            bisa <span className="font-bold text-purple_dark">Avrista</span>{' '}
            bantu?
          </p>
        }
        buttonTitle="Tanya Avrista"
        image={ProdukIndividuImage}
      />
      <RoundedFrameTop bgColor="bg-white" />
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
    </div>
  );
};

export default IndividuProduk;
