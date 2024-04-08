'use client';
import {
  MainContent,
  BannerFooter,
  InformationProductFooter
} from '@/components/molecules/specifics/avrast/HubungiKami';
import { Header } from '@/components/molecules/specifics/avrast/InformasiNasabah';

const CallMe = () => {
  return (
    <div className="flex flex-col bg-avrast_product_bg ">
      <Header menu={['Hubungi Kami']} title="Hubungi Kami" />
      <MainContent />
      <BannerFooter />
      <InformationProductFooter />
    </div>
  );
};

export default CallMe;
