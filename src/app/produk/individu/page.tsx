'use client';

import React, { useEffect, useState } from 'react';
import { Menu } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import AsuransiJiwa from './tabs/AsuransiJiwa';
import AsuransiKecelakaan from './tabs/AsuransiKecelakaan';
import AsuransiKesehatan from './tabs/AsuransiKesehatan';
import AsuransiTambahan from './tabs/AsuransiTambahan';

import BLANK_IMAGE from '@/assets/images/blank-image.svg';
import CUSTOMER_SERVICE from '@/assets/images/common/customer-service.svg';
import DOCUMENT_SEARCH from '@/assets/images/common/document-search.svg';
import EMAIL from '@/assets/images/common/email.svg';
import MESSAGE from '@/assets/images/common/message.svg';

import ButtonSmall from '@/components/atoms/ButtonSmall';
import ButtonSmallWithCheck from '@/components/atoms/ButtonSmallWithCheck';
import Icon from '@/components/atoms/Icon';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';

import { ParamsProps } from '@/utils/globalTypes';

const IndividuProduk: React.FC<ParamsProps> = () => {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState('Asuransi Jiwa');

  useEffect(() => {
    const value = searchParams.get('tab');
    if (value !== null) {
      setTab(value);
    }
  }, [searchParams]);

  const buttonHelper = [
    {
      type: 'button-checkbox',
      label: 'Via Tenaga Pasar',
      href: '',
      variant: ''
    },
    { type: 'button-checkbox', label: 'Via Pialang' },
    { type: 'button-checkbox', label: 'Via Institusi Keuangan' }
  ];

  return (
    <div className="flex flex-col">
      <Hero
        title={tab}
        breadcrumbsData={[
          { title: 'Beranda', href: '/' },
          { title: tab, href: '#' }
        ]}
      />
      <Image src={BLANK_IMAGE} alt="" className="w-full" />
      <div className="flex flex-col px-[32px] lg:px-[136px] py-[50px] lg:py-[72px] gap-[36px] lg:gap-[48px] lg:flex-row">
        {/* start content */}
        <div className="flex flex-col gap-[24px] grow">
          <div className="flex flex-col gap-5 justify-between">
            <div className="flex flex-row justify-between gap-5">
              {/* start button */}
              <div className="w-full flex flex-nowrap overflow-x-scroll lg:overflow-x-hidden py-1">
                <div className="w-full grid grid-cols-3 gap-[12px]">
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
              {/* start button */}

              {/* start search */}
              <div className="flex flex-row gap-[12px] w-full">
                <input
                  placeholder="Cari"
                  className="focus:outline-none w-full px-[16px] py-[8px] rounded-[12px] bg-purple_dark/[.06]"
                />
                <ButtonSmall title="Cari" />
              </div>
              {/* end search */}
            </div>

            <div className="flex flex-nowrap overflow-x-scroll lg:overflow-x-hidden py-1">
              <Menu>
                {/* {({ open }) => (
                  <> */}
                <Menu.Button className="w-full border border-purple_dark rounded-md">
                  <div className="flex flex-row justify-between py-2 px-4 items-center">
                    <p className="text-purple_dark font-medium">Semua Produk</p>
                    <Icon
                      width={10}
                      height={10}
                      name="chevronDown"
                      color="purple_dark"
                    />
                  </div>
                </Menu.Button>
                {/* </>
                )} */}
              </Menu>
            </div>
            {/* end button */}
          </div>

          {tab === 'Asuransi Jiwa' && <AsuransiJiwa />}
          {tab === 'Asuransi Kesehatan' && <AsuransiKesehatan />}
          {tab === 'Asuransi Kecelakaan' && <AsuransiKecelakaan />}
          {tab === 'Asuransi Tambahan' && <AsuransiTambahan />}
          <div className="flex flex-col gap-4 lg:flex-row justify-between">
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

      <FooterInformation
        title={
          <p className="text-[36px] lg:text-[56px] text-center lg:text-left">
            Ada yang bisa{' '}
            <span className="font-bold text-purple_dark">AvGen</span> bantu
            untuk Anda?
          </p>
        }
        buttonTitle="Tanya AvGen"
        image={BLANK_IMAGE}
      />

      <FooterCards
        bgColor="bg-cta4_bg"
        cards={[
          {
            title: 'Layanan Nasabah',
            subtitle: '021 5789 8188',
            icon: CUSTOMER_SERVICE
          },
          {
            title: 'Tanya Avrista',
            subtitle: 'Lebih Lanjut',
            icon: MESSAGE
          },
          {
            title: 'Tanya Lewat Email',
            subtitle: 'Kirim Email',
            icon: EMAIL
          },
          {
            title: 'Prosedur Pengaduan',
            subtitle: 'Lihat Prosedur',
            icon: DOCUMENT_SEARCH
          }
        ]}
      />
    </div>
  );
};

export default IndividuProduk;
