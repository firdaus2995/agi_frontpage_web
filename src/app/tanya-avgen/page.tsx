'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import CONTACTS from '@/assets/images/common/contacts.svg';
import DOCUMENT_CHART from '@/assets/images/common/document-chart.svg';
import NOTES from '@/assets/images/common/notes.svg';
import RECEIPT from '@/assets/images/common/receipt.svg';
import WHATSAPP_IMAGE from '@/assets/images/whatsapp-image-small.svg';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import FAQList from '@/components/molecules/specifics/agi/TanyaAvrista/FAQList';
import SearchTerm from '@/components/molecules/specifics/agi/TanyaAvrista/SearchTerm';
import TopicsCard from '@/components/molecules/specifics/agi/TanyaAvrista/TopicsCard';
import { getListFaq, getTanyaAvgen } from '@/services/tanya-avgen.api';
import { QueryParams } from '@/utils/httpService';
import { contentStringTransformer, pageTransformer, singleImageTransformer } from '@/utils/responseTransformer';

const breadcrumbsData = [
  { title: 'Beranda', href: '/' },
  { title: 'Tanya AvGen', href: '#' }
];

const topics = [
  { iconKey: 'icon-topik-1', textKey: 'nama-topik-1' },
  { iconKey: 'icon-topik-2', textKey: 'nama-topik-2' },
  { iconKey: 'icon-topik-3', textKey: 'nama-topik-3' },
  { iconKey: 'icon-topik-4', textKey: 'nama-topik-4' },
  { iconKey: 'icon-topik-5', textKey: 'nama-topik-5' },
  { iconKey: 'icon-topik-6', textKey: 'nama-topik-6' },
  { iconKey: 'icon-topik-7', textKey: 'nama-topik-7' },
  { iconKey: 'icon-topik-8', textKey: 'nama-topik-8' }
];

const handleGetContent = async (slug: string) => {
  try {
    const data = await getTanyaAvgen(slug);
    return data;
  } catch (error) {
    return notFound();
  }
};

const handleGetListFaq = async (slug: string) => {
  try {
    const queryParams: QueryParams = {
      includeAttributes: 'true'
    };
    const data = await getListFaq(slug, queryParams);
    return data;
  } catch (error) {
    return notFound();
  }
};

export interface IListFaq {
  title: any;
  href: string;
  tags: string | undefined;
}

export interface IListCards {
  title: any;
  icon: string;
}

const TanyaAvgen = () => {
  const [titleImage, setTitleImage] = useState({ imageUrl: '', altText: '' });
  const [bannerImage, setBannerImage] = useState({ imageUrl: '', altText: '' });
  const [footerImage, setFooterImage] = useState({ imageUrl: '', altText: '' });
  const [cards, setCards] = useState<IListCards[]>([]);
  const [listData, setListData] = useState<IListFaq[]>([]);
  const [listFilteredData, setListFilteredData] = useState<IListFaq[]>([]);
  const [selectedCards, setSelectedCards] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await handleGetContent('hal-tanya-avgen');
        const listFaq = await handleGetListFaq(
          'List-Pertanyaan-dan-Jawaban-Tanya-Avgen'
        );
        const { content } = pageTransformer(data);
        setTitleImage(singleImageTransformer(content['title-image']));
        setBannerImage(singleImageTransformer(content['banner-image']));
        setFooterImage(singleImageTransformer(content['cta1-image']));

        const listCards = topics.map((topic) => ({
          title: contentStringTransformer(content[topic.textKey]),
          icon: singleImageTransformer(content[topic.iconKey]).imageUrl
        }));
        setCards(listCards);
        setSelectedCards(listCards[0].title);

        const tempData = listFaq?.data?.categoryList[''];
        const transformedData = tempData.map((item) => {
          const title = item.shortDesc;
          const href = `/tanya-avgen/${item.id}/`;
          const tagsData = item.contentData.find(
            (content) => content.fieldId === 'tags'
          );
          const tags = tagsData ? tagsData.value : '';

          return {
            title,
            href,
            tags
          };
        });
        setListData(transformedData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleCardsClick = (title: string) => {
    setSelectedCards(title);
  };

  useEffect(() => {
    const filteredData = listData.filter((item) => item.tags === selectedCards);
    setListFilteredData(filteredData);
  }, [selectedCards]);

  return (
    <div>
      <Hero title="Tanya AvGen" breadcrumbsData={breadcrumbsData} imageUrl={titleImage.imageUrl} />
      <SearchTerm bannerImage={bannerImage.imageUrl} />
      <TopicsCard cards={cards} onClickCards={handleCardsClick} />
      <FAQList selected={selectedCards} data={listFilteredData} />
      <FooterInformation
        title={
          <div className="flex flex-col gap-5">
            <p className="font-karla text-[56px]">
              Kami ada untuk membantu Anda.
            </p>
            <p className="font-black text-purple_dark font-karla text-[56px]">
              Hubungi Kami
            </p>
            <div className="rounded-lg border-2 border-purple_dark p-4 flex items-center justify-center gap-2">
              <Image src={WHATSAPP_IMAGE} alt="wa" width={24} />
              <p className="text-[36px] font-semibold text-purple_dark">
                0811 1960 1000
              </p>
            </div>
            <div className="flex items-center justify-center text-[14px]">
              <p>
                <span className="font-bold">Waktu Operasional:</span> Senin -
                Jumat, 08.00 - 17.00 WIB
              </p>
            </div>
          </div>
        }
        image={footerImage.imageUrl}
        href="/klaim-layanan/layanan?tab=Informasi+Nasabah"
      />
      <FooterCards
        bgColor="bg-purple_superlight"
        cards={[
          {
            title: 'Tabel Suku Bunga',
            subtitle: 'Lebih Lanjut',
            icon: DOCUMENT_CHART
          },
          {
            title: 'Pengkinian Data',
            subtitle: 'Lebih Lanjut',
            icon: CONTACTS,
            href: 'https://my.avrist.com/welcome'
          },
          {
            title: 'Pengajuan Klaim',
            subtitle: 'Lebih Lanjut',
            icon: RECEIPT,
            href: '/klaim-layanan/klaim?tab=Panduan+%26+Pengajuan'
          },
          {
            title: 'Panduan Polis',
            subtitle: 'Lebih Lanjut',
            icon: NOTES,
            href: '/klaim-layanan/layanan?tab=Informasi+Nasabah'
          }
        ]}
      />
    </div>
  );
};

export default TanyaAvgen;
