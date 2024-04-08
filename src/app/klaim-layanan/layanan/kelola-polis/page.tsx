'use client';
import { Header } from '@/components/molecules/specifics/avrast/InformasiNasabah';
import { MainContent } from '@/components/molecules/specifics/avrast/KelolaPolis';
import FooterKlaim from '@/components/molecules/specifics/avrast/Klaim/FooterKlaim';
import KlaimVideo from '@/components/molecules/specifics/avrast/Klaim/KlaimVideo';

const InformationPolicy = () => {
  return (
    <div className="flex flex-col bg-avrast_product_bg">
      <Header
        menu={['Informasi Nasabah', 'Panduan Polis']}
        title="Informasi Nasabah"
      />
      <MainContent />
      <KlaimVideo />
      <FooterKlaim />
    </div>
  );
};

export default InformationPolicy;
