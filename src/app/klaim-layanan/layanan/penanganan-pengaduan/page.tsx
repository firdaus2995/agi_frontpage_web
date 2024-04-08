'use client';
import { Header } from '@/components/molecules/specifics/avrast/InformasiNasabah';
import FooterKlaim from '@/components/molecules/specifics/avrast/Klaim/FooterKlaim';
import KlaimVideo from '@/components/molecules/specifics/avrast/Klaim/KlaimVideo';
import { MainContent } from '@/components/molecules/specifics/avrast/PenangananPengaduan';

const HandleComplaint = () => {
  return (
    <div className="flex flex-col bg-avrast_product_bg">
      <Header
        menu={['Informasi Nasabah', 'Penanganan Pengaduan']}
        title="Informasi Nasabah"
      />
      <MainContent />
      <KlaimVideo />
      <FooterKlaim />
    </div>
  );
};

export default HandleComplaint;
