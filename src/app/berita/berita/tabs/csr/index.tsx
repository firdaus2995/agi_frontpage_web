'use client';
import { FC, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import {
  yearDropdown,
  monthDropdown
} from '@/app/berita/berita/components/dropdown-filter';
import Paginate from '@/app/berita/berita/components/paginate';
import Icon from '@/components/atoms/Icon';
import NotFound from '@/components/atoms/NotFound';
import MediumTag from '@/components/atoms/Tag/MediumTag';
import CardCategoryC from '@/components/molecules/specifics/agi/Cards/CategoryC';
import CategoryWithThreeCards from '@/components/molecules/specifics/agi/CategoryWithThreeCards';
import SliderInformation from '@/components/molecules/specifics/agi/SliderInformation';
import { getCSR } from '@/services/berita';
import { mergeAllData } from '@/utils/helpers';
import {
  handleTransformedContent,
  singleImageTransformer
} from '@/utils/responseTransformer';

interface ICSR {
  title: string;
  description: string;
}

const CSR: FC<ICSR> = ({ title, description }) => {
  const sliderRef = useRef<Slider | null>(null);
  const [contentData, setContentData] = useState<any>();
  const [sliderData, setSliderData] = useState<any>([]);
  const [search, setSearch] = useState('');
  const [params, setParams] = useState({
    yearFilter: '',
    monthFilter: '',
    searchFilter: ''
  });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 6
  });
  const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
  const endIndex = startIndex + pagination.itemsPerPage;
  const paginatedData = contentData
    ? contentData?.slice(startIndex, endIndex)
    : [];
  const totalPages = contentData
    ? Math.ceil(contentData?.length / pagination.itemsPerPage)
    : 0;

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
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: sliderData.length > 1 ? true : false,
    arrows: false,
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

  const fetchContent = async () => {
    try {
      const fetchContentCategory = await getCSR({
        includeAttributes: 'true',
        searchFilter: params.searchFilter,
        yearFilter: params.yearFilter,
        monthFilter: params.monthFilter
      });

      const categoryList = fetchContentCategory.data.categoryList;

      // merge  all category data
      const mergedData = mergeAllData(categoryList);
      const sorted = mergedData.sort(
        //@ts-ignore
        (a: any, b: any) => new Date(b?.createdAt) - new Date(a?.createdAt)
      );

      const transformedData = sorted?.map((item: any) => {
        const { content } = handleTransformedContent(
          item.contentData,
          item.title
        );

        const judul = item.title;
        const waktu = `${
          monthDropdown(params, setParams).find(
            (item) =>
              item.value === content['bulan'].value ||
              item.label === content['bulan'].value
          )?.label
        } ${content['tahun'].value}`;
        const deskripsi = content['artikel-looping'].contentData[0].details;
        const image = singleImageTransformer(
          content['artikel-thumbnail']
        ).imageUrl;
        const id = item.id;
        const tags = content['tags'].value;
        const date = new Date(item.createdAt).getDate();
        const artikelTopic = 'Berita dan Acara';

        return {
          judul,
          waktu,
          deskripsi,
          image,
          id,
          tags,
          date,
          artikelTopic
        };
      });

      if (sliderData?.length > 0) {
        if (transformedData.length < 6) {
          setContentData(transformedData);
        } else {
          setContentData(getDifference(transformedData, sliderData));
        }
      } else {
        setSliderData(transformedData.slice(0, 5));
        setContentData(transformedData.slice(5));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchContent();
  }, [params]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, [contentData]);

  const getDifference = (arr1: any, arr2: any) => {
    const map2 = new Map(arr2.map((obj: { id: any }) => [obj.id, obj]));
    const difference = arr1.filter((obj: { id: unknown }) => !map2.has(obj.id));

    return difference;
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-2">
      <div className="text-center px-[2rem] md:px-[8.5rem] lg:pb-[8px] xs:pb-[56px] flex flex-col gap-[0.75rem]">
        <h2 className="text-[2.25rem] md:text-[3.5rem] font-bold text-purple_dark leading-[2.7rem]">
          {title ?? 'CSR Avrist General Insurance'}
        </h2>
        <h2 className="text-[1.125rem] md:text-[2.25rem]">
          {description ??
            'Informasi terkini dari siaran pers hingga aktivitas sosial.'}
        </h2>
      </div>

      <div className="w-full h-full px-[2rem]">
        <Slider
          ref={(slider) => {
            sliderRef.current = slider;
          }}
          {...sliderSettings}
        >
          {sliderData?.slice(0, 5)?.map((item: any, index: number) => (
            <SliderInformation
              key={index}
              bgColor="purple_superlight"
              title={
                <div className="flex flex-col gap-4 text-left justify-between md:justify-center min-h-[290px] md:h-[330px]">
                  <div className="grid xs:grid-cols-1 xm:grid-cols-2 xs:divide-x-0 xm:divide-x-2 text-[14px] max-w-[250px]">
                    {item.artikelTopic !== '-' &&
                      item.artikelTopic !== undefined && (
                        <div className="font-bold text-purple_dark whitespace-nowrap">
                          {item.artikelTopic}
                        </div>
                      )}
                    {item.date !== '-' && item.date !== undefined && (
                      <div className="xm:pl-2 flex flex-row whitespace-nowrap">
                        {item.date} {item.waktu}
                      </div>
                    )}
                  </div>
                  <p
                    className="text-banner-title-mobile lg:text-banner-title-desktop font-bold line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: item.judul
                    }}
                  />
                  <p
                    className={
                      item.deskripsi[0]?.value?.substring(0, 250) === '<p>-</p>'
                        ? 'hidden'
                        : 'text-[16px] line-clamp-2'
                    }
                    dangerouslySetInnerHTML={{
                      __html: item.deskripsi
                        ? item.deskripsi[0]?.value?.substring(0, 250) + '...'
                        : '-'
                    }}
                  />

                  <div className="flex flex-row flex-wrap gap-[12px]">
                    <MediumTag title={item.tags} />
                  </div>
                  <Link
                    href={{
                      pathname: `/berita/berita/tabs/csr/${item.id}`
                    }}
                    className="flex flex-row items-center flex-wrap gap-[12px] font-bold text-purple_dark"
                  >
                    Selengkapnya
                    <Icon name="chevronRight" color="purple_dark" />
                  </Link>
                </div>
              }
              image={item.image}
              imageClassName="rounded-r-2xl"
            />
          ))}
        </Slider>
        <div className="flex flex-row justify-between w-full mt-10 md:mb-0 md:px-[6.5rem]">
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

      <CategoryWithThreeCards
        outerClass="px-[2rem] md:px-[8.5rem] w-full pb-[100px]"
        defaultSelectedCategory={'Berita dan Kegiatan'}
        filterRowLayout={true}
        hiddenCategory
        hidePagination
        categoryCard="B"
        categories={['Berita dan Kegiatan', 'AvriStory', 'Avrist Life Guide']}
        searchPlaceholder="Cari Kegiatan"
        onSearchChange={(e) => {
          setSearch(e.target.value);
        }}
        onSearch={() => {
          setParams({ ...params, searchFilter: search });
        }}
        tabs={[
          {
            type: 'dropdown',
            label: 'tahun',
            options: yearDropdown(2009, params, setParams)
          },
          {
            type: 'dropdown',
            label: 'Bulan',
            options: monthDropdown(params, setParams)
          }
        ]}
        customContent={
          paginatedData.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                {paginatedData?.map((item: any, index: number) => (
                  <Link
                    key={index}
                    href={{
                      pathname: `/berita/berita/tabs/csr/${item.id}`
                    }}
                  >
                    <CardCategoryC
                      summary={item.judul}
                      name=""
                      position={`${item.date} ${item.waktu}`}
                      image={item.image}
                    />
                  </Link>
                ))}
              </div>
              <Paginate
                data={contentData}
                startIndex={startIndex}
                endIndex={endIndex}
                totalPages={totalPages}
                pagination={pagination}
                setPagination={setPagination}
              />
            </>
          ) : (
            <NotFound />
          )
        }
      />
    </div>
  );
};

export default CSR;
