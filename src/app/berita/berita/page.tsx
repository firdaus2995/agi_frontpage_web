'use client';
import React, { useCallback, useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import CustomerFund from '@/components/molecules/specifics/avram/_investasi/CustomerFund';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import BeritaAcara from './tabs/berita-acara';
import CSR from './tabs/csr';
import Penghargaan from './tabs/penghargaan';
import BlankImage from '@/assets/images/blank-image.svg';
import CustomContainer from '@/components/molecules/specifics/agi/Containers/Custom';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import { SubmittedFormModal } from '@/components/molecules/specifics/agi/Modal/SubmittedFormModal';
import SliderComponent from '@/components/molecules/specifics/agi/Slider';
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
  const router = useRouter();
  const pathname = usePathname();
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
      const footerText = contentStringTransformer(
        tab === 'Berita dan Acara'
          ? content['cta-1-teks']
          : content['cta1-teks']
      );
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
        if (value === 'Penghargaan dan Prestasi') {
          setTab('Penghargaan');
        } else {
          setTab(value);
        }
      }
    }
  }, [searchParams]);

  useEffect(() => {
    if (tabs.find((item: any) => item.name === tab)?.url) {
      fetchData();
    }
  }, [tab]);

  const handleTabClick = (tab: string) => {
    setTab(tab);
    router.push(pathname + '?' + createQueryString('tab', tab), {
      scroll: false
    });
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

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
      <CustomContainer className="pb-[5rem] xs:-mb-2 md:mb-0 justify-between gap-2 items-stretch xs:pt-[3.125rem] md:pt-[5rem] bg-white xs:-mt-[3.2rem] md:-mt-[6.2rem] z-[10]">
        {/* Tab Desktop */}
        <div className="w-full xs:hidden md:block">
          <div className="flex sm:w-full xs:w-[90%] md:flex-row xs:flex-col gap-4 rounded-lg gap-[0.75rem] flex-wrap">
            {tabs.map((val, idx) => (
              <div
                key={idx}
                role="button"
                onClick={() => {
                  handleTabClick(val.name);
                }}
                className={`grow flex p-2 items-center justify-center rounded-lg border border-purple_dark text-[1rem] font-semibold ${tab.includes(val.name) ? 'text-white bg-purple_dark' : 'text-purple_dark bg-white'}`}
              >
                {val.name}
              </div>
            ))}
          </div>
        </div>

        {/* Tab Mobile */}
        <div className="w-[100%] md:hidden mt-[20px]">
          <SliderComponent
            selected={tab}
            slideItems={tabs}
            onClickItem={(val) => handleTabClick(val.name)}
            customLabel="name"
          />
        </div>
      </CustomContainer>

      {tab === 'Berita dan Acara' && (
        <BeritaAcara
          title={data?.judulBody ?? ''}
          description={data?.descriptionBody ?? ''}
        />
      )}
      {tab === 'Penghargaan' && (
        <Penghargaan
          title={data?.judulBody ?? ''}
          description={data?.descriptionBody ?? ''}
        />
      )}
      {tab === 'CSR' && (
        <CSR
          title={data?.judulBody ?? ''}
          description={data?.descriptionBody ?? ''}
        />
      )}

      <div className="w-full flex flex-col">
        <FooterInformation
          title={
            <p
              className="text-[36px] sm:text-[56px] text-center sm:text-left line-clamp-3 font-karla"
              dangerouslySetInnerHTML={{ __html: data?.footerText ?? '' }}
            />
          }
          buttonTitle={data?.footerBtnLabel}
          image={data?.footerInfoImageUrl}
          href={data?.footerBtnUrl}
          openInNewTab={tab === 'Berita dan Acara'}
        />
      </div>

      <div className="w-full h-full md:bg-cta4_bg">
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
