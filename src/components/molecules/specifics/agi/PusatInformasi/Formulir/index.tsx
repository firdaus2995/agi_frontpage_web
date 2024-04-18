'use client';
import React from 'react';
import Icon from '@/components/atoms/Icon';
import DownloadFileButton from '@/components/molecules/specifics/agi/DownloadFileButton';
import SearchBox from '@/components/molecules/specifics/agi/SearchBox';

const PDFData = [
  {
    title: 'Formulir-Pembukaan-Rumah-Avrist-Hom.pdf',
    fileType: 'PDF'
  },
  {
    title: 'Formulir-Pembukaan-Rumah-Avrist-Hom.pdf',
    fileType: 'PDF'
  },
  {
    title: 'Formulir-Pembukaan-Rumah-Avrist-Hom.pdf',
    fileType: 'PDF'
  },
  {
    title: 'Formulir-Pembukaan-Rumah-Avrist-Hom.pdf',
    fileType: 'PDF'
  },
  {
    title: 'Formulir-Pembukaan-Rumah-Avrist-Hom.pdf',
    fileType: 'PDF'
  }
];

const Formulir = () => {
  return (
    <div className="flex flex-col gap-4 mb-10 mx-[32px] md:mx-[136px]">
      <section className="w-full flex flex-col items-center text-center my-[60px]">
        <h1 className="font-karla text-[48px] 2xl:text-[56px]">
          Temukan{' '}
          <span className="font-medium text-purple_dark">
            formulir yang Anda butuhkan
          </span>{' '}
          di bawah ini
        </h1>
      </section>

      <SearchBox onSearch={() => {}} placeHolder="Cari Formulir" />
      <div className="flex flex-col gap-3">
        {PDFData.map((item, index) => (
          <DownloadFileButton
            title={item.title}
            fileType={item.fileType}
            key={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-between">
        <p className="text-xl">
          Menampilkan <span className="font-bold text-purple_dark">1-5</span>{' '}
          dari <span className="font-bold">50</span> hasil
        </p>
        <div className="flex flex-row gap-2 items-center">
          <p className="text-xl">
            <span className="font-bold text-purple_dark">1</span> 2 3 4 5 ... 10{' '}
          </p>
          <Icon
            width={20}
            height={20}
            name="chevronRight"
            color="purple_dark"
          />
        </div>
      </div>
    </div>
  );
};

export default Formulir;
