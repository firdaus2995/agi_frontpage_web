import React from 'react';

import CONTACTS from '@/assets/images/common/contacts.svg';
import CREDIT_CARD from '@/assets/images/common/credit-card.svg';
import DOCUMENT_CHART from '@/assets/images/common/document-chart.svg';
import DOCUMENT_SEARCH from '@/assets/images/common/document-search.svg';
import HEART_CHECK from '@/assets/images/common/heart-check.svg';
import HEART_HAND from '@/assets/images/common/heart-hand.svg';
import HOME_ADD from '@/assets/images/common/home-add.svg';
import MESSAGE_STARRED_GRAY from '@/assets/images/common/message-starred-gray.svg';
import NOTES from '@/assets/images/common/notes.svg';
import PERSON_HOME_YELLOW from '@/assets/images/common/person-home-yellow.svg';
import RECEIPT from '@/assets/images/common/receipt.svg';
import UMBRELLA_GREEN from '@/assets/images/common/umbrella-green.svg';
import FAMILY from '@/assets/images/family.svg';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import FooterInformation from '@/components/molecules/specifics/avrast/FooterInformation';
import Hero from '@/components/molecules/specifics/avrast/Hero';
import FAQList from '@/components/molecules/specifics/avrast/TanyaAvrista/FAQList';
import SearchTerm from '@/components/molecules/specifics/avrast/TanyaAvrista/SearchTerm';
import TopicsCard from '@/components/molecules/specifics/avrast/TanyaAvrista/TopicsCard';

const breadcrumbsData = [
  { title: 'Beranda', href: '/avrast' },
  { title: 'Tanya Avrista', href: '/avrast/tanya Avrista' }
];

const cards = [
  { title: 'Asuransi Jiwa Individu', icon: HEART_CHECK },
  { title: 'Asuransi Jiwa Koperasi', icon: HOME_ADD },
  {
    title: 'Avrist \n Syariah',
    icon: UMBRELLA_GREEN,
    color: 'bg-green_border'
  },
  {
    title: 'Avrist \n DPLK',
    icon: PERSON_HOME_YELLOW,
    color: 'bg-orange_border'
  },
  { title: 'Informasi \n Polis', icon: DOCUMENT_SEARCH },
  { title: 'Pengajuan Klaim', icon: HEART_HAND },
  { title: 'Pembayaran Premi', icon: CREDIT_CARD },
  {
    title: 'Topik \n Lainnya',
    icon: MESSAGE_STARRED_GRAY,
    color: 'bg-[#8C8B89]'
  }
];

const TanyaAvrista = () => {
  return (
    <div>
      <Hero title="Tanya Avrista" breadcrumbsData={breadcrumbsData} />
      <SearchTerm />
      <TopicsCard cards={cards} />
      <FAQList />
      <RoundedFrameBottom />
      <FooterInformation
        title={
          <p className="font-karla text-[56px]">
            <span className="font-bold text-purple_dark">Perlindungan</span>{' '}
            dini dan optimal dari{' '}
            <span className="font-bold text-purple_dark">sekarang!</span>
          </p>
        }
        buttonTitle="Kelola Polis"
        image={FAMILY}
      />
      <RoundedFrameTop />
      <FooterCards
        cards={[
          {
            title: 'Tabel Suku Bunga',
            subtitle: 'Lebih Lanjut',
            icon: DOCUMENT_CHART
          },
          {
            title: 'Pengkinian Data',
            subtitle: 'Lebih Lanjut',
            icon: CONTACTS
          },
          {
            title: 'Pengajuan Klaim',
            subtitle: 'Lebih Lanjut',
            icon: RECEIPT
          },
          {
            title: 'Panduan Polis',
            subtitle: 'Lebih Lanjut',
            icon: NOTES
          }
        ]}
      />
    </div>
  );
};

export default TanyaAvrista;
