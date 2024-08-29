import React, { useState, useEffect } from 'react';
import { ISetData } from '@/app/tentang-kami/avrist-general-insurance/page';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon';
import NotFound from '@/components/atoms/NotFound';
import MediumTag from '@/components/atoms/Tag/MediumTag';
import CategoryWithThreeCards from '@/components/molecules/specifics/agi/CategoryWithThreeCards';
import { handleGetContentPage } from '@/services/content-page.api';
import { getListLaporanPerusahaan } from '@/services/laporan-perusahaan';
import { BASE_SLUG } from '@/utils/baseSlug';
import {
  contentStringTransformer,
  pageTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

const LaporanPerusahaan: React.FC<ISetData> = ({ setData }) => {
  const [contentData, setContentData] = useState<any>();
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [params, setParams] = useState({
    category: '',
    yearFilter: '',
    monthFilter: '',
    searchFilter: ''
  });
  const [categories, setCategories] = useState<any>([]);
  const [itemsPerPage] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = contentData
    ? contentData.slice(startIndex, endIndex)
    : [];
  const totalPages = contentData
    ? Math.ceil(contentData.length / itemsPerPage)
    : 0;

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    handleGetContentPage(
      BASE_SLUG.TENTANG_AVRIST_LIFE.PAGE.LAPORAN_PERUSAHAAN
    ).then((res: any) => {
      setData(res);
      const { content } = pageTransformer(res);

      setTitle(contentStringTransformer(content['nama-section']));
      setDesc(contentStringTransformer(content['deskripsi-section']));
    });
  }, []);

  useEffect(() => {
    fetchContent();
  }, [params]);

  useEffect(() => {
    categories.length > 0 && setParams({ ...params, category: categories[0] });
  }, [categories]);

  const fetchContent = async () => {
    try {
      const apiContent = await getListLaporanPerusahaan({
        includeAttributes: 'true',
        category: params.category,
        searchFilter: params.searchFilter,
        yearFilter: params.yearFilter,
        monthFilter: params.monthFilter
      });

      const categoryList = Object.keys(apiContent.data.categoryList);
      categories.length < 1 && setCategories(categoryList);

      setContentData(apiContent.data.categoryList[params.category]);
    } catch (err) {
      console.error(err);
    }
  };

  const getContentFile = (data: any) => {
    const fileData = data
      ? data.map((item: any) => {
          return {
            name: item?.contentData[2]?.value,
            file: singleImageTransformer(item.contentData[3]).imageUrl
          };
        })
      : [];

    return fileData;
  };

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

  const renderPage = () => {
    return (
      <div className="flex flex-col gap-4 md:flex-row items-start justify-between font-opensans ">
        <div>
          <p className="text-[20px]">
            Menampilkan{' '}
            <span className="font-bold text-purple_dark">
              {paginatedData?.length === 0 ? 0 : startIndex + 1}-
              {Math.min(endIndex, contentData ? contentData.length : 0)}
            </span>{' '}
            dari <span className="font-bold">{contentData?.length}</span> hasil
          </p>
        </div>
        <div className="flex flex-row gap-[12px] items-center">
          <span
            className="mt-[3px] rotate-180"
            role="button"
            onClick={() =>
              handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
            }
          >
            <Icon name="chevronRight" color="purple_dark" />
          </span>
          <div className="flex flex-row flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
            ))}
          </div>
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
    );
  };

  return (
    <div className="w-full flex flex-col gap-4 bg-white justify-center px-[2rem] py-[5rem]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-[5rem]">
          <div className="flex flex-col">
            <p className="text-heading-1-mobile lg:text-heading-1-desktop text-center font-extrabold text-purple_dark font-karla">
              {title}
            </p>
            <p
              className="text-heading-2-mobile lg:text-heading-2-desktop text-gray_black_dark text-center lg:mt-2"
              dangerouslySetInnerHTML={{
                __html: desc
              }}
            />
          </div>
          <CategoryWithThreeCards
            defaultSelectedCategory={'Laporan Perusahaan'}
            onCategoryChange={(tab: any) => setParams({ ...params, category: tab })}
            filterRowLayout={true}
            categories={contentData && categories ? categories : []}
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
            searchPlaceholder="Cari laporan"
            onSearchChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {
              setSearch(e.target.value);
            }}
            onSearch={() => {
              setParams({ ...params, searchFilter: search });
            }}
            hidePagination
            customContent={
              <>
                {paginatedData.length > 0 ? (
                  <div className="w-full flex flex-col gap-6">
                    {contentData &&
                      getContentFile(paginatedData)?.map(
                        (item: any, index: number) => (
                          <div
                            key={index}
                            className="w-full flex xs:flex-col sm:flex-row xs:justify-start sm:justify-between  p-[1.5rem] border rounded-xl gap-2"
                          >
                            <div className="flex flex-row gap-2 items-center">
                              <p className="font-bold text-2xl font-karla">
                                {item.name}
                              </p>
                              <MediumTag title="PDF" />
                            </div>
                            <div>
                              <Button
                                title="Unduh"
                                customButtonClass="rounded-xl bg-purple_dark"
                                customTextClass="text-white font-opensans font-semibold leading-[23.68px]"
                                onClick={async () =>
                                  window.open(item.file, '_blank')
                                }
                              />
                            </div>
                          </div>
                        )
                      )}
                  </div>
                ) : (
                  <NotFound />
                )}

                {renderPage()}
              </>
            }
            outerClass="sm:!py-[0px] px-0 md:px-[8.5rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default LaporanPerusahaan;
