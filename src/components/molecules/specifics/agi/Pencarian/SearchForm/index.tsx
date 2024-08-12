'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Accordion from '../../Accordion';
import DownloadFileButton from '../../DownloadFileButton';
import SearchBox from '../../SearchBox';
import SliderComponent from '../../Slider';
import NewsCard from './NewsCard';
import CHEVRON_RIGHT_PURPLE from '@/assets/images/common/chevron-right-purple.svg';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon';
import NotFound from '@/components/atoms/NotFound';
import { handleGetContentCategory } from '@/services/content-page.api';
import { BASE_SLUG } from '@/utils/baseSlug';
import { mergeAllData } from '@/utils/helpers';
import { QueryParams } from '@/utils/httpService';
import {
  contentCategoryTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

const SearchForm = () => {
  const searchParams = useSearchParams();
  const [selectedTab, setSelectedTab] = useState({
    title: 'Produk',
    slug: 'Produk AGI'
  });
  const [searchKeyWords, setSearchKeywords] = useState(
    searchParams.get('searchValue') ?? ''
  );
  const [dataContent, setDataContent] = useState<any>([]);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const [transformedData, setTransFormedData] = useState<any>([]);
  const [categoryList, setCategoryList] = useState<string[]>([]);

  useEffect(() => {
    setCurrentPage(1);
    const fetchData = async () => {
      try {
        let listData = [];
        const queryParams: QueryParams = {
          includeAttributes: 'true',
          searchFilter: searchKeyWords ?? ''
        };
        const data = await handleGetContentCategory(
          selectedTab.slug,
          queryParams
        );

        if (selectedTab.title === 'Produk') {
          const categoryList = data.data.categoryList;

          // merge  all category data
          const mergedData = mergeAllData(categoryList);
          const sorted = mergedData.sort(
            //@ts-ignore
            (a: any, b: any) => new Date(b?.createdAt) - new Date(a?.createdAt)
          );
          listData = sorted;
        } else if (selectedTab.title === 'Berita Pers') {
          const data1 = contentCategoryTransformer(data, '');
          const newDataContentWithCategory = data1;
          listData = newDataContentWithCategory;
        } else {
          const newDataContentWithCategory = contentCategoryTransformer(
            data,
            ''
          );
          listData = newDataContentWithCategory;
        }
        const dataContentValues = listData?.map(
          ({ id, createdAt, categories, shortDesc, title, contentData }) => {
            if (selectedTab.title === 'Berita Pers') {
              const date = format(new Date(createdAt), 'MMMM yyyy');
              const description = contentData?.filter(
                (item) => item.fieldId === 'artikel-looping'
              )[0].contentData[0].details[0].value;

              return {
                date,
                title,
                description,
                id
              };
            } else if (selectedTab.title === 'Tanya AvGen') {
              const href = `/tanya-avgen/${id}`;
              const tagsData = contentData.find(
                (content: any) => content.fieldId === 'tags'
              );
              const tags = tagsData ? tagsData.value : '';
              return {
                title,
                href,
                tags
              };
            } else {
              const label = categories
                .map((item: any) => item.categoryName)
                .join(', ');
              const date = format(new Date(createdAt), 'MMMM yyyy');
              const description = shortDesc;
              const tags = contentData?.filter(
                (item) => item.fieldId === 'tags'
              )[0].value;

              return {
                label,
                date,
                title,
                description,
                tags,
                id
              };
            }
          }
        );

        setDataContent(dataContentValues);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const fetchKlaimData = async () => {
      try {
        fetchContentDataWithCategory({ searchKeyWords }).then((data: any) => {
          setCategoryList(Object.keys(data.transformedData.categoryList));
          setTransFormedData(data.transformedData.categoryList);
        });
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (selectedTab.title === 'Klaim') {
      fetchKlaimData();
    } else {
      fetchData();
    }
  }, [selectedTab.title, searchKeyWords, selectedTab.slug]);

  const fetchContentDataWithCategory = async (params: any) => {
    const queryParams: QueryParams = {
      includeAttributes: 'true',
      searchFilter: params?.searchKeyWords || ''
    };

    try {
      const apiContent = await handleGetContentCategory(
        BASE_SLUG.PUSAT_INFORMASI.CONTENT.KLAIM,
        queryParams
      );
      return transformsData(apiContent);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  function transformsData(responseData: any) {
    const transformedData: any = responseData.data;

    return { transformedData };
  }

  const totalPages = Math.ceil(dataContent.length / itemsPerPage);

  const handlePageChange = (newPage: any) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const paginatedData = dataContent.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const tabs = useMemo(
    () => [
      {
        title: 'Produk',
        slug: 'Produk AGI'
      },
      {
        title: 'Klaim',
        slug: 'List-Klaim-AGI'
      },
      {
        title: 'Berita Pers',
        slug: 'Berita-dan-Acara-AGI'
      },
      {
        title: 'Tanya AvGen',
        slug: 'List-Pertanyaan-dan-Jawaban-Tanya-Avgen'
      }
    ],
    []
  );

  return (
    <div className=" w-full flex flex-col -mt-[-0.0625rem]">
      <div className="sm:px-[8.5rem] pb-[5rem] xs:px-[2.25rem] bg-white rounded-t-[3.75rem] flex flex-col sm:gap-[3rem] xs:gap-[2.25rem]">
        <SearchBox
          onSearch={(value: string) => {
            setSearchKeywords(value);
          }}
          value={searchKeyWords}
          placeHolder="Ketik kata yang ingin dicari"
        />

        <div className="px-[0.1875rem] hidden md:grid md:grid-cols-4 grid-cols-1 gap-[0.75rem]">
          {tabs.map((tab) => (
            <Button
              key={tab.title}
              title={tab.title}
              onClick={() => {
                const { title, slug } = tab;
                setSelectedTab({
                  title,
                  slug
                });
                setDataContent([]);
              }}
              customButtonClass={`${selectedTab.title === tab.title && `bg-purple_dark text-white px-[1.25rem] py-[0.5rem]`} hover:bg-purple_dark px-[1.25rem] py-[0.5rem]`}
              customTextClass="text-[1rem] font-semibold leading-[1.48rem] whitespace-nowrap"
            />
          ))}
        </div>

        <div className="md:hidden">
          <SliderComponent
            selected={selectedTab.title}
            slideItems={tabs}
            onClickItem={(item) => {
              const { title, slug } = item;
              setSelectedTab({
                title,
                slug
              });
            }}
            customLabel="title"
          />
        </div>
        {selectedTab.title === 'Berita Pers' ? (
          <div className="grid grid-cols-1 gap-[12px]">
            {dataContent.length > 0 ? (
              paginatedData?.map((item: any, index: number) => (
                <Link
                  key={index}
                  href={{
                    pathname: `/berita/berita/tabs/berita-acara/${item.id}`
                  }}
                >
                  <div className="mx-3 rounded-xl border-2 border-gray_light px-[1.5rem] py-[2.25rem] flex flex-col gap-[12px]">
                    <p className="text-sm leading-[19.6px]">{item.date}</p>
                    <p
                      className="text-[24px] font-bold font-opensanspro xs:line-clamp-3 sm:line-clamp-none"
                      dangerouslySetInnerHTML={{
                        __html: item.title
                      }}
                    />
                    <div
                      className="text-body-text-1 line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: item.description
                      }}
                    />
                  </div>
                </Link>
              ))
            ) : (
              <NotFound />
            )}
          </div>
        ) : selectedTab.title === 'Klaim' ? (
          <div className="flex flex-col gap-6">
            {transformedData && categoryList.length > 0 ? (
              categoryList?.map((element: any, idx: number) => {
                const currentData =
                  transformedData[Object.keys(transformedData)[idx]];
                const subcategories = getSubcategories(currentData);

                return (
                  <Accordion
                    key={idx}
                    bgColor="bg-purple_light_bg"
                    title={element}
                    description={currentData[0].categoryDescription}
                  >
                    <Accordion.Item>
                      {subcategories.map((list: any, index: number) => {
                        return (
                          <Accordion title={list} key={index}>
                            {currentData
                              .filter(
                                (i: any) => i.contentData[0].value === list
                              )
                              .map((item: any, key: number) => (
                                <DownloadFileButton
                                  key={key}
                                  title={item.title}
                                  fileType={JSON.parse(
                                    item.contentData[1].value
                                  )[0]
                                    .imageUrl.split('.')
                                    .pop()}
                                  filePath={
                                    singleImageTransformer(item.contentData[1])
                                      .imageUrl
                                  }
                                />
                              ))}
                          </Accordion>
                        );
                      })}
                    </Accordion.Item>
                  </Accordion>
                );
              })
            ) : (
              <NotFound />
            )}
          </div>
        ) : selectedTab.title === 'Tanya AvGen' ? (
          <div className="w-full flex flex-col gap-[12px]">
            {dataContent?.length > 0 ? (
              paginatedData?.map((item: any, index: any) => (
                <Link
                  href={item?.href ?? ''}
                  key={index}
                  className="w-full border border-gray_light rounded-xl p-[1.5rem] flex flex-row justify-between items-center shadow-[0_13px_20px_0px_purple_dark/[0/03]]"
                >
                  <p className="text-2xl font-semibold leading-[30.17px] font-opensanspro">
                    {item?.title}
                  </p>
                  <Image alt="chevron" src={CHEVRON_RIGHT_PURPLE} />
                </Link>
              ))
            ) : (
              <NotFound />
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-[0.75rem]">
            {dataContent.length > 0 ? (
              paginatedData.map(
                (
                  item: {
                    id: string;
                    label: string;
                    date: string;
                    title: string;
                    description: string;
                    tags: string;
                  },
                  index: React.Key | null | undefined
                ) => (
                  <Link href={`/produk/${item.id}`} key={index}>
                    <NewsCard
                      label={item.label}
                      date={item.date}
                      title={item.title}
                      description={item.description}
                      tags={item?.tags?.split(',')}
                    />
                  </Link>
                )
              )
            ) : (
              <NotFound />
            )}
          </div>
        )}
        {selectedTab.title !== 'Klaim' && (
          <div className="flex flex-col gap-4 md:flex-row justify-between mt-[24px]">
            <p className="text-[20px]">
              Menampilkan{' '}
              <span className="font-bold text-purple_dark">
                {dataContent?.length === 0 ? 0 : startIndex + 1}-
                {Math.min(endIndex, dataContent ? dataContent.length : 0)}
              </span>{' '}
              dari <span className="font-bold">{dataContent?.length}</span>{' '}
              hasil
            </p>
            <div className="flex flex-row gap-1 lg:gap-[12px] items-center">
              <span
                className="mt-[3px] rotate-180"
                role="button"
                onClick={() =>
                  handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
                }
              >
                <Icon name="chevronRight" color="purple_dark" />
              </span>
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
                onClick={() =>
                  handlePageChange(
                    currentPage === totalPages ? currentPage : currentPage + 1
                  )
                }
              >
                <Icon name="chevronRight" color="purple_dark" />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;

const getSubcategories = (data: any) => {
  const subcategories = data.map((item: any) => {
    const subkategori = item.contentData.find(
      (cd: any) => cd.fieldId === 'subkategori'
    );
    return subkategori ? subkategori.value : null;
  });
  const filteredSubcategories = subcategories.filter(
    (subcategory: any) => subcategory !== null
  );

  function removeDuplicates(arr: string[]) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }

  const uniqueSubcategories = removeDuplicates(filteredSubcategories);

  return uniqueSubcategories.sort();
};
