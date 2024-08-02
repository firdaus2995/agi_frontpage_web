'use client';
import React, { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import CONTACTS from '@/assets/images/common/contacts.svg';
import DOCUMENT_CHART from '@/assets/images/common/document-chart.svg';
import NOTES from '@/assets/images/common/notes.svg';
import RECEIPT from '@/assets/images/common/receipt.svg';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import FAQList from '@/components/molecules/specifics/agi/TanyaAvrista/FAQList';
import SearchTerm from '@/components/molecules/specifics/agi/TanyaAvrista/SearchTerm';
import TopicsCard from '@/components/molecules/specifics/agi/TanyaAvrista/TopicsCard';
import { getListFaq, getTanyaAvgen } from '@/services/tanya-avgen.api';
import { QueryParams } from '@/utils/httpService';
import {
  contentStringTransformer,
  pageTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

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
  const [footerText, setFooterText] = useState('');
  const [footerBtnLabel, setFooterBtnLabel] = useState('');
  const [footerBtnUrl, setFooterBtnUrl] = useState('');

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
        setFooterText(contentStringTransformer(content['cta1-teks']));
        setFooterBtnLabel(
          contentStringTransformer(content['cta1-label-button'])
        );
        setFooterBtnUrl(contentStringTransformer(content['cta1-link-button']));

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
      <Hero
        title="Tanya AvGen"
        breadcrumbsData={breadcrumbsData}
        imageUrl={titleImage.imageUrl}
      />
      <SearchTerm bannerImage={bannerImage.imageUrl} />
      <TopicsCard cards={cards} onClickCards={handleCardsClick} />
      <FAQList selected={selectedCards} data={listFilteredData} />
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
