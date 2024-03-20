import React from 'react';

import CONTACTS from '@/assets/images/common/contacts.svg';
import DOCUMENT_SEARCH from '@/assets/images/common/document-search.svg';
import HOSPITAL from '@/assets/images/common/hospital.svg';
import MESSAGE from '@/assets/images/common/message.svg';
import FAMILY_2 from '@/assets/images/family-2.svg';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import FooterInformation from '@/components/molecules/specifics/avrast/FooterInformation';
import Hero from '@/components/molecules/specifics/avrast/Hero';
import ArtikelTanyaAvrista from '@/components/molecules/specifics/avrast/TanyaAvrista/Artikel';

export const generateStaticParams = () => {
  return [{ detail: 'asuransi-jiwa-individu' }];
};

const DetailTanyaAvrista = ({ params }: { params: { detail: string } }) => {
  console.log(params);
  return (
    <>
      <Hero
        title="Asuransi Jiwa Individu"
        breadcrumbsData={[
          { title: 'Beranda', href: '/avrast' },
          { title: 'Tanya Avrista', href: '/avrast/tanya-avrista' },
          {
            title: 'Asuransi Jiwa Individu',
            href: '/avrast/tanya-avrista/asuransi-jiwa-individu'
          },
          {
            title: 'Detail',
            href: '/avrast/tanya-avrista/asuransi-jiwa-individu'
          }
        ]}
      />
      <ArtikelTanyaAvrista />
      <RoundedFrameBottom />
      <FooterInformation
        title={
          <p className="font-karla text-[56px]">
            <span className="font-bold text-purple_dark">Komitmen</span> Kami,
            proses klaim yang{' '}
            <span className="font-bold text-purple_dark">efisien</span> dan{' '}
            <span className="font-bold text-purple_dark">solusi</span>
          </p>
        }
        buttonTitle="Panduan Klaim"
        image={FAMILY_2}
      />
      <RoundedFrameTop />
      <FooterCards
        cards={[
          {
            title: 'Kelola Polis',
            subtitle: 'Pengkinian Data',
            icon: CONTACTS
          },
          {
            title: 'Rumah Sakit \n \n Rekanan',
            icon: HOSPITAL
          },
          {
            title: 'Tanya Avrista',
            subtitle: 'Lebih Lanjut',
            icon: MESSAGE
          },
          {
            title: 'Prosedur Pengaduan',
            subtitle: 'Lihat Prosedur',
            icon: DOCUMENT_SEARCH
          }
        ]}
      />
    </>
  );
};

export default DetailTanyaAvrista;
