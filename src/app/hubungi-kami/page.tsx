'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import love from '@/assets/images/common/heart-check.svg';
import home from '@/assets/images/common/home-add.svg';
import hospital from '@/assets/images/common/hospital.svg';
import homeYellow from '@/assets/images/common/person-home-yellow.svg';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
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
  const [titleImage, setTitleImage] = useState({ imageUrl: '', altText: '' });
  const [bannerImage, setBannerImage] = useState({ imageUrl: '', altText: '' });
  const [footerImage, setFooterImage] = useState({ imageUrl: '', altText: '' });
  const [formId, setFormId] = useState('');
  const [formSaranId, setFormSaranId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await handleGetContent('halaman-hubungi-kami');
        const { content } = pageTransformer(data);

        setTitleImage(singleImageTransformer(content['title-image']));
        setBannerImage(singleImageTransformer(content['banner-image']));
        setFooterImage(singleImageTransformer(content['cta1-image']));
        setFormId(contentStringTransformer(content['form-hubungikami']));
        setFormSaranId(contentStringTransformer(content['form-saran']));
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col bg-purple_superlight">
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
      />
      <MainContent formId={formId} formSaranId={formSaranId} />
      <FooterInformation
        title={
          <div
            className={`md:w-full xs:w-full p-5 flex h-full flex-col md:items-start xs:items-center justify-center gap-10`}
          >
            <p className="sm:text-[3.5rem] xs:text-[2.5rem] md:text-left xs:text-center">
              <span className="font-bold text-purple_dark">
                Bijak Berasuransi.
              </span>{' '}
              Pahami Kewajiban Sebagai{' '}
              <span className="font-bold text-purple_dark">Nasabah</span>
            </p>
            <Link
              role="button"
              className="px-[2.5rem] py-[0.75rem] bg-purple_dark rounded-xl text-xl font-semibold text-white flex flex-row gap-2"
              href={'/klaim-layanan/klaim?tab=Informasi+Klaim'}
            >
              Standar Pelayanan
            </Link>
          </div>
        }
        image={footerImage.imageUrl}
      />
      <RoundedFrameTop />
      <div className="flex w-full items-center justify-center bg-purple_superlight">
        <FooterCards
          bgColor="bg-purple_superlight"
          cards={[
            {
              icon: love,
              title: 'Asuransi Individu',
              subtitle: 'Lihat Produk',
              href: '/produk/individu?tab=Asuransi+Jiwa'
            },
            {
              icon: home,
              title: 'Asuransi Korporasi',
              subtitle: 'Lihat Produk',
              href: '/produk/korporasi'
            },
            {
              icon: homeYellow,
              title: 'AVRIST DPLK',
              subtitle: 'Lihat Produk',
              href: '/avrist-dplk?tab=Produk',
              textColor: 'text-dplk_yellow'
            },
            {
              icon: hospital,
              title: 'Rumah Sakit',
              subtitle: 'Rekanan',
              href: '/klaim-layanan/layanan?tab=Rumah+Sakit+Rekanan'
            }
          ]}
        />
      </div>
    </div>
  );
};

export default CallMe;
