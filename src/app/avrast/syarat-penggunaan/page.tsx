'use client';
import { Header } from '@/components/molecules/specifics/avrast/InformasiNasabah';
import {
  MainContent,
  BannerFooter,
  InformationAvrastFooter
} from '@/components/molecules/specifics/avrast/SyaratPengunaan';

const SyaratPengunaan = () => {
  return (
    <div className="flex flex-col bg-avrast_product_bg">
      <Header menu={['Syarat Penggunaan']} title="Syarat Penggunaan" />
      <MainContent />
      <BannerFooter />
      <InformationAvrastFooter />
    </div>
  );
};

export default SyaratPengunaan;
