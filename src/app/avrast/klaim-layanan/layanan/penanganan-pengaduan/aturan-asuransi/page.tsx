'use client';

import React from 'react';
import CUSTOMER_SERVICE from '@/assets/images/common/customer-service.svg';
import DOCUMENT_SEARCH from '@/assets/images/common/document-search.svg';
import EMAIL from '@/assets/images/common/email.svg';
import MESSAGE from '@/assets/images/common/message.svg';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import Content from '@/components/molecules/specifics/avrast/AturanAsuransi';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import Hero from '@/components/molecules/specifics/avrast/Hero';
import KlaimVideo from '@/components/molecules/specifics/avrast/Klaim/KlaimVideo';

const page = () => {
  return (
    <>
      <Hero
        title="Penanganan Pengaduan"
        breadcrumbsData={[
          { title: 'Beranda', href: '/avrast' },
          {
            title: 'Informasi Nasabah',
            href: '/klaim-layanan/layanan?tab=Informasi+Nasabah'
          },
          {
            title: 'Penanganan Pengaduan',
            href: '/klaim-layanan/layanan/penanganan-pengaduan'
          }
        ]}
      />
      <Content />
      <RoundedFrameBottom />
      <KlaimVideo />
      <RoundedFrameTop />
      <FooterCards
        bgColor="bg-purple_superlight"
        cards={[
          {
            title: 'Layanan Nasabah',
            icon: CUSTOMER_SERVICE,
            subtitle: '021 5789 8188'
          },
          {
            title: 'Tanya Avrista',
            icon: MESSAGE,
            subtitle: 'Lebih Lanjut'
          },
          {
            title: 'Tanya Lewat Email',
            icon: EMAIL,
            subtitle: 'Kirim Email'
          },
          {
            title: 'Prosedur Pengaduan',
            icon: DOCUMENT_SEARCH,
            subtitle: 'Lihat Prosedur'
          }
        ]}
      />
    </>
  );
};

export default page;
