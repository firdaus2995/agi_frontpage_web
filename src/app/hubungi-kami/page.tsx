'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useSearchParams } from 'next/navigation';
import Karir from './tabs/karir';
import CUSTOMER_SERVICE from '@/assets/images/common/customer-service.svg';
import DOCUMENT_SEARCH from '@/assets/images/common/document-search.svg';
import EMAIL from '@/assets/images/common/email.svg';
import MESSAGE from '@/assets/images/common/message.svg';
import WHATSAPP from '@/assets/images/wa.svg';
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
        setFormId(contentStringTransformer(content['form-pengaduan']));
        setFormSaranId(contentStringTransformer(content['form-saran']));
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
      />
      <div className="pt-[3.125rem] md:pt-[6.25rem]">
        <ButtonMenu buttonList={['Pengaduan Nasabah', 'Karir']} />
      </div>

      {tab === 'Karir' ? (
        <Karir />
      ) : (
        <MainContent
          formId={formId}
          formSaranId={formSaranId}
          pageData={pageData}
        />
      )}

      {tab === 'Pengaduan Nasabah' ? (
        <FooterInformation
          title={
            <div className="flex flex-col xs:items-center md:items-start xs:justify-center md:justify-start gap-4">
              <p className="xs:text-[2.25rem] md:text-[3.5rem] font-karla md:w-[80%]">
                <span className="font-light">
                  Kami ada untuk membantu Anda.
                </span>
                <br />
                <span className="font-bold text-purple_dark">Hubungi Kami</span>
              </p>
              <div className="flex flex-col items-center gap-[0.5rem]">
                <Link
                  href="tel:02157898188"
                  role="button"
                  className="py-4 px-[3.25rem] border border-purple_dark rounded-xl flex flex-row items-center justify-center gap-2 text-purple_dark xs:text-[1.25rem] md:text-[2.25rem] font-bold bg-white font-karla"
                >
                  <Image src={WHATSAPP} alt="phone" className="w-10" />
                  <p>021 5789 8188</p>
                </Link>
                <p className="text-sm font-opensans">
                  <span className="font-bold">Waktu Operasional:</span> Senin -
                  Jumat, 08.00 - 17.00 WIB
                </p>
              </div>
            </div>
          }
          image={footerImage.imageUrl}
        />
      ) : (
        <FooterInformation
          title={
            <p className="text-[1.5rem] md:text-[3rem]">
              Ada yang bisa{' '}
              <span className="text-purple_dark font-bold">AvGen</span> bantu
              untuk Anda?
            </p>
          }
          image={footerImage.imageUrl}
          buttonTitle="Tanya AvGen"
        />
      )}

      <FooterCards
        bgColor="md:bg-purple_superlight"
        cards={[
          {
            title: 'Layanan Nasabah',
            icon: CUSTOMER_SERVICE,
            subtitle: '021 5789 8188'
          },
          {
            title: 'Tanya Avrista',
            icon: MESSAGE,
            subtitle: 'Lebih Lanjut'
          },
          {
            title: 'Tanya Lewat Email',
            icon: EMAIL,
            subtitle: 'Kirim Email'
          },
          {
            title: 'Prosedur Pengaduan',
            icon: DOCUMENT_SEARCH,
            subtitle: 'Lihat Prosedur'
          }
        ]}
      />
    </div>
  );
};

export default CallMe;
