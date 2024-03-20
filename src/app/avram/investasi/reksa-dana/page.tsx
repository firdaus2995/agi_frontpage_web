'use client';
//export const dynamic = 'force-dynamic';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import SampleImg1 from '@/assets/images/reksadana-icon-1.svg';
import SampleImg2 from '@/assets/images/reksadana-icon-2.svg';
import SampleImg3 from '@/assets/images/reksadana-icon-3.svg';
import SampleImg4 from '@/assets/images/reksadana-icon-4.svg';
import SampleImg5 from '@/assets/images/reksadana-icon-5.svg';
import Button from '@/components/atoms/Button/Button';
import Chart from '@/components/molecules/specifics/avram/Chart/Chart';
// import MutualFundList from '@/components/molecules/specifics/avram/MutualFundList';
import { ParamsProps } from '@/utils/globalTypes';

//const ReksaDana: React.FC<ParamsProps> = ({ searchParams }) => {
const ReksaDana: React.FC<ParamsProps> = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center bg-purple_light_bg">
      <div className="w-full mx-auto max-w-[75rem] xs:p-5 flex flex-col justify-center gap-5">
        <div className="p-5 flex flex-row items-center justify-between rounded-xl bg-white">
          <div className="w-32 h-32 rounded-full">
            <Image className="h-auto w-full" src={SampleImg1} alt="sample-1" />
          </div>
          <div className="w-32 h-32 rounded-full">
            <Image className="h-auto w-full" src={SampleImg2} alt="sample-2" />
          </div>
          <div className="w-32 h-32 rounded-full">
            <Image className="h-auto w-full" src={SampleImg3} alt="sample-3" />
          </div>
          <div className="w-32 h-32 rounded-full">
            <Image className="h-auto w-full" src={SampleImg4} alt="sample-4" />
          </div>
          <div className="w-32 h-32 rounded-full">
            <Image className="h-auto w-full" src={SampleImg5} alt="sample-5" />
          </div>
        </div>

        {/* Blue Safir */}
        <div className="p-5 h-full flex flex-col items-center justify-center rounded-xl bg-white">
          <div className="flex flex-col gap-2 justify-start w-full mb-5">
            <p className="text-xl font-bold text-bright-purple">
              Avrist Blue Safir
            </p>
            <p className="text-sm">Produk ini membagikan dividen</p>
          </div>
          <Chart />
          <Button
            onClick={() => router.push('reksa-dana/blue-safir')}
            title="Pelajari Selengkapnya"
          />
        </div>

        {/* Mutual Fund List */}
        {/* <MutualFundList searchParams={searchParams} /> */}
      </div>
    </div>
  );
};

export default ReksaDana;
