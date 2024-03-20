import React from 'react';
import Image from 'next/image';
import GROUP_PHOTO from '@/assets/images/group-photo2.svg';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import Accordion from '@/components/molecules/specifics/avrast/Accordion';
import ButtonMenu from '@/components/molecules/specifics/avrast/ButtonMenu';
import DownloadFileButton from '@/components/molecules/specifics/avrast/DownloadFileButton';
import Disclaimer from '@/components/molecules/specifics/avrast/PerformaInvestasi/Disclaimer';

const PDFData = [
  {
    title: 'Avrist Syariah Equity',
    fileType: 'PDF'
  },
  {
    title: 'Avrist Syariah Equity',
    fileType: 'PDF'
  },
  {
    title: 'Avrist Syariah Equity',
    fileType: 'PDF'
  }
];

const Content = () => {
  return (
    <div className="z-[1] w-full bg-purple_dark -mt-1">
      <Image
        alt="GROUP"
        src={GROUP_PHOTO}
        className="rounded-t-[65px] w-full object-fill h-auto -mt-20 md:mt-0"
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
            Performa Investasi
          </h1>
          <h2 className="font-karla text-[28px] 2xl:text-[36px]">
            Perkembangan informasi kinerja produk asuransi{' '}
            <span className="font-bold">Avrist Assurance</span>
          </h2>
        </section>

        <section className="flex flex-col gap-3">
          <Accordion
            bgColor="bg-purple_light_bg"
            title="Informasi Nilai Unit"
            description="Untuk kemudahan transaksi, silakan unduh formulir berdasarkan jenis transaksi yang diperlukan."
          ></Accordion>

          <Accordion
            bgColor="bg-purple_light_bg"
            title="Kinerja Investasi"
            description="Untuk kemudahan transaksi, silakan unduh formulir berdasarkan jenis transaksi yang diperlukan."
          >
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

          <Accordion
            bgColor="bg-purple_light_bg"
            title="Tabel Suku Bunga"
            description="Untuk kemudahan transaksi, silakan unduh formulir berdasarkan jenis transaksi yang diperlukan."
          ></Accordion>
        </section>

        <section className="mt-10">
          <Disclaimer />
        </section>
      </div>
      <RoundedFrameBottom />
    </div>
  );
};

export default Content;
