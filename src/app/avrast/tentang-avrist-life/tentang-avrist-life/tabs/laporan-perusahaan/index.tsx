import { useState } from 'react';
import Image from 'next/image';
import BlankImage from '@/assets/images/blank-image.svg';
import Phone from '@/assets/images/common/phone.svg';
import Button from '@/components/atoms/Button/Button';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import MediumTag from '@/components/atoms/Tag/MediumTag';
import CategoryWithThreeCards from '@/components/molecules/specifics/avrast/CategoryWithThreeCards';
import FooterInformation from '@/components/molecules/specifics/avrast/FooterInformation';

const LaporanPerusahaan = () => {
  const [category, setCategory] = useState('Laporan Keuangan');
  return (
    <div className="w-full flex flex-col gap-4 bg-white justify-center">
      <div className="flex flex-col gap-4">
        <div className="w-full flex flex-col items-center justify-center py-2 text-center">
          <h2 className="text-[56px] font-bold mb-6 text-purple_dark">
            Laporan Perusahaan
          </h2>
          <h2 className="text-[36px] mb-6">
            Temukan semua laporan yang kamu butuhkan di sini.
          </h2>
        </div>
        <CategoryWithThreeCards
          defaultSelectedCategory={category}
          onCategoryChange={(tab) => setCategory(tab)}
          filterRowLayout={true}
          categories={[
            'Laporan Keuangan',
            'Laporan Berkelanjutan',
            'Laporan Tata Kelola Perusahaan'
          ]}
          tabs={
            category === 'Laporan Keuangan'
              ? [
                  {
                    type: 'dropdown',
                    label: 'tahun',
                    options: [
                      { label: 'Pilih Tahun', value: 'option1' },
                      { label: 'Option 2', value: 'option2' },
                      { label: 'Option 3', value: 'option3' }
                    ]
                  },
                  {
                    type: 'dropdown',
                    label: 'Bulan',
                    options: [
                      { label: 'Pilih Bulan', value: 'option1' },
                      { label: 'Option 2', value: 'option2' },
                      { label: 'Option 3', value: 'option3' }
                    ]
                  }
                ]
              : [
                  {
                    type: 'dropdown',
                    label: 'tahun',
                    options: [
                      { label: 'Pilih Tahun', value: 'option1' },
                      { label: 'Option 2', value: 'option2' },
                      { label: 'Option 3', value: 'option3' }
                    ]
                  }
                ]
          }
          searchPlaceholder="Cari laporan"
          customContent={
            category === 'Laporan Keuangan' ? (
              <div className="grid grid-cols-1 gap-[24px]">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-row justify-between items-center p-4 border rounded-xl"
                  >
                    <div className="flex flex-row gap-2 items-center">
                      <p className="font-bold">Laporan Keuangan_Q1_2024</p>
                      <MediumTag title="PDF" />
                    </div>
                    <Button
                      title="Unduh"
                      customButtonClass="rounded-xl bg-purple_dark"
                      customTextClass="text-white"
                    />
                  </div>
                ))}
              </div>
            ) : category === 'Laporan Berkelanjutan' ? (
              <div className="grid grid-cols-1 gap-[24px] w-full">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-row justify-between items-center p-4 border rounded-xl"
                  >
                    <div className="flex flex-row gap-2 items-center">
                      <p className="font-bold">Laporan Berkelanjutan_Q1_2024</p>
                      <MediumTag title="PDF" />
                    </div>
                    <Button
                      title="Unduh"
                      customButtonClass="rounded-xl bg-purple_dark"
                      customTextClass="text-white"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-[24px] w-full">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-row justify-between items-center p-4 border rounded-xl"
                  >
                    <div className="flex flex-row gap-2 items-center">
                      <p className="font-bold">
                        Laporan Tata Kelola Perusahaan_Q1_2024s
                      </p>
                      <MediumTag title="PDF" />
                    </div>
                    <Button
                      title="Unduh"
                      customButtonClass="rounded-xl bg-purple_dark"
                      customTextClass="text-white"
                    />
                  </div>
                ))}
              </div>
            )
          }
        />
      </div>
      <div className="flex flex-col w-full">
          <RoundedFrameBottom />
          <FooterInformation
            bgColor='bg-gray_bglightgray'
            title={
              <div className="flex flex-col items-center justify-center gap-4 bg-gray_bglightgray">
                <p className="text-[56px] font-bold">
                  Hubungi Kami
                </p>
                <div
                  role="button"
                  className="p-4 border border-purple_dark rounded-xl w-full flex flex-row items-center justify-center gap-2 text-purple_dark text-2xl font-bold bg-white"
                >
                  <Image src={Phone} alt='phone' className='w-10' />
                  <p>021 5789 8188</p>
                </div>
                <p><span className='font-bold'>Waktu Operasional:</span> Senin - Jumat, 08.00 - 17.00 WIB</p>
              </div>
            }
            image={BlankImage}
          />
          <RoundedFrameTop />
        </div>
    </div>
  );
};

export default LaporanPerusahaan;
