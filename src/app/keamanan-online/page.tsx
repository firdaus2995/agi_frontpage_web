'use client';

import React, { useEffect, useState } from 'react';

import MainContentKeamananOnline from './component/MainContentKeamananOnline';
import { Header } from '@/components/molecules/specifics/avrast/InformasiNasabah';
import {
  BannerFooter,
  InformationAvrastFooter
} from '@/components/molecules/specifics/avrast/SyaratPengunaan';
import {
  contentStringTransformer,
  pageTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

const SyaratPengunaan = () => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api-front-sit.avristcms.barito.tech/api/page/keamanan-online',
          { method: 'GET' }
        );
        const data = await response.json();
        setData(data);

        const { title, content } = pageTransformer(data);
        const artikel = contentStringTransformer(content['body-jawaban']);
        const bannerImage = singleImageTransformer(content['title-image']);
        const footerImage = singleImageTransformer(content['cta1-mage']);
        setData({ title, artikel, bannerImage, footerImage });
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  let bannerImage, footerImage;

  if (
    data &&
    data.bannerImage &&
    data.footerImage
  ) {
    bannerImage = data.bannerImage.imageUrl;
    footerImage = data.footerImage.imageUrl;
  }
  return (
    <div className="flex flex-col bg-avrast_product_bg">
      <Header
        menu={['Keamanan Online']}
        title="Keamanan Online"
        bannerImageSrc={bannerImage}
      />
      <MainContentKeamananOnline />
      <BannerFooter imageUrlSrc={footerImage} />
      <InformationAvrastFooter />
    </div>
  );
};

export default SyaratPengunaan;
