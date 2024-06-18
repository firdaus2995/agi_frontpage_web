'use client';
import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import CustomerFund from '@/components/molecules/specifics/avram/_investasi/CustomerFund';
import { useSearchParams } from 'next/navigation';
import BeritaAcara from './tabs/berita-acara';
import CSR from './tabs/csr';
import Penghargaan from './tabs/penghargaan';
import BlankImage from '@/assets/images/blank-image.svg';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input';
import ButtonMenu from '@/components/molecules/specifics/agi/ButtonMenu';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import { SubmittedFormModal } from '@/components/molecules/specifics/agi/Modal/SubmittedFormModal';
import { subscribeApi } from '@/services/berita';
import { BASE_SLUG } from '@/utils/baseSlug';
import { BASE_URL } from '@/utils/baseUrl';
import { ParamsProps } from '@/utils/globalTypes';
import {
  contentStringTransformer,
  pageTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

const initialData = {
  judul: '',
  judulBody: '',
  descriptionBody: '',
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

const Berita: React.FC<ParamsProps> = () => {
  const searchParams = useSearchParams();
  const tabs = [
    {
      name: 'Berita dan Acara',
      url: BASE_SLUG.BERITA.PAGE.BERITA_ACARA
    },
    { name: 'Penghargaan', url: BASE_SLUG.BERITA.PAGE.PENGHARGAAN },
    {
      name: 'CSR',
      url: BASE_SLUG.BERITA.PAGE.CSR
    }
  ];
  const [tab, setTab] = useState('');
  const [visibleSubscribeModal, setVisibleSubscribeModal] =
    useState<boolean>(false);
  const [emailContent, setEmailContent] = useState('');
  const [data, setData] = useState<typeof initialData>(initialData);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${BASE_URL.apiPage}/${tabs.find((item: any) => item.name === tab)?.url}`
      );
      const data = await response.json();

      const { content } = pageTransformer(data);
      const titleImage = singleImageTransformer(content['title-image']);
      const judul = contentStringTransformer(content['title-judul']);
      const judulBody = contentStringTransformer(content['body-judul']);
      const descriptionBody = contentStringTransformer(
        content['body-sub-judul']
      );
      const bannerImage = singleImageTransformer(content['banner-image']);
      const footerImage = singleImageTransformer(content['cta1-image']);
      const footerText = contentStringTransformer(content['cta-1-teks']);
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
        judul,
        judulBody,
        descriptionBody,
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
    if (searchParams) {
      const value = searchParams.get('tab');

      if (value !== null) {
        setTab(value);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    fetchData();
  }, [tab]);

  const handleSubscribeContentButton = async () => {
    try {
      const response: any = await subscribeApi({
        email: emailContent,
        entity: 'avrist'
      });
      if (response?.code === 200) {
        setVisibleSubscribeModal(true);
        setEmailContent('');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white relative">
      <div className="absolute">
        <SubmittedFormModal
          show={visibleSubscribeModal}
          onClose={() => setVisibleSubscribeModal(false)}
        />
      </div>
      <Hero
        title={data?.judul ?? 'Berita dan Acara'}
        breadcrumbsData={[
          { title: 'Beranda', href: '/' },
          {
            title: data?.judul ?? 'Berita dan Acara',
            href: '#'
          }
        ]}
        imageUrl={data?.titleImageUrl ?? BlankImage}
      />
      <div className="w-full z-20 bg-white xs:pt-[3.125rem] xs:pb-[2rem] md:pt-[6.25rem] md:pb-[4rem] xs:-mt-[3.15rem] md:-mt-[6.3rem]">
        <ButtonMenu buttonList={tabs.map((item) => item.name)} />
      </div>

      {tab === 'Berita dan Acara' && (
        <BeritaAcara
          title={data?.judulBody ?? ''}
          description={data?.descriptionBody ?? ''}
        />
      )}
      {tab === 'Penghargaan' && <Penghargaan />}
      {tab === 'CSR' && <CSR />}

      <div className="flex flex-col">
        <FooterInformation
          title={
            <div className="flex flex-col gap-4">
              <p className="text-[2.25rem] md:text-[3.5rem] font-karla">
                Subscribe Informasi Terkini!
              </p>
              <Button
                title="Avrist General Insurance"
                customButtonClass="bg-agi_grey border-none rounded-xl"
                customTextClass="text-white font-bold"
              />
              <div className="flex flex-row gap-2">
                <Input
                  type="text"
                  placeholder="Masukkan email Anda"
                  customInputClass="w-[90%]"
                  value={emailContent}
                  onChange={(e) => setEmailContent(e.target.value)}
                />
                <Button
                  title="Subscribe"
                  customButtonClass="rounded-xl"
                  onClick={handleSubscribeContentButton}
                />
              </div>
            </div>
          }
          image={data?.footerInfoImageUrl ?? BlankImage}
        />
      </div>
      <div className="w-full h-full md:bg-purple_superlight">
        <FooterCards
          cards={[
            {
              title: data.cta41?.title,
              icon: data.cta41?.icon,
              subtitle: data.cta41?.subtitle,
              href: data.cta41?.url
            },
            {
              title: data.cta42?.title,
              icon: data.cta42?.icon,
              subtitle: data.cta42?.subtitle,
              href: data.cta42?.url
            },
            {
              title: data.cta43?.title,
              icon: data.cta43?.icon,
              subtitle: data.cta43?.subtitle,
              href: data.cta43?.url
            },
            {
              title: data.cta44?.title,
              icon: data.cta44?.icon,
              subtitle: data.cta44?.subtitle,
              href: data.cta44?.url
            }
          ]}
        />
      </div>
    </div>
  );
};

export default Berita;
