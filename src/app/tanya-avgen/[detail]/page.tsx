'use client';
import React, { Suspense, useEffect, useState } from 'react';

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
  const [tags, setTags] = useState('');

  const [cta4Data, setCta4Data] = useState({
    cta41: {
      icon: '',
      title: '',
      subtitle: '',
      url: ''
    },
    cta42: {
      icon: '',
      title: '',
      subtitle: '',
      url: ''
    },
    cta43: {
      icon: '',
      title: '',
      subtitle: '',
      url: ''
    },
    cta44: {
      icon: '',
      title: '',
      subtitle: '',
      url: ''
    }
  });

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
        setTags(contentStringTransformer(contentDetail['tags']));
        setTitleContent(
          contentStringTransformer(contentDetail['pertanyaan-tanya-avgen'])
        );
        setMainContent(
          contentStringTransformer(contentDetail['jawaban-tanya-avgen'])
        );

        const cta41 = {
          icon: singleImageTransformer(content['cta4-1-icon']).imageUrl,
          title: contentStringTransformer(content['cta4-1-nama']),
          subtitle: contentStringTransformer(content['cta4-1-label-link']),
          url: contentStringTransformer(content['cta4-1-link'])
        };
        const cta42 = {
          icon: singleImageTransformer(content['cta4-2-icon']).imageUrl,
          title: contentStringTransformer(content['cta4-2-nama']),
          subtitle: contentStringTransformer(content['cta4-2-label-link']),
          url: contentStringTransformer(content['cta4-2-link'])
        };
        const cta43 = {
          icon: singleImageTransformer(content['cta4-3-icon']).imageUrl,
          title: contentStringTransformer(content['cta4-3-nama']),
          subtitle: contentStringTransformer(content['cta4-3-label-link']),
          url: contentStringTransformer(content['cta4-3-link'])
        };
        const cta44 = {
          icon: singleImageTransformer(content['cta4-4-icon']).imageUrl,
          title: contentStringTransformer(content['cta4-4-nama']),
          subtitle: contentStringTransformer(content['cta4-4-label-link']),
          url: contentStringTransformer(content['cta4-4-link'])
        };

        setCta4Data({
          cta41,
          cta42,
          cta43,
          cta44
        });
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
          title={tags}
          imageUrl={bannerImage.imageUrl}
          breadcrumbsData={[
            { title: 'Beranda', href: '/' },
            {
              title: 'Tanya Avgen',
              href: '#'
            }
          ]}
        />
        <div className="xs:-mt-[3.4rem] lg:-mt-[6.3rem] relative z-[10]">
          <ArtikelTanyaAvrista
            title={titleContent}
            content={mainContent as string}
          />
        </div>
        <FooterInformation
          title={
            <p className="font-karla text-[2.5rem] lg:text-[3.5rem] lg:tracking-[-0.3%] lg:leading-[61.6px]">
              Ada yang bisa{' '}
              <span className="font-bold text-purple_dark">AvGen</span> bantu
              untuk Anda?
            </p>
          }
          buttonTitle="Tanya AvGen"
          href="/tanya-avgen"
          image={footerImage.imageUrl}
        />
        <FooterCards
          bgColor="bg-cta4_bg"
          cards={[
            {
              title: cta4Data.cta41.title,
              icon: cta4Data.cta41.icon,
              subtitle: cta4Data.cta41.subtitle,
              href: cta4Data.cta41.url
            },
            {
              title: cta4Data.cta42.title,
              icon: cta4Data.cta42.icon,
              subtitle: cta4Data.cta42.subtitle,
              href: cta4Data.cta42.url
            },
            {
              title: cta4Data.cta43.title,
              icon: cta4Data.cta43.icon,
              subtitle: cta4Data.cta43.subtitle,
              href: cta4Data.cta43.url
            },
            {
              title: cta4Data.cta44.title,
              icon: cta4Data.cta44.icon,
              subtitle: cta4Data.cta44.subtitle,
              href: cta4Data.cta44.url
            }
          ]}
        />
      </Suspense>
    </div>
  );
};

export default DetailTanyaAvgen;
