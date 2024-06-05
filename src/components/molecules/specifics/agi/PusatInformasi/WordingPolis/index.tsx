'use client';
import React from 'react';
import Icon from '@/components/atoms/Icon';
import DownloadFileButton from '@/components/molecules/specifics/agi/DownloadFileButton';
import SearchBox from '@/components/molecules/specifics/agi/SearchBox';

const PDFData = [
  {
    title: 'Wording Polis dan Klausula Asuransi Kendaraan Bermotor.pdf',
    fileType: 'PDF'
  },
  {
    title: 'Wording Polis dan Klausula Asuransi Kendaraan Bermotor.pdf',
    fileType: 'PDF'
  },
  {
    title: 'Wording Polis dan Klausula Asuransi Kendaraan Bermotor.pdf',
    fileType: 'PDF'
  },
  {
    title: 'Wording Polis dan Klausula Asuransi Kendaraan Bermotor.pdf',
    fileType: 'PDF'
  },
  {
    title: 'Wording Polis dan Klausula Asuransi Kendaraan Bermotor.pdf',
    fileType: 'PDF'
  }
];

const WordingPolis = () => {
  return (
    <div className="flex flex-col gap-4 px-[2rem] md:px-[8.5rem] pb-[3.25rem]">
      <section className="w-full flex flex-col items-center text-center my-[64px]">
        <h1 className="font-karla text-[2.25rem] md:text-[3.5rem] text-purple_dark">
          Wording Polis dan Klausula Asuransi
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

export default WordingPolis;
