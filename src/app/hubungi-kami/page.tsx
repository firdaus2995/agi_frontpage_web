'use client';
import { useEffect, useState } from 'react';
import { notFound, useSearchParams } from 'next/navigation';
import Karir from './tabs/karir';
import ButtonMenu from '@/components/molecules/specifics/agi/ButtonMenu';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import { MainContent } from '@/components/molecules/specifics/agi/HubungiKami';
import { getHubungiKami } from '@/services/hubungi-kami.api';
import {
  contentStringTransformer,
  pageTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

const handleGetContent = async (slug: string) => {
  try {
    const data = await getHubungiKami(slug);
    return data;
  } catch (error) {
    return notFound();
  }
};

const CallMe = () => {
  const params = useSearchParams();
  const [titleImage, setTitleImage] = useState({ imageUrl: '', altText: '' });
  const [bannerImage, setBannerImage] = useState({ imageUrl: '', altText: '' });
  const [footerImage, setFooterImage] = useState({ imageUrl: '', altText: '' });
  const [formId, setFormId] = useState('');
  const [formSaranId, setFormSaranId] = useState('');
  const [tab, setTab] = useState('');
  const [pageData, setPageData] = useState<any>([]);
  const [listBanner, setListBanner] = useState<any[]>([]);
  const [footerText, setFooterText] = useState('');
  const [footerBtnLabel, setFooterBtnLabel] = useState('');
  const [footerBtnUrl, setFooterBtnUrl] = useState('');
  const [bannerImageFit, setBannerImageFit] = useState('');

  useEffect(() => {
    const tab = params.get('tab') ?? '';
    setTab(tab);

    const fetchData = async () => {
      try {
        let data = undefined;
        if (tab === 'Pengaduan Nasabah') {
          data = await handleGetContent('hal-pengaduan-nasabah-agi-new');
        } else {
          data = await handleGetContent('hal-karir-agi-new');
        }
        const { content } = pageTransformer(data);

        setPageData(content);
        setTitleImage(singleImageTransformer(content['title-image']));
        setBannerImage(singleImageTransformer(content['banner-image']));
        setFooterImage(singleImageTransformer(content['cta1-image']));
        setFooterText(contentStringTransformer(content['cta1-teks']));
        setFooterBtnLabel(
          contentStringTransformer(content['cta1-label-button'])
        );
        setFooterBtnUrl(contentStringTransformer(content['cta1-link-button']));
        setFormId(contentStringTransformer(content['form-pengaduan']));
        setFormSaranId(contentStringTransformer(content['form-saran']));
        setBannerImageFit(
          content['banner-image']?.config
            ? JSON.parse(content['banner-image']?.config)?.image_fit
            : ''
        );
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
  }, [params]);

  return (
    <div className="flex flex-col">
      <Hero
        title="Hubungi Kami"
        breadcrumbsData={[
          { title: 'Beranda', href: '/' },
          {
            title: 'Hubungi Kami',
            href: '/hubungi-kami'
          }
        ]}
        imageUrl={titleImage.imageUrl}
        bottomImage={bannerImage.imageUrl}
        bottomImageFit={bannerImageFit}
      />
      <div className="pt-[3.125rem] md:pt-[6.25rem]">
        <ButtonMenu buttonList={['Pengaduan Nasabah', 'Karir']} />
      </div>

      {tab === 'Karir' ? (
        <Karir pageData={pageData} />
      ) : (
        <MainContent
          formId={formId}
          formSaranId={formSaranId}
          pageData={pageData}
        />
      )}

      <FooterInformation
        title={
          <p
            className="text-[36px] sm:text-[56px] text-center sm:text-left line-clamp-3 font-karla"
            dangerouslySetInnerHTML={{ __html: footerText ?? '' }}
          />
        }
        buttonTitle={footerBtnLabel}
        image={footerImage.imageUrl}
        href={footerBtnUrl}
      />

      <FooterCards bgColor="md:bg-cta4_bg" cards={listBanner} />
    </div>
  );
};

export default CallMe;
