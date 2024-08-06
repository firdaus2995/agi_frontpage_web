'use client';
import { useEffect, useState } from 'react';

import { notFound } from 'next/navigation';
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
  { title: 'Tanya Avgen', href: '/tanya-avgen' }
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

export interface IListCards {
  title: any;
  icon: string;
  color: string | undefined;
}

export interface IListFaq {
  title: any;
  href: string;
  tags: string | undefined;
}

const TanyaAvgen = () => {
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
  const [titleImage, setTitleImage] = useState({ imageUrl: '', altText: '' });
  const [bannerImage, setBannerImage] = useState({ imageUrl: '', altText: '' });
  const [footerImage, setFooterImage] = useState({ imageUrl: '', altText: '' });
  const [cards, setCards] = useState<any[]>([]);
  const [listFilteredData, setListFilteredData] = useState<IListFaq[]>([]);
  const [selectedCards, setSelectedCards] = useState('');
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [keyword, setKeyword] = useState('');
  // PAGINATION STATE
  const itemsPerPage = 5;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [footerText, setFooterText] = useState('');
  const [footerBtnLabel, setFooterBtnLabel] = useState('');
  const [footerBtnUrl, setFooterBtnUrl] = useState('');
  // PAGINATION LOGIC HOOK
  useEffect(() => {
    if (!listFilteredData?.length) return; // check if contentaData already present

    setPageCount(Math.ceil(listFilteredData?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, listFilteredData]);

  // PAGINATION LOGIC HANDLER
  const handlePageClick = (event: any) => {
    const newOffset =
      (event.selected * itemsPerPage) % listFilteredData?.length;
    setItemOffset(newOffset);
  };

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

        const listCards = topics.map((topic) => ({
          title: contentStringTransformer(content[topic.textKey]),
          icon: singleImageTransformer(content[topic.iconKey]).imageUrl
        }));

        setCards(listCards);
        setSelectedCards(listCards[0].title);

        const tempData = listFaq?.data?.categoryList[''];
        const transformedData = tempData.map((item) => {
          const title = item.title;
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
        setListFilteredData(transformedData);
        setPageCount(Math.ceil(transformedData?.length / itemsPerPage));
      } catch (error) {
        console.error('Error:', error);
      }
    };
    setItemOffset(0);
    setPageCount(0);
    fetchData();
  }, []);

  const handleCardsClick = (title: string) => {
    setSelectedCards(title);
    handleGetListFaqFilterByTag(
      'List-Pertanyaan-dan-Jawaban-Tanya-Avgen',
      title
    );
  };

  const handleGetListFaqFilter = async (slug: string) => {
    try {
      setLoadingSearch(true);
      const queryParams: QueryParams = {
        includeAttributes: 'true',
        searchFilter: keyword,
        tagsFilter: selectedCards
      };
      const listFaq: any = await getListFaq(slug, queryParams);
      const tempData = listFaq?.data?.categoryList[''];
      console.log(tempData);
      const transformedData =
        tempData === undefined
          ? []
          : tempData?.map((item: any) => {
              const title = item.title;
              const href = `/tanya-avgen/${item.id}/`;
              const tagsData = item.contentData.find(
                (content: any) => content.fieldId === 'tags'
              );
              const tags = tagsData ? tagsData.value : '';
              return {
                title,
                href,
                tags
              };
            });
      setListFilteredData(transformedData);
      setItemOffset(0);
      setPageCount(0);
      setLoadingSearch(false);
      return tempData;
    } catch (error) {
      return notFound();
    }
  };

  const handleGetListFaqFilterByTag = async (slug: string, title: string) => {
    try {
      setLoadingSearch(true);
      const queryParams: QueryParams = {
        includeAttributes: 'true',
        searchFilter: keyword,
        tagsFilter: title
      };
      const listFaq: any = await getListFaq(slug, queryParams);
      const tempData = listFaq?.data?.categoryList[''];
      const transformedData =
        tempData === undefined
          ? []
          : tempData?.map((item: any) => {
              const title = item.title;
              const href = `/tanya-avgen/${item.id}/`;
              const tagsData = item.contentData.find(
                (content: any) => content.fieldId === 'tags'
              );
              const tags = tagsData ? tagsData.value : '';
              return {
                title,
                href,
                tags
              };
            });
      setListFilteredData(transformedData);
      setItemOffset(0);
      setPageCount(0);
      setLoadingSearch(false);
      return tempData;
    } catch (error) {
      return notFound();
    }
  };

  return (
    <div className="bg-purple_superlight">
      <Hero
        title="Tanya AvGen"
        breadcrumbsData={breadcrumbsData}
        imageUrl={titleImage.imageUrl}
      />
      <SearchTerm
        onSearch={handleGetListFaqFilter}
        loading={loadingSearch}
        value={keyword}
        bannerImage={bannerImage.imageUrl}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <TopicsCard cards={cards} onClickCards={handleCardsClick} />
      <FAQList
        selected={selectedCards}
        data={listFilteredData}
        pageCount={pageCount}
        itemOffset={itemOffset}
        handlePageClick={handlePageClick}
      />
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
            title: cta4Data.cta41.title,
            icon: cta4Data.cta41.icon,
            subtitle: cta4Data.cta41.subtitle,
            href: cta4Data.cta41.url
          },
          {
            title: cta4Data.cta42.title,
            icon: cta4Data.cta42.icon,
            subtitle: cta4Data.cta42.subtitle,
            href: cta4Data.cta42.url
          },
          {
            title: cta4Data.cta43.title,
            icon: cta4Data.cta43.icon,
            subtitle: cta4Data.cta43.subtitle,
            href: cta4Data.cta43.url
          },
          {
            title: cta4Data.cta44.title,
            icon: cta4Data.cta44.icon,
            subtitle: cta4Data.cta44.subtitle,
            href: cta4Data.cta44.url
          }
        ]}
      />
    </div>
  );
};

export default TanyaAvgen;
