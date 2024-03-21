'use client';

import React from 'react';
import Image from 'next/image';
import FAMILY_4 from '@/assets/images/family-4.svg';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import Accordion from '@/components/molecules/specifics/avrast/Accordion';
import ButtonMenu from '@/components/molecules/specifics/avrast/ButtonMenu';
import ButtonMenuVertical from '@/components/molecules/specifics/avrast/ButtonMenuVertical';
import DownloadFileButton from '@/components/molecules/specifics/avrast/DownloadFileButton';
import SearchBox from '@/components/molecules/specifics/avrast/SearchBox';

const PDFData = [
  {
    title: 'Formulir Pengembalian atau Pengalihan Premi atau Kontribusi',
    fileType: 'PDF'
  },
  {
    title: 'Formulir Pengembalian atau Pengalihan Premi atau Kontribusi',
    fileType: 'PDF'
  },
  {
    title: 'Formulir Pengembalian atau Pengalihan Premi atau Kontribusi',
    fileType: 'PDF'
  },
  {
    title: 'Formulir Pengembalian atau Pengalihan Premi atau Kontribusi',
    fileType: 'PDF'
  },
  {
    title: 'Formulir Pengembalian atau Pengalihan Premi atau Kontribusi',
    fileType: 'PDF'
  }
];

const Form = () => {
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
      onClick: () => {}
    },
    {
      title: 'Avrist DPLK',
      onClick: () => {}
    }
  ];

  return (
    <div className="z-[1] w-full bg-purple_dark -mt-1">
      <Image
        className="rounded-t-[65px] w-full object-fill h-auto -mt-20 md:mt-0"
        alt="gambar-produk-individu"
        src={FAMILY_4}
      />
      <div className="bg-white pt-[100px] px-[32px] md:px-[136px] pb-2">
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
            Kebutuhan formulir dan buku panduan Anda
          </h1>
          <h2 className="font-karla text-[28px] 2xl:text-[36px]">
            <span className="font-bold">Baca</span>,{' '}
            <span className="font-bold">pilih</span>,{' '}
            <span className="font-bold">unduh</span>,{' '}
            <span className="font-bold">isi</span>, dan{' '}
            <span className="font-bold">kirim</span> atau diskusikan dengan
            Kami!
          </h2>
        </section>

        <section className="mb-2">
          <div className="flex xs:flex-col md:flex-row gap-10">
            <div className="xs:w-[100%] md:w-[23%] h-full bg-purple_light_bg rounded-xl">
              <ButtonMenuVertical item={btnVerticalData} />
            </div>
            <div className="xs:w-[100%] md:w-[77%] -mt-3">
              <SearchBox onSearch={() => {}} placeHolder="Cari Formulir" />
              <div className="flex flex-col gap-3">
                <Accordion
                  bgColor="bg-purple_light_bg"
                  title="Pembayaran Premi/Kontribusi"
                  description="Untuk kemudahan transaksi, silakan unduh formulir berdasarkan jenis transaksi yang diperlukan."
                >
                  <Accordion.Item>
                    <>
                      <Accordion title="Formulir">
                        <Accordion.Item>
                          {PDFData.map((item, index) => (
                            <DownloadFileButton
                              title={item.title}
                              fileType={item.fileType}
                              key={index}
                            />
                          ))}
                        </Accordion.Item>
                      </Accordion>
                      <Accordion title="Buku Panduan" />
                    </>
                  </Accordion.Item>
                </Accordion>

                <Accordion
                  bgColor="bg-purple_light_bg"
                  title="Pelayanan Polis"
                  description="Untuk kemudahan transaksi, silakan unduh formulir berdasarkan jenis transaksi yang diperlukan."
                >
                  <Accordion.Item>
                    <Accordion title="Formulir" />
                    <Accordion title="Buku Panduan" />
                  </Accordion.Item>
                </Accordion>

                <Accordion
                  bgColor="bg-purple_light_bg"
                  title="Klaim"
                  description="Untuk kemudahan transaksi, silakan unduh formulir berdasarkan jenis transaksi yang diperlukan."
                >
                  <Accordion.Item>
                    <Accordion title="Formulir" />
                    <Accordion title="Buku Panduan" />
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </div>
      <RoundedFrameBottom />
    </div>
  );
};

export default Form;
