'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import CustomerFund from '@/components/molecules/specifics/avram/_investasi/CustomerFund';
import { format } from 'date-fns';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Slider from 'react-slick';
import Icon from '@/components/atoms/Icon';
import MediumTag from '@/components/atoms/Tag/MediumTag';
import CardCategoryB from '@/components/molecules/specifics/agi/Cards/CategoriB';
import CategoryWithThreeCards from '@/components/molecules/specifics/agi/CategoryWithThreeCards';
import SliderInformation from '@/components/molecules/specifics/agi/SliderInformation';
import { handleGetContentCategory } from '@/services/content-page.api';
import { QueryParams } from '@/utils/httpService';
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
    infinite: false,
    arrows: false,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          centerMode: false
        }
      }
    ]
  };

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, setTab] = useState('');
  const [category, setCategory] = useState('');

  const [searchKeyWords, setSearchKeywords] = useState('');
  const [search, setSearch] = useState('');
  const [year, setYear] = useState<any>([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [month, setMonth] = useState<any>([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [listData, setListData] = useState<any>([]);
  const [sliderData, setSliderData] = useState<any>([]);

  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalItem = listData.length;

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
        const queryParams: QueryParams = {
          includeAttributes: 'true',
          searchFilter: searchKeyWords,
          yearFilter: selectedYear,
          monthFilter: selectedMonth
        };
        const data = await handleGetContentCategory(
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

        setYear(transformData(uniqueTahun, 'Pilih Tahun', setSelectedYear));
        setMonth(transformData(uniqueBulan, 'Pilih Bulan', setSelectedMonth));

        const newDataContentWithCategory = Object.values(data.data.categoryList)
          .flat()
          .filter((item) => item !== undefined && item !== null);
        const contentData = newDataContentWithCategory?.map(
          ({ contentData, id, createdAt, categoryName, title, shortDesc }) => {
            const category = categoryName;
            const description = shortDesc;
            const date = format(new Date(createdAt), 'dd MMMM yyyy');
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

        if (sliderData?.length > 0) {
          if (contentData.length < 6) {
            setListData(contentData);
          } else {
            setListData(getDifference(contentData, sliderData));
          }
        } else {
          setSliderData(contentData.slice(0, 5));
          setListData(contentData.slice(5));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [searchKeyWords, selectedMonth, selectedYear]);

  const getDifference = (arr1: any, arr2: any) => {
    const map2 = new Map(arr2.map((obj: { id: any }) => [obj.id, obj]));
    const difference = arr1.filter((obj: { id: unknown }) => !map2.has(obj.id));

    return difference;
  };

  const transformData = (
    data: any,
    initialSelect: string,
    setSelectedFunction: any
  ) => {
    const dataArray = Array.from(data).sort((a: any, b: any) => b - a);

    const transformedData = [
      { label: initialSelect, value: '' },
      ...dataArray.map((item) => ({
        label: item,
        value: item,
        onClick: () => setSelectedFunction(item)
      }))
    ];

    return transformedData;
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-2 mt-10">
      <div className="text-center">
        <h2 className="text-[2.25rem] 2xl:text-[3.5rem] font-medium mb-6 text-purple_dark">
          {contentStringTransformer(pageData['nama-section'])}
        </h2>
        <h2
          className="text-[1.5rem] md:text-[2rem] mb-6"
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
                      <div className="flex flex-col gap-4 text-left">
                        <p className="text-[14px]">
                          <span className="font-bold text-purple_dark">
                            {item.category !== '-' ? item.category : ''}
                          </span>{' '}
                          {item.date !== '-' ? `| ${item.date}` : ''}
                        </p>
                        <p className="text-[36px] font-bold">
                          {item.title !== '-' ? item.title : ''}
                        </p>
                        <p className="text-[16px] line-clamp-2">
                          {item.description !== '-' ? item.description : ''}
                        </p>
                        <div className="flex flex-row flex-wrap gap-[12px]">
                          {item.tags?.length > 0
                            ? item.tags.map(
                                (
                                  value: string,
                                  key: React.Key | null | undefined
                                ) => <MediumTag key={key} title={value} />
                              )
                            : null}
                        </div>
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
          <div className="flex flex-row justify-between w-full mt-10 md:mb-0">
            <div
              className="p-2 border-2 rounded-full border-purple_dark"
              role="button"
              onClick={previous}
            >
              <Icon name="chevronLeft" color="purple_dark" />
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
          hiddenCategory
          hidePagination
          defaultSelectedCategory={category}
          onCategoryChange={(tab) => onCategoryChange(tab)}
          onSearchChange={(e) => {
            setSearch(e.target.value);
          }}
          onSearch={() => {
            setSearchKeywords(search);
          }}
          filterRowLayout={true}
          categoryCard="B"
          categories={['Berita dan Kegiatan', 'AvriStory', 'Avrist Life Guide']}
          tabs={[
            {
              type: 'dropdown',
              label: 'tahun',
              options: year
            },
            {
              type: 'dropdown',
              label: 'Bulan',
              options: month
            }
          ]}
          searchPlaceholder="Cari Kegiatan"
          customContent={
            <>
              {paginatedData.length > 0 && (
                <div className="grid grid-cols-3 gap-[24px] xs:max-sm:grid-cols-1">
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
              )}
            </>
          }
        />
        <div className="flex flex-row justify-between">
          <p className="text-lg">
            Menampilkan{' '}
            <span className="font-bold">{`${currentPage * ITEMS_PER_PAGE - (ITEMS_PER_PAGE - 1)}-${ITEMS_PER_PAGE * currentPage > totalItem ? totalItem : ITEMS_PER_PAGE * currentPage}`}</span>{' '}
            dari <span className="font-bold">{totalItem}</span> hasil
          </p>
          <div className="flex flex-row gap-[12px] items-center">
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
              onClick={() => handleChangePage(totalPages)}
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
