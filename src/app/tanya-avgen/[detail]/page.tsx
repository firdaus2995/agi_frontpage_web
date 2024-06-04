'use client';
import React, { Suspense, useEffect, useState } from 'react';

import CONTACTS from '@/assets/images/common/contacts.svg';
import DOCUMENT_SEARCH from '@/assets/images/common/document-search.svg';
import HOSPITAL from '@/assets/images/common/hospital.svg';
import MESSAGE from '@/assets/images/common/message.svg';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import ArtikelTanyaAvrista from '@/components/molecules/specifics/agi/TanyaAvrista/Artikel';
import {
  handleGetContentDetail,
  handleGetContentPage
} from '@/services/content-page.api';
import {
  contentDetailTransformer,
  contentStringTransformer,
  pageTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

const DetailTanyaAvgen = ({ params }: { params: { detail: string } }) => {
  const [bannerImage, setBannerImage] = useState({ imageUrl: '', altText: '' });
  const [footerImage, setFooterImage] = useState({ imageUrl: '', altText: '' });
  const [titleContent, setTitleContent] = useState('');
  const [mainContent, setMainContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await handleGetContentPage('hal-tanya-avgen');
        const detail = await handleGetContentDetail(params.detail);
        // page
        const { content } = pageTransformer(data);
        setBannerImage(singleImageTransformer(content['title-image']));
        setFooterImage(singleImageTransformer(content['cta1-image']));
        // contrent
        const { content: contentDetail } = contentDetailTransformer(detail);
        setTitleContent(
          contentStringTransformer(contentDetail['pertanyaan-tanya-avgen'])
        );
        setMainContent(
          contentStringTransformer(contentDetail['jawaban-tanya-avgen'])
        );
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-purple_superlight">
      <Suspense>
        <Hero
          title={titleContent}
          imageUrl={bannerImage.imageUrl}
          breadcrumbsData={[
            { title: 'Beranda', href: '/' },
            {
              title: 'Detail',
              href: '#'
            }
          ]}
        />
        <div className="xs:-mt-[3.4rem] md:-mt-[6.3rem] relative z-[10]">
          <ArtikelTanyaAvrista
            title={titleContent}
            content={mainContent as string}
          />
        </div>
        <FooterInformation
          title={
            <p className="font-karla text-[2.5rem] md:text-[3.5rem] md:tracking-[-0.3%] md:leading-[61.6px]">
              Ada yang bisa <span className="font-bold text-purple_dark">AvGen</span> bantu untuk Anda?
            </p>
          }
          buttonTitle="Tanya AvGen"
          href="/tanya-avgen"
          image={footerImage.imageUrl}
        />
        <FooterCards
          bgColor="bg-purple_superlight"
          cards={[
            {
              title: 'Kelola Polis',
              subtitle: 'Pengkinian Data',
              href: 'https://my.avrist.com/welcome',
              openInNewTab: true,
              icon: CONTACTS
            },
            {
              title: 'Rumah Sakit \n \n Rekanan',
              subtitle: 'Lebih Lanjut',
              href: '/klaim-layanan/layanan?tab=Rumah+Sakit+Rekanan',
              icon: HOSPITAL
            },
            {
              title: 'Tanya Avrista',
              subtitle: 'Lebih Lanjut',
              href: '/tanya-avrista',
              icon: MESSAGE
            },
            {
              title: 'Prosedur Pengaduan',
              subtitle: 'Lihat Prosedur',
              href: '/klaim-layanan/layanan/penanganan-pengaduan',
              icon: DOCUMENT_SEARCH
            }
          ]}
        />
      </Suspense>
    </div>
  );
};

export default DetailTanyaAvgen;
