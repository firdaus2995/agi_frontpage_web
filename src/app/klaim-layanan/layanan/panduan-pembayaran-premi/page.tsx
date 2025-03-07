'use client';
import { Header } from '@/components/molecules/specifics/agi/InformasiNasabah';
import FooterKlaim from '@/components/molecules/specifics/agi/Klaim/FooterKlaim';
import KlaimVideo from '@/components/molecules/specifics/agi/Klaim/KlaimVideo';
import { MainContent } from '@/components/molecules/specifics/agi/PanduanPembayaranPolis';

const TutorialPayment = () => {
  return (
    <div className="flex flex-col bg-avrast_product_bg">
      <Header
        menu={['Informasi Nasabah', 'Panduan Pembayaran']}
        title="Informasi Nasabah"
      />
      <MainContent />
      <KlaimVideo />
      <FooterKlaim />
    </div>
  );
};

export default TutorialPayment;
