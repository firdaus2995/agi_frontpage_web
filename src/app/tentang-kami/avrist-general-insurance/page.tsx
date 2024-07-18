'use client';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import LaporanPerusahaan from './tabs/laporan-perusahaan';
import Manajemen from './tabs/management';
import SekilasPerusahaan from './tabs/sekilas-perusahaan';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import CustomContainer from '@/components/molecules/specifics/agi/Containers/Custom';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import SliderComponent from '@/components/molecules/specifics/agi/Slider';
import { ContentResponse } from '@/types/content.type';
import { PageResponse } from '@/types/page.type';
import { BASE_SLUG } from '@/utils/baseSlug';
import { ParamsProps } from '@/utils/globalTypes';
import {
  contentStringTransformer,
  contentTransformer,
  pageTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

export interface ISetData {
  setData: React.Dispatch<React.SetStateAction<PageResponse | undefined>>;
}

const TentangAvristLife: React.FC<ParamsProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [tab, setTab] = useState(
    searchParams.get('tab') ?? 'Sekilas Perusahaan'
  );
  const [data, setData] = useState<PageResponse>();
  const [contentData, setContentData] = useState<ContentResponse>();
  const [titleImage, setTitleImage] = useState({ imageUrl: '', altText: '' });
  const [footerImage, setFooterImage] = useState({ imageUrl: '', altText: '' });
  const [bannerImage, setBannerImage] = useState({ imageUrl: '', altText: '' });
  const [listBanner, setListBanner] = useState<any[]>([]);
  const [footerText, setFooterText] = useState('');
  const [footerBtnLabel, setFooterBtnLabel] = useState('');
  const [footerBtnUrl, setFooterBtnUrl] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const value = searchParams.get('tab');
    if (value !== null) {
      setTab(value);
    }
  }, [searchParams]);

  const tabs = useMemo(
    () => [
      {
        name: 'Sekilas Perusahaan',
        url: BASE_SLUG.TENTANG_AVRIST_LIFE.PAGE.SEKILAS_PERUSAHAAN
      },
      {
        name: 'Manajemen',
        url: BASE_SLUG.TENTANG_AVRIST_LIFE.CONTENT.MANAJEMEN
      },
      {
        name: 'Laporan Perusahaan',
        url: BASE_SLUG.TENTANG_AVRIST_LIFE.PAGE.LAPORAN_PERUSAHAAN
      }
    ],
    []
  );

  useEffect(() => {
    if (data && tab !== 'Manajemen') {
      const { content } = pageTransformer(data);
      setTitle(
        contentStringTransformer(content['title-judul'] || content['title'])
      );
      setTitleImage(singleImageTransformer(content['title-image']));
      setBannerImage(singleImageTransformer(content['banner-image']));
      setFooterImage(singleImageTransformer(content['cta1-image']));
      setFooterText(contentStringTransformer(content['cta1-teks']));
      setFooterBtnLabel(contentStringTransformer(content['cta1-label-button']));
      setFooterBtnUrl(contentStringTransformer(content['cta1-link-button']));

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
    } else {
      const { content } = pageTransformer(data);
      setTitleImage(singleImageTransformer(content['title-image']));
      setFooterImage(singleImageTransformer(content['cta1-image']));
    }
  }, [data]);

  useEffect(() => {
    if (contentData && tab === 'Manajemen') {
      const { content } = contentTransformer(contentData);
      setTitle(contentStringTransformer(content['title']));
      setBannerImage(singleImageTransformer(content['banner-image']));
      setFooterText(contentStringTransformer(content['cta1-teks']));
      setFooterBtnLabel(contentStringTransformer(content['cta1-label-button']));
      setFooterBtnUrl(contentStringTransformer(content['cta1-link-button']));

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
    }
  }, [contentData]);

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
    <div className="flex flex-col items-center justify-center">
      {tab === 'Sekilas Perusahaan' ? (
        <Hero
          title={title}
          breadcrumbsData={[
            { title: 'Beranda', href: '/' },
            { title: title, href: '#' }
          ]}
          imageUrl={titleImage.imageUrl}
          bottomImage={bannerImage.imageUrl}
        />
      ) : (
        <Hero
          title={title}
          breadcrumbsData={[
            { title: 'Beranda', href: '/' },
            { title: title, href: '#' }
          ]}
          imageUrl={titleImage.imageUrl}
        />
      )}

      <CustomContainer className="xs:pb-2 md:pb-0 xs:-mb-2 md:mb-0 justify-between gap-2 items-stretch xs:pt-[3.125rem] md:pt-[5rem] bg-white xs:-mt-[3.2rem] md:-mt-[6.2rem] z-[10]">
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
                className={`grow flex p-2 items-center justify-center rounded-lg border border-purple_dark text-[1rem] font-semibold ${tab === val.name || (tab.includes('Manajemen') && val.name.includes('Manajemen')) ? 'text-white bg-purple_dark' : 'text-purple_dark bg-white'}`}
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

      <div className="w-full z-10">
        {tab === 'Sekilas Perusahaan' && (
          <SekilasPerusahaan setData={setData} />
        )}
        {(tab === 'Manajemen' || tab.includes('Manajemen')) && (
          <Manajemen setPageData={setContentData} setData={setData} />
        )}
        {tab === 'Laporan Perusahaan' && (
          <LaporanPerusahaan setData={setData} />
        )}
      </div>

      <div className="flex flex-col w-full">
        <FooterInformation
          title={
            <p
              className="text-center sm:text-left line-clamp-3 font-karla"
              dangerouslySetInnerHTML={{ __html: footerText ?? '' }}
            />
          }
          buttonTitle={footerBtnLabel}
          image={footerImage.imageUrl}
          href={footerBtnUrl}
        />
        <RoundedFrameTop bgColor="xs:bg-white md:bg-purple_superlight" />
      </div>
      <div className="w-full h-full">
        <FooterCards
          bgColor="xs:bg-white md:bg-purple_superlight"
          cards={listBanner}
        />
      </div>
    </div>
  );
};

export default TentangAvristLife;
