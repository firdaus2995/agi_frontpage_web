'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import BLANK_IMAGE from '@/assets/images/blank-image.svg';
import CUSTOMER_SERVICE from '@/assets/images/common/customer-service.svg';
import DOCUMENT_SEARCH from '@/assets/images/common/document-search.svg';
import EMAIL from '@/assets/images/common/email.svg';
import MESSAGE from '@/assets/images/common/message.svg';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import MainContent from '@/components/molecules/specifics/agi/PusatInformasi';

const PusatInformasi = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') ?? '';
  const content = searchParams.get('content') ?? '';

  return (
    <Suspense>
      <Hero
        breadcrumbsData={[
          { title: 'Beranda', href: '/' },
          { title: tab, href: tab }
        ]}
        title="Pusat Informasi"
        bottomImage={BLANK_IMAGE}
      />
      <MainContent />
      {!content ? (
        <FooterInformation
          title={
            <p className="text-[48px]">
              Ada yang bisa{' '}
              <span className="text-purple_dark font-bold">AvGen</span> bantu
              untuk Anda?
            </p>
          }
          image={BLANK_IMAGE}
          buttonTitle="Tanya AvGen"
        />
      ) : (
        <FooterInformation
          title={
            <div className="flex flex-col gap-4">
              <p className="text-[56px]">Subscribe Informasi Terkini!</p>
              <Button
                title="Avrist Life Insurance"
                customButtonClass="bg-purple_dark rounded-xl"
                customTextClass="text-white font-bold"
              />
              <div className="flex flex-row gap-2">
                <Input
                  type="text"
                  placeholder="Masukkan email Anda"
                  customInputClass="w-[90%]"
                />
                <Button title="Subscribe" customButtonClass="rounded-xl" />
              </div>
            </div>
          }
          image={BLANK_IMAGE}
        />
      )}

      <FooterCards
        bgColor="bg-purple_superlight"
        cards={[
          {
            title: 'Layanan Nasabah',
            subtitle: '021 5789 8188',
            icon: CUSTOMER_SERVICE
          },
          {
            title: 'Tanya Avrista',
            subtitle: 'Lebih Lanjut',
            icon: MESSAGE
          },
          {
            title: 'Tanya Lewat Email',
            subtitle: 'Kirim Email',
            icon: EMAIL
          },
          {
            title: 'Prosedur Pengaduan',
            subtitle: 'Lihat Prosedur',
            icon: DOCUMENT_SEARCH
          }
        ]}
      />
    </Suspense>
  );
};

export default PusatInformasi;
