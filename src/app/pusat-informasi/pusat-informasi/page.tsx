'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import BLANK_IMAGE from '@/assets/images/blank-image.svg';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import MainContent from '@/components/molecules/specifics/agi/PusatInformasi';
import { BASE_SLUG } from '@/utils/baseSlug';
import { BASE_URL } from '@/utils/baseUrl';
import {
  contentStringTransformer,
  singleImageTransformer,
  pageTransformer
} from '@/utils/responseTransformer';

const initialData = {
  titleImageUrl: '',
  bannerImageUrl: '',
  titleAltText: '',
  bannerAltText: '',
  footerInfoAltText: '',
  footerInfoImageUrl: '',
  footerText: '',
  footerBtnLabel: '',
  footerBtnUrl: '',
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
};

const PusatInformasi = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') ?? '';
  const content = searchParams.get('content') ?? '';

  const [data, setData] = useState<typeof initialData>(initialData);

  const tabs = [
    {
      name: 'Formulir Penutupan',
      url: BASE_SLUG.PUSAT_INFORMASI.PAGE.FORMULIR
    },
    { name: 'Klaim', url: BASE_SLUG.PUSAT_INFORMASI.PAGE.KLAIM },
    {
      name: 'Rekanan',
      url: BASE_SLUG.PUSAT_INFORMASI.PAGE.FORMULIR
    },
    {
      name: 'Kantor Cabang',
      url: BASE_SLUG.PUSAT_INFORMASI.PAGE.FORMULIR
    },
    {
      name: 'Wording Polis & Klausula Asuransi',
      url: BASE_SLUG.PUSAT_INFORMASI.PAGE.FORMULIR
    },
    {
      name: 'Agency',
      url: BASE_SLUG.PUSAT_INFORMASI.PAGE.FORMULIR
    }
  ];

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${BASE_URL.apiPage}/${tabs.find((item: any) => item.name === tab)?.url}`
      );
      const data = await response.json();

      const { content } = pageTransformer(data);
      const titleImage = singleImageTransformer(content['title-image']);
      const bannerImage = singleImageTransformer(content['banner-image']);
      const footerImage = singleImageTransformer(content['cta1-image']);
      const footerText = contentStringTransformer(content['cta1-teks']);
      const footerBtnLabel = contentStringTransformer(
        content['cta1-label-button']
      );
      const footerBtnUrl = contentStringTransformer(
        content['cta1-link-button']
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

      setData({
        titleImageUrl: titleImage.imageUrl,
        bannerImageUrl: bannerImage.imageUrl,
        titleAltText: titleImage.altText,
        bannerAltText: bannerImage.altText,
        footerInfoAltText: footerImage.altText,
        footerInfoImageUrl: footerImage.imageUrl,
        footerText,
        footerBtnLabel,
        footerBtnUrl,
        cta41,
        cta42,
        cta43,
        cta44
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [tab]);

  return (
    <Suspense>
      <Hero
        breadcrumbsData={[
          { title: 'Beranda', href: '/' },
          { title: tab, href: '#' }
        ]}
        title="Pusat Informasi"
        bottomImage={data.bannerImageUrl}
        imageUrl={data.titleImageUrl}
      />
      <MainContent />
      {!content ? (
        <FooterInformation
          title={
            <p
              className="text-[36px] sm:text-[56px] text-center sm:text-left line-clamp-3"
              dangerouslySetInnerHTML={{ __html: data.footerText ?? '' }}
            />
          }
          buttonTitle={data.footerBtnLabel}
          image={data.footerInfoImageUrl}
          href={data.footerBtnUrl}
        />
      ) : (
        <FooterInformation
          title={
            <div className="flex flex-col gap-4">
              <p className="text-[56px]">Subscribe Informasi Terkini!</p>
              <Button
                title="Avrist Life Insurance"
                customButtonClass="bg-purple_dark rounded-xl"
                customTextClass="text-white font-bold"
              />
              <div className="flex flex-row gap-2">
                <Input
                  type="text"
                  placeholder="Masukkan email Anda"
                  customInputClass="w-[90%]"
                />
                <Button title="Subscribe" customButtonClass="rounded-xl" />
              </div>
            </div>
          }
          image={BLANK_IMAGE}
        />
      )}

      <FooterCards
        cards={[
          {
            title: data.cta41.title,
            icon: data.cta41.icon,
            subtitle: data.cta41.subtitle,
            href: data.cta41.url
          },
          {
            title: data.cta42.title,
            icon: data.cta42.icon,
            subtitle: data.cta42.subtitle,
            href: data.cta42.url
          },
          {
            title: data.cta43.title,
            icon: data.cta43.icon,
            subtitle: data.cta43.subtitle,
            href: data.cta43.url
          },
          {
            title: data.cta44.title,
            icon: data.cta44.icon,
            subtitle: data.cta44.subtitle,
            href: data.cta44.url
          }
        ]}
      />
    </Suspense>
  );
};

export default PusatInformasi;
