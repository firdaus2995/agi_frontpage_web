'use client';
import React, { useState } from 'react';
import Bank from './Bank';
import Bengkel from './Bengkel';
import ButtonMenuVertical from '@/components/molecules/specifics/agi/ButtonMenuVertical';
import SearchBox from '@/components/molecules/specifics/agi/SearchBox';

const Rekanan = () => {
  const [tab, setTab] = useState('Bengkel');
  const btnVerticalData = [
    {
      title: 'Bengkel',
      onClick: () => {
        setTab('Bengkel');
      }
    },
    {
      title: 'Bank',
      onClick: () => {
        setTab('Bank');
      }
    }
  ];

  return (
    <div className="flex flex-col gap-4 mb-10 mx-[32px] md:mx-[136px]">
      <section className="w-full flex flex-col items-center text-center my-[60px]">
        <h1 className="font-karla text-[48px] 2xl:text-[56px]">
          Temukan{' '}
          <span className="font-medium text-purple_dark">
            Daftar Rekanan yang Anda butuhkan
          </span>{' '}
          di bawah ini
        </h1>
      </section>

      {tab === 'Bengkel' && (
        <SearchBox onSearch={() => {}} placeHolder="Cari Formulir" />
      )}
      <div className="flex xs:flex-col md:flex-row gap-10">
        <div className="xs:w-[100%] md:w-[23%] h-full bg-purple_light_bg rounded-xl">
          <ButtonMenuVertical item={btnVerticalData} />
        </div>
        <div className="xs:w-[100%] md:w-[77%]">
          {tab === 'Bengkel' ? <Bengkel /> : <Bank />}
        </div>
      </div>
    </div>
  );
};

export default Rekanan;
