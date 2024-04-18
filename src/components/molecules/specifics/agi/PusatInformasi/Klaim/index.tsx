import React from 'react';
import Accordion from '@/components/molecules/specifics/agi/Accordion';
import DownloadFileButton from '@/components/molecules/specifics/agi/DownloadFileButton';
import SearchBox from '@/components/molecules/specifics/agi/SearchBox';

const PDFData = [
  {
    title: 'Formulir Klaim - Heavy Equipment',
    fileType: 'PDF'
  },
  {
    title: 'Formulir Klaim - Liability',
    fileType: 'PDF'
  },
  {
    title: 'Formulir Klaim - Marine Cargo',
    fileType: 'PDF'
  },
  {
    title: 'Formulir Klaim - Motor',
    fileType: 'PDF'
  },
  {
    title: 'Formulir Klaim - Property',
    fileType: 'PDF'
  }
];

const Klaim = () => {
  return (
    <div className="flex flex-col gap-4 mb-10 mx-[32px] md:mx-[136px]">
      <section className="w-full flex flex-col items-center text-center my-[60px]">
        <h1 className="font-karla text-[48px] 2xl:text-[56px]">
          <span className="text-purple_dark font-medium">Transparansi</span> dan{' '}
          <span className="text-purple_dark font-medium">efisiensi</span> dalam
          menangani permohonan klaim nasabah.
        </h1>
      </section>

      <SearchBox onSearch={() => {}} placeHolder="Cari Formulir" />
      <div className="flex flex-col gap-3">
        <Accordion
          bgColor="bg-purple_light_bg"
          title="Pengajuan Klaim"
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
            </>
          </Accordion.Item>
        </Accordion>

        <Accordion
          bgColor="bg-purple_light_bg"
          title="E-Claim"
          description="Untuk kemudahan transaksi, silakan unduh formulir berdasarkan jenis transaksi yang diperlukan."
        >
          <Accordion.Item>
            <Accordion title="Formulir" />
            <Accordion title="Buku Panduan" />
          </Accordion.Item>
        </Accordion>

        <Accordion
          bgColor="bg-purple_light_bg"
          title="Auction Spare Part"
          description="Untuk kemudahan transaksi, silakan unduh formulir berdasarkan jenis transaksi yang diperlukan."
        >
          <Accordion.Item>
            <Accordion title="Formulir" />
            <Accordion title="Buku Panduan" />
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Klaim;
