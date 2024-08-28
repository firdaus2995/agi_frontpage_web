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

      <FooterCards
        bgColor="md:bg-cta4_bg"
        cards={[
          {
            title: cta4Data.cta41?.title,
            icon: cta4Data.cta41?.icon,
            subtitle: cta4Data.cta41?.subtitle,
            href: cta4Data.cta41?.url
          },
          {
            title: cta4Data.cta42?.title,
            icon: cta4Data.cta42?.icon,
            subtitle: cta4Data.cta42?.subtitle,
            href: cta4Data.cta42?.url
          },
          {
            title: cta4Data.cta43?.title,
            icon: cta4Data.cta43?.icon,
            subtitle: cta4Data.cta43?.subtitle,
            href: cta4Data.cta43?.url
          },
          {
            title: cta4Data.cta44?.title,
            icon: cta4Data.cta44?.icon,
            subtitle: cta4Data.cta44?.subtitle,
            href: cta4Data.cta44?.url
          }
        ]}
      />
    </div>
  );
};

export default CallMe;
