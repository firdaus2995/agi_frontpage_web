import React from 'react';
import Image from 'next/image';
import FAMILY from '@/assets/images/family-3.svg';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import ButtonMenu from '@/components/molecules/specifics/agi/ButtonMenu';
import ButtonMenuVertical from '@/components/molecules/specifics/agi/ButtonMenuVertical';
import Maps from '@/components/molecules/specifics/agi/RSRekanan/Maps';

const Content = () => {
  const btnVerticalData = [
    {
      title: 'Asuransi Jiwa Individu',
      onClick: () => {}
    },
    {
      title: 'Asuransi Jiwa Koperasi',
      onClick: () => {}
    },
    {
      title: 'Avrist Syariah',
      onClick: () => {},
      color: 'text-olive_green'
    }
  ];

  return (
    <div className="z-[1] w-full bg-purple_dark -mt-1">
      <Image
        alt="family"
        src={FAMILY}
        className="rounded-t-[65px] w-full object-fill h-auto -mt-20 lg:mt-0"
      />
      <div className="bg-white pt-[100px] px-[32px] lg:px-[136px] pb-2">
        <ButtonMenu
          buttonList={[
            'Informasi Nasabah',
            'Rumah Sakit Rekanan',
            'Formulir & Buku Panduan',
            'Performa Investasi'
          ]}
        />

        <section className="w-full flex flex-col items-center text-center my-[60px]">
          <h1 className="font-karla text-[48px] 2xl:text-[56px] text-purple_dark font-medium">
            Jaringan rumah sakit di Indonesia
          </h1>
          <h2 className="font-karla text-[28px] 2xl:text-[36px]">
            Temukan lebih dari 1000 rumah sakit rekanan di seluruh Indonesia
          </h2>
        </section>

        <section className="flex xs:flex-col lg:flex-row gap-10">
          <div className="xs:w-[100%] lg:w-[23%]">
            <ButtonMenuVertical item={btnVerticalData} />
          </div>

          <Maps />
        </section>
      </div>
      <RoundedFrameBottom />
    </div>
  );
};

export default Content;
