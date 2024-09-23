'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Slider from 'react-slick';
import Icon from '@/components/atoms/Icon';
import NotFound from '@/components/atoms/NotFound';
import MediumTag from '@/components/atoms/Tag/MediumTag';
import CardCategoryB from '@/components/molecules/specifics/agi/Cards/CategoriB';
import CategoryWithThreeCards from '@/components/molecules/specifics/agi/CategoryWithThreeCards';
import SliderInformation from '@/components/molecules/specifics/agi/SliderInformation';
import { handleGetContentFilter } from '@/services/content-page.api';
import {
  contentStringTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

type contentProps = {
  pageData: any;
};

const Content = (props: contentProps) => {
  const { pageData } = props;
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, setTab] = useState('');
  const [category, setCategory] = useState('');

  const [search, setSearch] = useState('');
  const [listData, setListData] = useState<any>([]);
  const [sliderData, setSliderData] = useState<any>([]);

  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const [params, setParams] = useState({
    yearFilter: '',
    monthFilter: '',
    searchFilter: ''
  });

  const totalPages = Math.ceil(listData.length / ITEMS_PER_PAGE);

  const handleChangePage = (newPage: any) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const paginatedData = listData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (searchParams) {
      const value = searchParams.get('tab');
      const categories = searchParams.get('category');

      if (value !== null) {
        setTab(value);
      }

      if (categories !== null) {
        setCategory(categories);
      }
    }
  }, [searchParams]);

  const onCategoryChange = (value: string) => {
    setCategory(value);
    router.push(pathname + '?' + createQueryStringCategory('category', value), {
      scroll: false
    });
  };

  const createQueryStringCategory = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = {
          includeAttributes: true,
          searchRequest: {
            keyword: params.searchFilter ?? '',
            fieldIds: ['title'],
            postData: true
          },
          filters: [
            ...(params.yearFilter && params.yearFilter !== ''
              ? [
                  {
                    fieldId: 'tahun',
                    keyword: params.yearFilter
                  }
                ]
              : []),
            ...(params.monthFilter && params.monthFilter !== ''
              ? [
                  {
                    fieldId: 'bulan',
                    keyword: params.monthFilter
                  }
                ]
              : [])
          ],
          category: ''
        };
        const data = await handleGetContentFilter(
          'Berita-dan-Acara-Agency-AGI',
          queryParams
        );

        const uniqueTahun = new Set();
        const uniqueBulan = new Set();
        const categoryList = data.data.categoryList;

        for (const category in categoryList) {
          if (Object.prototype.hasOwnProperty.call(categoryList, category)) {
            categoryList[category].forEach((article) => {
              article.contentData.forEach((content) => {
                if (content.fieldId === 'tahun') {
                  content.value.split(', ').forEach((tahun) => {
                    uniqueTahun.add(tahun);
                  });
                }
                if (content.fieldId === 'bulan') {
                  content.value.split(', ').forEach((tahun) => {
                    uniqueBulan.add(tahun);
                  });
                }
              });
            });
          }
        }

        const newDataContentWithCategory = Object.values(data.data.categoryList)
          .flat()
          .filter((item) => item !== undefined && item !== null);
        const contentData = newDataContentWithCategory?.map(
          ({ contentData, id, categories, title, shortDesc }) => {
            const category = categories[0]?.categoryName;
            const description = shortDesc;
            const date =
              contentData.filter((item) => item.fieldId === 'bulan')[0]
                .value !== '-' &&
              contentData.filter((item) => item.fieldId === 'tahun')[0]
                .value !== '-'
                ? `${
                    contentStringTransformer(
                      contentData.filter(
                        (item) => item.fieldId === 'tanggal'
                      )[0]
                    ) !== '-'
                      ? contentStringTransformer(
                          contentData.filter(
                            (item) => item.fieldId === 'tanggal'
                          )[0]
                        )?.substr(0, 2)
                      : ''
                  } ${
                    monthDropdown().find(
                      (item) =>
                        item.value ===
                          contentData.filter(
                            (item) => item.fieldId === 'bulan'
                          )[0].value ||
                        item.label ===
                          contentData.filter(
                            (item) => item.fieldId === 'bulan'
                          )[0].value
                    )?.label
                  } ${contentStringTransformer(
                    contentData.filter((item) => item.fieldId === 'tahun')[0]
                  )}`
                : '';
            const tags = contentStringTransformer(
              contentData.filter((item) => item.fieldId === 'tags')[0]
            )
              .split(',')
              .map((tag: string) => tag.trim());
            const thumbnail = singleImageTransformer(
              contentData.filter(
                (item) => item.fieldId === 'artikel-thumbnail'
              )[0]
            ).imageUrl;

            return {
              category,
              title,
              description,
              date,
              tags,
              thumbnail,
              id
            };
          }
        );

        const sortedData = contentData.sort((a: any, b: any) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();

          if (isNaN(dateA)) {
            return 1;
          }
          if (isNaN(dateB)) {
            return -1;
          }

          return dateB - dateA;
        });

        if (sliderData?.length > 0) {
          if (sortedData.length < 6) {
            setListData(sortedData);
          } else {
            setListData(getDifference(sortedData, sliderData));
          }
        } else {
          setSliderData(sortedData.slice(0, 5));
          setListData(sortedData.slice(5));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    setCurrentPage(1);
    fetchData();
  }, [params]);

  const yearDropdown = (startYear: number) => {
    const currentYear = new Date().getFullYear();

    const years = [
      {
        label: 'Pilih Tahun',
        value: '',
        onClick: () => setParams({ ...params, yearFilter: '' })
      }
    ];

    for (let year = currentYear; year >= startYear; year--) {
      years.push({
        label: year.toString(),
        value: year.toString(),
        onClick: () => setParams({ ...params, yearFilter: year.toString() })
      });
    }

    return years;
  };

  const monthDropdown = () => {
    const month = [
      {
        label: 'Pilih Bulan',
        value: '',
        onClick: () => setParams({ ...params, monthFilter: '' })
      },
      {
        label: 'Januari',
        value: '01',
        onClick: () => setParams({ ...params, monthFilter: '01' })
      },
      {
        label: 'Februari',
        value: '02',
        onClick: () => setParams({ ...params, monthFilter: '02' })
      },
      {
        label: 'Maret',
        value: '03',
        onClick: () => setParams({ ...params, monthFilter: '03' })
      },
      {
        label: 'April',
        value: '04',
        onClick: () => setParams({ ...params, monthFilter: '04' })
      },
      {
        label: 'Mei',
        value: '05',
        onClick: () => setParams({ ...params, monthFilter: '05' })
      },
      {
        label: 'Juni',
        value: '06',
        onClick: () => setParams({ ...params, monthFilter: '06' })
      },
      {
        label: 'Juli',
        value: '07',
        onClick: () => setParams({ ...params, monthFilter: '07' })
      },
      {
        label: 'Agustus',
        value: '08',
        onClick: () => setParams({ ...params, monthFilter: '08' })
      },
      {
        label: 'September',
        value: '09',
        onClick: () => setParams({ ...params, monthFilter: '09' })
      },
      {
        label: 'Oktober',
        value: '10',
        onClick: () => setParams({ ...params, monthFilter: '10' })
      },
      {
        label: 'November',
        value: '11',
        onClick: () => setParams({ ...params, monthFilter: '11' })
      },
      {
        label: 'Desember',
        value: '12',
        onClick: () => setParams({ ...params, monthFilter: '12' })
      }
    ];

    return month;
  };

  const getDifference = (arr1: any, arr2: any) => {
    const map2 = new Map(arr2.map((obj: { id: any }) => [obj.id, obj]));
    const difference = arr1.filter((obj: { id: unknown }) => !map2.has(obj.id));

    return difference;
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-2 pt-[5rem] pb-[32px] lg:pb-[64px]">
      <div className="text-center lg:pb-2 xs:pb-[56px]">
        <h2 className="text-[2.25rem] 2xl:text-[3.5rem] font-bold text-purple_dark">
          {contentStringTransformer(pageData['nama-section'])}
        </h2>
        <h2
          className="text-[1.5rem] lg:text-[2rem]"
          dangerouslySetInnerHTML={{
            __html: contentStringTransformer(pageData['deskripsi-section'])
          }}
        />
      </div>

      {sliderData?.length > 0 && (
        <div className="w-full">
          <Slider
            ref={(slider) => {
              sliderRef.current = slider;
            }}
            {...sliderSettings}
          >
            {sliderData?.map((item: any, index: any) => {
              if (index < 5) {
                return (
                  <SliderInformation
                    key={index}
                    bgColor="purple_superlight"
                    title={
                      <div className="flex flex-col gap-3 lg:gap-6 text-left justify-between lg:justify-center lg:h-[281px]">
                        <div
                          className={`grid xs:grid-cols-1 xm:grid-cols-2 ${item.date !== '' ? 'xs:divide-x-0 xm:divide-x-2' : ''} text-[14px] max-w-[250px]`}
                        >
                          {item.category !== '-' &&
                            item.category !== '' &&
                            item.category !== undefined && (
                              <div className="font-bold text-purple_dark whitespace-nowrap">
                                {item.category}
                              </div>
                            )}
                          {item.date !== '-' && item.date !== '' && (
                            <div className="pl-2 whitespace-nowrap">
                              {item.date}
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col gap-3">
                          <p className="text-[36px] font-bold">
                            {item.title !== '-' ? item.title : ''}
                          </p>
                          <p className="text-[16px] line-clamp-2">
                            {item.description !== '-' ? item.description : ''}
                          </p>
                        </div>

                        {item.tags[0] !== '' && item.tags?.length > 0 ? (
                          <div className="flex flex-row flex-wrap gap-[12px]">
                            {' '}
                            {item.tags
                              ?.slice(0, 2)
                              .map(
                                (
                                  value: string,
                                  key: React.Key | null | undefined
                                ) => <MediumTag key={key} title={value} />
                              )}
                          </div>
                        ) : null}

                        <Link
                          href={`/pusat-informasi/pusat-informasi?tab=Agency&content=${item.id}`}
                        >
                          <div className="flex flex-row items-center flex-wrap gap-[12px] font-bold text-purple_dark">
                            Selengkapnya
                            <Icon name="chevronRight" color="purple_dark" />
                          </div>
                        </Link>
                      </div>
                    }
                    image={item.thumbnail}
                  />
                );
              }
            })}
          </Slider>
          <div className="flex flex-row justify-between w-full">
            <div
              className="p-2 border-2 rounded-full border-purple_dark rotate-180"
              role="button"
              onClick={previous}
            >
              <Icon name="chevronRight" color="purple_dark" />
            </div>
            <div
              className="p-2 border-2 rounded-full border-purple_dark"
              role="button"
              onClick={next}
            >
              <Icon name="chevronRight" color="purple_dark" />
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col w-full">
        <CategoryWithThreeCards
          outerClass={'xs:pb-[24px] lg:!pb-[48px] pt-[5rem]'}
          hiddenCategory
          hidePagination
          defaultSelectedCategory={category}
          onCategoryChange={(tab) => onCategoryChange(tab)}
          onSearchChange={(e) => {
            setSearch(e.target.value);
          }}
          onSearch={() => {
            setParams({ ...params, searchFilter: search });
          }}
          filterRowLayout={true}
          categoryCard="B"
          categories={['Berita dan Kegiatan', 'AvriStory', 'Avrist Life Guide']}
          tabs={[
            {
              type: 'dropdown',
              label: 'tahun',
              options: yearDropdown(2009)
            },
            {
              type: 'dropdown',
              label: 'Bulan',
              options: monthDropdown()
            }
          ]}
          searchPlaceholder="Cari Kegiatan"
          customContent={
            <>
              {paginatedData.length > 0 ? (
                <div className="grid grid-cols-3 gap-[24px] xs:max-lg:grid-cols-1">
                  {paginatedData.map(
                    (
                      item: {
                        id: any;
                        title: string;
                        date: string;
                        thumbnail: string | undefined;
                      },
                      index: React.Key | null | undefined
                    ) => (
                      <Link
                        key={index}
                        href={`/pusat-informasi/pusat-informasi?tab=Agency&content=${item.id}`}
                      >
                        <CardCategoryB
                          summary={item.title !== '-' ? item.title : ''}
                          description={item.date !== '-' ? item.date : ''}
                          imageUrl={item.thumbnail}
                          lineClamp={3}
                        />
                      </Link>
                    )
                  )}
                </div>
              ) : (
                <NotFound />
              )}
            </>
          }
        />
        <div className="flex flex-col gap-4 lg:flex-row justify-between mt-[24px]">
          <p className="text-[20px]">
            Menampilkan{' '}
            <span className="font-bold text-purple_dark">
              {listData?.length === 0 ? 0 : startIndex + 1}-
              {Math.min(endIndex, listData ? listData.length : 0)}
            </span>{' '}
            dari <span className="font-bold">{listData?.length}</span> hasil
          </p>
          <div className="flex flex-row gap-1 lg:gap-[12px] items-center">
            <span
              className="mt-[3px] rotate-180"
              role="button"
              onClick={() =>
                handleChangePage(currentPage > 1 ? currentPage - 1 : 1)
              }
            >
              <Icon name="chevronRight" color="purple_dark" />
            </span>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <div
                key={page}
                role="button"
                onClick={() => handleChangePage(page)}
                className={`w-6 h-6 flex items-center justify-center cursor-pointer ${
                  currentPage === page ? 'text-purple_dark font-bold' : ''
                }`}
              >
                {page}
              </div>
            ))}
            <span
              className="mt-[3px]"
              role="button"
              onClick={() =>
                handleChangePage(
                  currentPage === totalPages ? currentPage : currentPage + 1
                )
              }
            >
              <Icon name="chevronRight" color="purple_dark" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
