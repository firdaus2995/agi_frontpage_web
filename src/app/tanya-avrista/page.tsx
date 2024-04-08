import React from 'react';

import { notFound } from 'next/navigation';
import CONTACTS from '@/assets/images/common/contacts.svg';
import DOCUMENT_CHART from '@/assets/images/common/document-chart.svg';
import NOTES from '@/assets/images/common/notes.svg';
import RECEIPT from '@/assets/images/common/receipt.svg';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import FooterInformation from '@/components/molecules/specifics/avrast/FooterInformation';
import Hero from '@/components/molecules/specifics/avrast/Hero';
import FAQList from '@/components/molecules/specifics/avrast/TanyaAvrista/FAQList';
import SearchTerm from '@/components/molecules/specifics/avrast/TanyaAvrista/SearchTerm';
import TopicsCard from '@/components/molecules/specifics/avrast/TanyaAvrista/TopicsCard';
import { getTanyaAvrista } from '@/services/tanya-avrista.api';
import { contentStringTransformer, pageTransformer, singleImageTransformer } from '@/utils/responseTransformer';

const breadcrumbsData = [
  { title: 'Beranda', href: '/' },
  { title: 'Tanya Avrista', href: '/tanya Avrista' }
];

const topics = [
  { iconKey: 'topik1-icon', textKey: 'topik1-teks' },
  { iconKey: 'topik2-icon', textKey: 'topik2-teks' },
  { iconKey: 'topik3-icon', textKey: 'topik3-teks', color: 'bg-green_border' },
  { iconKey: 'topik4-icon', textKey: 'topik4-teks', color: 'bg-orange_border' },
  { iconKey: 'topik5-icon', textKey: 'topik5-teks' },
  { iconKey: 'topik6-icon', textKey: 'topik6-teks' },
  { iconKey: 'topik7-icon', textKey: 'topik7-teks' },
  { iconKey: 'topik8-icon', textKey: 'topik8-teks', color: 'bg-[#8C8B89]' },
];

const handleGetContent = async (slug: string) => {
  try {    
    const data = await getTanyaAvrista(slug);
    return data;
  } catch (error) {
    return notFound();
  }
};

const TanyaAvrista = async () => {

  const data = await handleGetContent('tanya-avrista');
  const { content } = pageTransformer(data);

  const titleImage = singleImageTransformer(content['title-image']);
  const bannerImage = singleImageTransformer(content['banner-image']);
  const footerInformationImage = singleImageTransformer(content['cta1-image']);

  const cards = topics.map((topic) => ({
    title: contentStringTransformer(content[topic.textKey]),
    icon: singleImageTransformer(content[topic.iconKey]).imageUrl,
    color: topic.color
  }));  
  
  return (
    <div>
      <Hero title="Tanya Avrista" breadcrumbsData={breadcrumbsData} imageUrl={titleImage.imageUrl}/>
      <SearchTerm bannerImage={bannerImage.imageUrl}/>
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
        image={footerInformationImage.imageUrl}
        href='/klaim-layanan/layanan?tab=Informasi+Nasabah'
      />
      <RoundedFrameTop />
      <FooterCards
        bgColor="bg-purple_superlight"
        cards={[
          {
            title: 'Tabel Suku Bunga',
            subtitle: 'Lebih Lanjut',
            icon: DOCUMENT_CHART
          },
          {
            title: 'Pengkinian Data',
            subtitle: 'Lebih Lanjut',
            icon: CONTACTS,
            href: 'https://my.avrist.com/welcome'
          },
          {
            title: 'Pengajuan Klaim',
            subtitle: 'Lebih Lanjut',
            icon: RECEIPT,
            href: '/klaim-layanan/klaim?tab=Panduan+%26+Pengajuan'
          },
          {
            title: 'Panduan Polis',
            subtitle: 'Lebih Lanjut',
            icon: NOTES,
            href: '/klaim-layanan/layanan?tab=Informasi+Nasabah'
          }
        ]}
      />
    </div>
  );
};

export default TanyaAvrista;
