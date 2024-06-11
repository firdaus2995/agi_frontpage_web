'use client';
import React, { useEffect, useState } from 'react';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import SearchForm from '@/components/molecules/specifics/agi/Pencarian/SearchForm';
import { handleGetContentPage } from '@/services/content-page.api';
import { contentStringTransformer, pageTransformer, singleImageTransformer } from '@/utils/responseTransformer';

const Pencarian = () => {
  const [title, setTitle] = useState('');
  const [titleImg, setTitleImg] = useState({ imageUrl: '', altText: '' });

  const [cta1Img, setCta1Img] = useState({ imageUrl: '', altText: '' });
  const [cta1Name, setCta1Name] = useState('');
  const [cta1Label, setCta1Label] = useState('');
  const [cta1Link, setCta1Link] = useState('');

  const [listBanner, setListBanner] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await handleGetContentPage('hal-pencarian-agi');
        // page
        const { content } = pageTransformer(data);
        setTitleImg(singleImageTransformer(content['title-image']));
        setTitle(contentStringTransformer(content['title-judul']));

        setCta1Img(singleImageTransformer(content['cta1-image']));
        setCta1Name(contentStringTransformer(content['cta1-teks']));
        setCta1Label(contentStringTransformer(content['cta1-label-button']));
        setCta1Link(contentStringTransformer(content['cta1-link-button']));

        const cta4Data =[];
        for (let i = 0; i < 4; i++) {
          const icon = singleImageTransformer(content[`cta4-${i + 1}-icon`]);
          const title = contentStringTransformer(content[`cta4-${i + 1}-nama`]);
          const subtitle = contentStringTransformer(content[`cta4-${i + 1}-label-link`]);
          const href = contentStringTransformer(content[`cta4-${i + 1}-link`]);
        
          if (icon && title && subtitle) {
            cta4Data.push({
              icon: icon.imageUrl,
              title: title,
              subtitle: subtitle,
              href: href
            });
          }
        }

        setListBanner(cta4Data)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const breadcrumbsData = [
    { title: 'Beranda', href: '/' },
    { title: title, href: '/pencarian' }
  ];
  return (
    <div className="flex flex-col">
      <Hero title={title} breadcrumbsData={breadcrumbsData} imageUrl={titleImg.imageUrl} />
      <SearchForm />
      <RoundedFrameBottom frameColor="bg-white" />
      <FooterInformation
        title={
          <p className="text-[48px]" dangerouslySetInnerHTML={{ __html: cta1Name ?? '' }} />
        }
        buttonTitle={cta1Label}
        href={cta1Link}
        image={cta1Img.imageUrl}
      />
      <RoundedFrameTop />
      <FooterCards
        cards={listBanner}
      />
    </div>
  );
};

export default Pencarian;
