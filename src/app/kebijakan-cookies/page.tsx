'use client';
import { Header } from '@/components/molecules/specifics/agi/InformasiNasabah';
import { MainContent } from '@/components/molecules/specifics/agi/KebijakanCookies';
import {
  BannerFooter,
  InformationAvrastFooter
} from '@/components/molecules/specifics/agi/SyaratPengunaan';

const SyaratPengunaan = () => {
  return (
    <div className="flex flex-col bg-avrast_product_bg">
      <Header menu={['Keamanan Online']} title="Keamanan Online" />
      <MainContent />
      <BannerFooter />
      <InformationAvrastFooter />
    </div>
  );
};

export default SyaratPengunaan;
