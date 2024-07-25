'use client';

import { useEffect, useState } from 'react';
import MainContentSyaratPenggunaan from './component/MainContentSyaratPenggunaan';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import {
  contentStringTransformer,
  pageTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

const SyaratPengunaan = () => {
  const [title, setTitle] = useState('');
  const [titleImg, setTitleImg] = useState({ imageUrl: '', altText: '' });

  const [cta1Img, setCta1Img] = useState({ imageUrl: '', altText: '' });
  const [cta1Name, setCta1Name] = useState('');
  const [cta1Label, setCta1Label] = useState('');
  const [cta1Link, setCta1Link] = useState('');

  const [listBanner, setListBanner] = useState<any[]>([]);

  const [contentData, setContentData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api-front-sit.avristcms.barito.tech/api/page/halaman-syarat-penggunaan-agi',
          { method: 'GET' }
        );
        const data = await response.json();
        const { content } = pageTransformer(data);
        setContentData(content);
        setTitleImg(singleImageTransformer(content['title-image']));
        setTitle(contentStringTransformer(content['title-judul']));

        setCta1Img(singleImageTransformer(content['cta1-image']));
        setCta1Name(contentStringTransformer(content['cta1-teks']));
        setCta1Label(contentStringTransformer(content['cta1-label-button']));
        setCta1Link(contentStringTransformer(content['cta1-link-button']));

        const cta4Data = [];
        for (let i = 0; i < 4; i++) {
          const icon = singleImageTransformer(content[`cta4-${i + 1}-icon`]);
          const title = contentStringTransformer(content[`cta4-${i + 1}-nama`]);
          const subtitle = contentStringTransformer(
            content[`cta4-${i + 1}-label-link`]
          );
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

        setListBanner(cta4Data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const breadcrumbsData = [
    { title: 'Beranda', href: '/' },
    { title: title, href: '#' }
  ];
  return (
    <div className="flex flex-col">
      <Hero
        title={title}
        breadcrumbsData={breadcrumbsData}
        imageUrl={titleImg.imageUrl}
      />
      <MainContentSyaratPenggunaan content={contentData} />
      <FooterInformation
        title={<p dangerouslySetInnerHTML={{ __html: cta1Name ?? '' }} />}
        buttonTitle={cta1Label}
        href={cta1Link}
        image={cta1Img.imageUrl}
      />
      <FooterCards bgColor="bg-purple_superlight" cards={listBanner} />
    </div>
  );
};

export default SyaratPengunaan;
