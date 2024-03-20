import React from 'react';
import BannerAvrast from '@/components/molecules/specifics/avrast/Banner/Banner';
import CompanySection from '@/components/molecules/specifics/avrast/CompanySection';
import LayananNasabah from '@/components/molecules/specifics/avrast/LayananNasabah';
import { HomeBannerModal } from '@/components/molecules/specifics/avrast/Modal';
import TotalSolution from '@/components/molecules/specifics/avrast/TotalSolution';

const Avrist = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-purple_light_bg">
      <BannerAvrast />
      <TotalSolution />
      <CompanySection />
      <LayananNasabah />
      <HomeBannerModal />
    </div>
  );
};

export default Avrist;
