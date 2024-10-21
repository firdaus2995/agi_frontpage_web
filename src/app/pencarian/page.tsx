'use client';
import React, { useEffect, useState } from 'react';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import SearchForm from '@/components/molecules/specifics/agi/Pencarian/SearchForm';
import { handleGetContentPage } from '@/services/content-page.api';
import {
  contentStringTransformer,
  pageTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

const Pencarian = () => {
  const [title, setTitle] = useState('');
  const [titleImg, setTitleImg] = useState({ imageUrl: '', altText: '' });

  const [cta1Img, setCta1Img] = useState({ imageUrl: '', altText: '' });
  const [cta1Name, setCta1Name] = useState('');
  const [cta1Label, setCta1Label] = useState('');
  const [cta1Link, setCta1Link] = useState('');

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
        const data = await handleGetContentPage('hal-pencarian-agi');
        // page
        const { content } = pageTransformer(data);
        setTitleImg(singleImageTransformer(content['title-image']));
        setTitle(contentStringTransformer(content['title-judul']));

        setCta1Img(singleImageTransformer(content['cta1-image']));
        setCta1Name(contentStringTransformer(content['cta1-teks']));
        setCta1Label(contentStringTransformer(content['cta1-label-button']));
        setCta1Link(contentStringTransformer(content['cta1-link-button']));

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

  const breadcrumbsData = [
    { title: 'Beranda', href: '/' },
    { title: title, href: '/pencarian' }
  ];
  return (
    <div className="flex flex-col">
      <Hero
        title={title}
        breadcrumbsData={breadcrumbsData}
        imageUrl={titleImg.imageUrl}
      />
      <SearchForm />
      <FooterInformation
        title={<p dangerouslySetInnerHTML={{ __html: cta1Name ?? '' }} />}
        buttonTitle={cta1Label}
        href={cta1Link}
        image={cta1Img.imageUrl}
      />
      <FooterCards
        bgColor="lg:bg-cta4_bg"
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
    </div>
  );
};

export default Pencarian;
