import React from 'react';
import { CardMenuDownload } from '../../KelolaPolis/MainContentComponent/CardMenu';
import Icon from '@/components/atoms/Icon';

const data = [
  {
    category: 'Asuransi Jiwa Individu'
  },
  {
    category: 'Asuransi Jiwa Korporasi'
  },
  {
    category: 'Avrist Syariah'
  },
  {
    category: 'Avrist DPLK'
  }
];

export const ReportList = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(
    data[0].category
  );

  return (
    <div className={`w-full flex flex-col justify-center relative pt-20`}>
      <div className="w-full flex md:flex-row xs:flex-col">
        <div className="xs:hidden md:block">
          <div
            className={`flex flex-col bg-purple_light_bg rounded-lg w-[200px]`}
          >
            {data.map((val, idx) => (
              <div
                key={idx}
                role="button"
                onClick={() => {
                  setSelectedCategory(val.category);
                }}
                className={`${idx === 0 && 'rounded-tl-lg'} ${idx + 1 === data.length && 'rounded-bl-lg'} ${selectedCategory !== val.category && 'opacity-50'} border-l-8 border-l-purple_dark p-4 font-semibold text-purple_dark`}
              >
                {val.category}
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-3/4 xs:w-full flex flex-col gap-4 ml-[48px]">
          <div>
            {/* filter */}
            <div className="flex flex-row justify-between mb-[24px]">
              <div className="text-purple_dark border-1 px-[5px] py-[8px] rounded-md border-purple_dark">
                <select>
                  <option value="" disabled selected>
                    Pilih Tahun
                  </option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
              </div>
              <div>
                <input
                  placeholder="Cari Laporan"
                  className="w-[365px] py-[8px] px-[16px] rounded-xl bg-purple_dark/5"
                />
                <button className="py-[8px] px-[20px] bg-purple_dark text-white rounded-md ml-[12px]">
                  Cari
                </button>
              </div>
            </div>
            {/* list */}
            <div>
              {[1, 2, 3, 4, 5].map((i) => (
                <div className="mt-[12px]" key={i.toString()}>
                  <CardMenuDownload desc={`LAPORAN PENGADUAN ${i}`} />
                </div>
              ))}
            </div>
            {/* paginate */}
            <div className="flex flex-row justify-between mt-[24px]">
              <span>
                Menampilkan{' '}
                <span className="font-bold text-purple_dark">1-5</span> dari{' '}
                <span className="font-bold">20</span> hasil
              </span>
              <div className="grid grid-cols-5 gap-3 items-center">
                <span className="font-bold text-purple_dark cursor-pointer">
                  1
                </span>
                <span className="cursor-pointer">2</span>
                <span className="cursor-pointer">3</span>
                <span className="cursor-pointer">4</span>
                <span className="cursor-pointer">
                  <Icon name="chevronRight" color="purple_dark" height={15} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
