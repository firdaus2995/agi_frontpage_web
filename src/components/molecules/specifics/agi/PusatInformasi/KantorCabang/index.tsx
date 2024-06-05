import React from 'react';
import Image from 'next/image';
import { Card } from './Card';
import { CardAddress } from './CardAddress';
import { SearchInput } from './form/Input';
import { Paginate } from './Paginate';
import MAPS from '@/assets/images/maps.svg';

const KantorCabang = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="px-[2rem] md:px-[8.5rem]">
        <p className="font-karla font-bold text-[2.25rem] md:text-[3.5rem] text-center text-purple_dark my-[60px]">
          Lokasi Kantor Cabang Avrist General Assurance
        </p>
        <Card className="bg-white p-[1.5rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <span className="font-opensans font-bold text-[24px]">
              Kantor Cabang
            </span>
            <SearchInput placeholder="Cari Lokasi Kantor Cabang" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-x-[12px] gap-y-[24px] mt-[24px]">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <CardAddress
                key={i.toString()}
                title="RSIA Bunda Jakarta"
                address="Jl. Teuku Cik Ditiro No.28, Menteng, Jakarta Pusat"
                contact="(021) 5789 8188"
              />
            ))}
          </div>
          <Paginate className="mt-[24px]" />
        </Card>
      </div>
      <div className="bg-gray_bglightgray px-[2rem] md:px-[8.5rem] py-[3.125rem] md:py-[6.25rem] flex flex-col gap-[2rem] md:gap-[4rem]">
        <p className="font-karla font-bold text-[2.25rem] md:text-[3.5rem] text-center text-purple_dark">
          Lokasi Kantor Avrist General Assurance
        </p>
        <Card className="bg-white p-[1.5rem] grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <CardAddress
            title="Kantor Pusat Jakarta"
            address="World Trade Center II Lt. 7 & 8, Jl. Jenderal Sudirman Jl. Setiabudi Raya Kav 29-31, RT.8/RW.3"
            workHour="Senin-Jumat 10.00 - 14.00 WIB"
            contact="(021) 5789 8188"
          />

          <Card className="md:col-span-2">
            <Image
              src={MAPS}
              className="w-full h-full object-cover"
              alt="maps"
            />
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default KantorCabang;
