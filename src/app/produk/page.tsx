'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import Search from '@/assets/images/common/search.svg';

import Icon from '@/components/atoms/Icon';
import ButtonSelection from '@/components/molecules/specifics/agi/ButtonSelection';
import CardCategoryA from '@/components/molecules/specifics/agi/Cards/CategoryA';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import SearchBar from '@/components/molecules/specifics/agi/SearchBar';

import { ParamsProps } from '@/utils/globalTypes';
import {
  contentCategoryTransformer,
  contentStringTransformer,
  pageTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

const IndividuProduk: React.FC<ParamsProps> = () => {
  const initialData = {
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
  const [data, setData] = useState<IDataPage>(initialData);
  const [dataContent, setDataContent] = useState<IDataContent[]>();
  const [channels, setChannels] = useState<any>([]);
  const [selectedChannels, setSelectedChannels] = useState<any>('');
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = dataContent
    ? dataContent.slice(startIndex, endIndex)
    : [];
  const totalPages = dataContent
    ? Math.ceil(dataContent.length / itemsPerPage)
    : 0;

  const searchParams = useSearchParams();

  const tabs = ['Asuransi Jiwa', 'Asuransi Kesehatan'];
  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState(
    searchParams.get('tab') ?? tabs[0]
  );
  const [isCategoryChange, setIsCategoryChange] = useState(true);

  useEffect(() => {
    const value = searchParams.get('tab');
    if (value !== null) {
      setActiveTab(value);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/produk`);
        const data = await response.json();

        const { content } = pageTransformer(data);
        const titleImage = singleImageTransformer(content['title-image']);
        const bannerImage = singleImageTransformer(content['banner-image']);
        const footerImage = singleImageTransformer(content['cta1-image']);
        const footerText = contentStringTransformer(content['cta1-teks']);
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

    const fetchDataContentWithCategory = async () => {
      try {
        if (activeTab === searchParams.get('tab')) {
          const contentCategoryResponse = await fetch(
            `/api/produk/content-category?category=${activeTab}&channelFilter=${selectedChannels}&searchFilter=${searchValue}`
          );
          const data = await contentCategoryResponse.json();
          const transformedDataContent = contentCategoryTransformer(
            data,
            activeTab
          );

          const dataContentValues = transformedDataContent?.map(
            ({ content, id }) => {
              const namaProduk = contentStringTransformer(
                content['nama-produk']
              );
              const tags = contentStringTransformer(content['tags']);
              const deskripsiSingkatProduk = contentStringTransformer(
                content['deskripsi-singkat-produk']
              );
              const deskripsiLengkapProduk = contentStringTransformer(
                content['deskripsi-lengkap-produk']
              );
              const jenisProduk = contentStringTransformer(
                content['jenis-produk']
              );
              const channel = contentStringTransformer(content['channel']);
              const produkImage = singleImageTransformer(
                content['produk-image']
              );
              const kategoriProdukIcon = singleImageTransformer(
                content['kategori-produk-icon']
              );

              return {
                namaProduk,
                tags,
                deskripsiSingkatProduk,
                deskripsiLengkapProduk,
                jenisProduk,
                channel,
                produkImage,
                kategoriProdukIcon,
                id
              };
            }
          );
          setDataContent(dataContentValues);

          return dataContentValues;
        }
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    fetchData().then();
    fetchDataContentWithCategory().then((dataContentValues) => {
      if (isCategoryChange && dataContentValues) {
        const channelValues = dataContentValues.map((data: any) => {
          return data['channel'];
        });
        const uniqueChannels = new Set(
          channelValues?.filter((channel: string) => channel !== '')
        );
        setIsCategoryChange(false);
        setChannels(Array.from(uniqueChannels));
      }
    });
  }, [searchParams, selectedChannels, searchValue, activeTab]);

  const handleSelectedChannels = (value: any) => {
    if (selectedChannels === value) {
      setSelectedChannels('');
    } else {
      setSelectedChannels(value);
    }
  };

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const handleChangeSearchParams = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className="flex flex-col">
      <Hero
        title={activeTab || ''}
        breadcrumbsData={[
          { title: 'Beranda', href: '/' },
          { title: activeTab, href: '#' }
        ]}
        bottomImage={data.bannerImageUrl}
        imageUrl={data.titleImageUrl}
      />
      <div className="flex flex-col px-[32px] sm:px-[136px] py-[50px] sm:pt-[80px] sm:pb-[100px] gap-[36px] sm:gap-[48px] sm:flex-row">
        <div className="flex flex-col gap-[24px] grow">
          <div className="flex flex-col md:flex-row gap-5 justify-between">
            <div className="w-full">
              <ButtonSelection
                buttonHelper={[]}
                channels={channels}
                onSelectChannels={handleSelectedChannels}
                selectedChannels={selectedChannels}
              />
            </div>

            <div className="w-full">
              <SearchBar
                placeholder="Cari"
                searchButtonTitle="Cari"
                searchButtonClassname="bg-purple_dark border border-purple_dark text-white font-semibold"
                onSearch={handleChangeSearchParams}
              />
            </div>
          </div>
          {dataContent && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px]">
              {paginatedData.map((item: any, index: number) => (
                <CardCategoryA
                  key={index}
                  imageProduk={item.produkImage.imageUrl}
                  symbol={item.kategoriProdukIcon.imageUrl}
                  title={activeTab}
                  summary={item.namaProduk}
                  description={item.deskripsiSingkatProduk}
                  tags={item.tags.split(',')}
                  href={`/produk/${item.id}`}
                />
              ))}
            </div>
          )}
          {dataContent?.length === 0 && (
            <div className="w-full flex flex-col md:px-52 2xl:px-[345px] mt-8 mb-10 gap-4 items-center justify-center">
              <Image src={Search} alt="search" />
              <div className="flex flex-col gap-4">
                <div className="w-[324px] text-center">
                  <p className="font-karla font-bold text-[24px]">
                    Page Not Found
                  </p>
                  <p className="font-opensans text-[16px] mt-[12px]">
                    Coba sesuaikan pencarian Anda untuk menemukan apa yang Anda
                    cari.
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-4 sm:flex-row justify-between">
            <div>
              <p className="text-[20px]">
                Menampilkan{' '}
                <span className="font-bold text-purple_dark">
                  {dataContent?.length === 0 ? 0 : startIndex + 1}-
                  {Math.min(endIndex, dataContent ? dataContent.length : 0)}
                </span>{' '}
                dari <span className="font-bold">{dataContent?.length}</span>{' '}
                hasil
              </p>
            </div>
            <div className="flex flex-row gap-[12px] items-center">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <div
                    key={page}
                    role="button"
                    onClick={() => handlePageChange(page)}
                    className={`w-6 h-6 flex items-center justify-center cursor-pointer ${
                      currentPage === page ? 'text-purple_dark font-bold' : ''
                    }`}
                  >
                    {page}
                  </div>
                )
              )}
              <span
                className="mt-[3px]"
                role="button"
                onClick={() => handlePageChange(totalPages)}
              >
                <Icon name="chevronRight" color="purple_dark" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <FooterInformation
        title={
          <p
            className="text-[36px] sm:text-[56px] text-center sm:text-left line-clamp-3"
            dangerouslySetInnerHTML={{ __html: data.footerText ?? '' }}
          />
        }
        buttonTitle={data.footerBtnLabel}
        image={data.footerInfoImageUrl}
        href={data.footerBtnUrl}
      />
      <FooterCards
        cards={[
          {
            title: data.cta41.title,
            icon: data.cta41.icon,
            subtitle: data.cta41.subtitle,
            href: data.cta41.url
          },
          {
            title: data.cta42.title,
            icon: data.cta42.icon,
            subtitle: data.cta42.subtitle,
            href: data.cta42.url
          },
          {
            title: data.cta43.title,
            icon: data.cta43.icon,
            subtitle: data.cta43.subtitle,
            href: data.cta43.url
          },
          {
            title: data.cta44.title,
            icon: data.cta44.icon,
            subtitle: data.cta44.subtitle,
            href: data.cta44.url
          }
        ]}
      />
    </div>
  );
};

export default IndividuProduk;

export interface IDataPage {
  titleImageUrl: string;
  titleAltText: string;
  bannerImageUrl: string;
  bannerAltText: string;
  footerInfoImageUrl: string;
  footerInfoAltText: string;
  footerText?: string;
  footerBtnLabel?: string;
  footerBtnUrl?: string;
  cta41: {
    icon: string;
    title: string;
    subtitle: string;
    url: string;
  };
  cta42: {
    icon: string;
    title: string;
    subtitle: string;
    url: string;
  };
  cta43: {
    icon: string;
    title: string;
    subtitle: string;
    url: string;
  };
  cta44: {
    icon: string;
    title: string;
    subtitle: string;
    url: string;
  };
}

export interface IDataContent {
  categoryName?: string;
  createdAt?: string;
  namaProduk: string;
  tags: string;
  deskripsiSingkatProduk: string;
  deskripsiLengkapProduk: string;
  jenisProduk: string;
  channel: string;
  produkImage: { imageUrl: string; altText: string };
  kategoriProdukIcon: { imageUrl: string; altText: string };
  id: number;
}
