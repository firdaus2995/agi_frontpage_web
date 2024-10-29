'use client';
import { Header } from '@/components/molecules/specifics/agi/InformasiNasabah';
import FooterKlaim from '@/components/molecules/specifics/agi/Klaim/FooterKlaim';
import KlaimVideo from '@/components/molecules/specifics/agi/Klaim/KlaimVideo';

const HandleComplaint = () => {
  return (
    <div className="flex flex-col bg-avrast_product_bg">
      <Header
        menu={['Informasi Nasabah', 'Penanganan Pengaduan']}
        title="Informasi Nasabah"
      />
      <KlaimVideo />
      <FooterKlaim />
    </div>
  );
};

export default HandleComplaint;
