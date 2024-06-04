'use client';
import React, { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import BannerAvrast from '@/components/molecules/specifics/agi/Banner/Banner';
import CompanySection from '@/components/molecules/specifics/agi/CompanySection';
import LayananNasabah from '@/components/molecules/specifics/agi/LayananNasabah';
import { HomeBannerModal } from '@/components/molecules/specifics/agi/Modal';
import TotalSolution from '@/components/molecules/specifics/agi/TotalSolution';
import { getHomeData } from '@/services/home-banner-modal-api';
import { pageTransformer } from '@/utils/responseTransformer';

const handleGetContent = async (slug: string) => {
  try {
    const data = await getHomeData(slug);
    return data;
  } catch (error) {
    return notFound();
  }
};

const Avrist = () => {
  const [contentData, setContentData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await handleGetContent('homepage-agi');
        const { content } = pageTransformer(data);

        setContentData(content);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(contentData)
  }, [contentData])

  return (
    <div className="flex flex-col items-center justify-center bg-purple_light_bg">
      {contentData !== null && (
        <>
          <BannerAvrast
            content={contentData}
          />
          <TotalSolution content={contentData} />
          <CompanySection content={contentData} />
          <LayananNasabah content={contentData} />
          <HomeBannerModal content={contentData} />
        </>
      )}

    </div>
  );
};

export default Avrist;
