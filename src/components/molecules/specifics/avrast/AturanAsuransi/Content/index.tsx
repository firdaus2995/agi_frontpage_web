import React, { useState } from 'react';
import Button from '@/components/atoms/Button/Button';
import ButtonMenuVertical from '@/components/molecules/specifics/avrast/ButtonMenuVertical';

const title = [
  'Hak - Hak Nasabah',
  'Kewajiban Nasabah',
  'Cara Avrist Life Tangani Keluhan Nasabah',
  'Hoax Cek'
];

const Content = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className="bg-purple_dark -mt-1">
      <div className="bg-white pt-[100px] px-[32px] md:px-[136px] pb-2 rounded-t-[65px] flex xs:flex-col md:flex-row justify-between gap-10">
        <ButtonMenuVertical
          item={[
            {
              title: 'Hak Nasabah',
              onClick: () => {
                setTab(0);
              }
            },
            {
              title: 'Kewajiban Nasabah',
              onClick: () => {
                setTab(1);
              }
            },
            {
              title: 'Cara Avrist Life Tangani Keluhan Nasabah',
              onClick: () => {
                setTab(2);
              }
            },
            {
              title: 'Hoax Cek',
              onClick: () => {
                setTab(3);
              }
            }
          ]}
          outerClass="xs:w-full md:w-[18%]"
        />
        <div className="xs:w-full md:w-[82%] flex flex-col gap-8">
          <h1 className="xs:text-2xl md:text-4xl font-karla text-purple_dark font-medium">
            {title[tab]}
          </h1>
          <h2 className="xs:text-4xl md:text-[50px] font-karla font-bold">
            Pahami Bareng untuk Mendapatkan Manfaat dan Pelayanan Terbaik
          </h2>
          <div className="flex flex-col gap-8">
            <span className="flex flex-col gap-4">
              <p className="font-bold text-xl">
                1. Lorem ipsum dolor sit amet consectetur.{' '}
              </p>
              <p className="text-xl">
                Quis non est egestas urna. Dictum pellentesque iaculis at tellus
                tortor sit dis nunc. Volutpat dictum venenatis non eget et.
                Augue tortor aliquam sapien ultricies egestas phasellus
                venenatis pulvinar. Consectetur magna dignissim turpis est ut et
                sapien.{' '}
              </p>
            </span>
            <span className="flex flex-col gap-4">
              <p className="font-bold text-xl">
                2. Lorem ipsum dolor sit amet consectetur.{' '}
              </p>
              <p className="text-xl">
                Quis non est egestas urna. Dictum pellentesque iaculis at tellus
                tortor sit dis nunc. Volutpat dictum venenatis non eget et.
                Augue tortor aliquam sapien ultricies egestas phasellus
                venenatis pulvinar. Consectetur magna dignissim turpis est ut et
                sapien.{' '}
              </p>
            </span>
            <span className="flex flex-col gap-4">
              <p className="font-bold text-xl">
                3. Lorem ipsum dolor sit amet consectetur.{' '}
              </p>
              <p className="text-xl">
                Quis non est egestas urna. Dictum pellentesque iaculis at tellus
                tortor sit dis nunc. Volutpat dictum venenatis non eget et.
                Augue tortor aliquam sapien ultricies egestas phasellus
                venenatis pulvinar. Consectetur magna dignissim turpis est ut et
                sapien.{' '}
              </p>
            </span>
            <span className="flex flex-col gap-4">
              <p className="font-bold text-xl">
                4. Lorem ipsum dolor sit amet consectetur.{' '}
              </p>
              <p className="text-xl">
                Quis non est egestas urna. Dictum pellentesque iaculis at tellus
                tortor sit dis nunc. Volutpat dictum venenatis non eget et.
                Augue tortor aliquam sapien ultricies egestas phasellus
                venenatis pulvinar. Consectetur magna dignissim turpis est ut et
                sapien.{' '}
              </p>
            </span>
          </div>
          <div className="p-4 border border-gray_light rounded-xl flex xs:flex-col md:flex-row justify-between xs:items-start md:items-center gap-4">
            <p className="font-bold text-xl text-purple_dark">
              Kami berkomitmen menyelesaikan masalah adil dan konsisten{' '}
            </p>
            <Button customButtonClass="bg-purple_dark text-white">
              Ajukan Pengaduan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
