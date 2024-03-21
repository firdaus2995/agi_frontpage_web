import Image from 'next/image';
import Link from 'next/link';
import BlankImage from '@/assets/images/blank-image.svg';
import Icon from '@/components/atoms/Icon';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import CategoryWithThreeCards from '@/components/molecules/specifics/avrast/CategoryWithThreeCards';

const Penghargaan = () => {
  return (
    <div className="w-full flex flex-col gap-4 bg-white justify-center">
      <div className="flex flex-col gap-4">
        <CategoryWithThreeCards
          filterRowLayout={true}
          hiddenCategory
          categoryCard="B"
          categories={['Berita dan Kegiatan', 'AvriStory', 'Avrist Life Guide']}
          tabs={[
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
          ]}
          defaultSelectedCategory={''}
          customContent={
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, index) => (
                <Link
                  key={index}
                  href={
                    'http://localhost:3000/avrast/tentang-avrist-life/tentang-avrist-life/tabs/penghargaan/detail'
                  }
                >
                  <div
                    key={index}
                    className="flex flex-col gap-[18px] border border-gray_light rounded-xl text-left"
                  >
                    <Image
                      alt="blank-image"
                      width={0}
                      height={170}
                      src={BlankImage}
                      className="w-auto rounded-t-[12px]"
                    />
                    <div className="flex flex-col gap-2 p-5">
                      <p className="text-xs">10 January 2023</p>
                      <p className="text-[20px] font-bold">
                        Best Mutual Fund Awards 2023
                      </p>
                      <p className="text-[20px]">Reksa Dana Terbaik 2023</p>
                      <p className="text-xs">
                        Avrist IDX30 (Reksa Dana Indeks & ETF Pasif Periode 5
                        Tahun) & Avrist Ada Kas Mutiara (Reksa Dana Pasar Uang
                        Periode 5 Tahun Aset di Atas Rp10 Miliar - Rp100 Miliar)
                      </p>
                      <div className="flex flex-row items-start gap-1 text-left">
                        <p className="text-purple_dark font-bold text-sm cursor-pointer text-left">
                          Baca Berita Pers
                        </p>
                        <Icon
                          width={16}
                          height={16}
                          name="chevronRight"
                          color="purple_dark"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          }
        />
      </div>
      <RoundedFrameBottom />
    </div>
  );
};

export default Penghargaan;
