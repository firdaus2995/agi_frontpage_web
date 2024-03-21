import React from 'react';

import GambarProdukKorporasi from '@/assets/images/gambar-produk-korporasi.svg';
import ProdukClaim from '@/assets/images/produk-claim.svg';
import ProdukIndividuImage from '@/assets/images/produk-individu-image.svg';
import ProdukPolis from '@/assets/images/produk-polis.svg';
import ProdukRumahSakit from '@/assets/images/produk-rumah-sakit.svg';
import ProdukTestimoni from '@/assets/images/produk-testimoni.svg';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import CategoryWithThreeCards from '@/components/molecules/specifics/avrast/CategoryWithThreeCards';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import FooterInformation from '@/components/molecules/specifics/avrast/FooterInformation';
import Hero from '@/components/molecules/specifics/avrast/Hero';

const breadcrumbsData = [
  { title: 'Beranda', href: '/avrast' },
  { title: 'Produk', href: '/avrast/produk/korporasi' }
];

const ProdukKorporasi = () => {
  return (
    <div className="flex flex-col">
      <Hero
        title="Produk"
        breadcrumbsData={breadcrumbsData}
        bottomImage={GambarProdukKorporasi}
      />
      <CategoryWithThreeCards
        defaultSelectedCategory="Employee Benefit"
        categories={['Employee Benefit']}
        tabs={[
          { type: 'button', label: 'Individu' },
          { type: 'button', label: 'Korporasi' }
        ]}
      />
      <RoundedFrameBottom frameColor="bg-white" />
      <FooterInformation
        title={
          <p className="text-[56px]">
            <span className="font-bold text-purple_dark">Hello,</span> Ada yang
            bisa <span className="font-bold text-purple_dark">Avrista</span>{' '}
            bantu?
          </p>
        }
        buttonTitle="Tanya Avrista"
        image={ProdukIndividuImage}
      />
      <RoundedFrameTop bgColor='bg-white' />
      <FooterCards
        cards={[
          {
            title: 'Rumah Sakit Rekanan',
            icon: ProdukRumahSakit
          },
          {
            title: 'Klaim & Layanan',
            icon: ProdukClaim,
            subtitle: 'Lebih Lanjut'
          },
          {
            title: 'Kelola Polis',
            icon: ProdukPolis,
            subtitle: 'Login Akun'
          },
          {
            title: 'Testimonial',
            icon: ProdukTestimoni,
            subtitle: 'Lebih Lanjut'
          }
        ]}
      />
    </div>
  );
};

export default ProdukKorporasi;
