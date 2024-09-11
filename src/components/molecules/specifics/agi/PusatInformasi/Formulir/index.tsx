'use client';
import React, { useState, useEffect } from 'react';
import Icon from '@/components/atoms/Icon';
import NotFound from '@/components/atoms/NotFound';
import DownloadFileButton from '@/components/molecules/specifics/agi/DownloadFileButton';
import SearchBox from '@/components/molecules/specifics/agi/SearchBox';
import {
  handleGetContentCategory,
  handleGetContentDetail
} from '@/services/content-page.api';
import { BASE_SLUG } from '@/utils/baseSlug';
import {
  contentDetailTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

const Formulir = () => {
  const [contentData, setContentData] = useState<any>();
  const [search, setSearch] = useState('');
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

  const fetchContent = async () => {
    try {
      const apiContent = await handleGetContentCategory(
        BASE_SLUG.PUSAT_INFORMASI.CONTENT.FORMULIR,
        {
          searchFilter: search
        }
      );

      const transformedContent = apiContent.data.categoryList[''] ?? [];

      const transformedData = await Promise.all(
        transformedContent?.map(async (item: any) => {
          const apiDetailContent = await handleGetContentDetail(item.id);
          const { content } = contentDetailTransformer(apiDetailContent);

          const title = content['Title'].value;
          const file = singleImageTransformer(content['file']).imageUrl;
          const fileType = singleImageTransformer(content['file'])
            .imageUrl.split('.')
            .pop();

          return { title, file, fileType };
        })
      );

      setContentData(transformedData);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    fetchContent();
  }, [search]);

  return (
    <div className="flex flex-col px-[2rem] lg:px-[8.5rem] pb-[6.25rem]">
      <section className="w-full flex flex-col items-center text-center py-[80px]">
        <h1 className="font-karla font-bold text-[2.25rem] lg:text-[3.5rem] leading-[120%] -tracking-[0.04em]">
          Temukan{' '}
          <span className="text-purple_dark">
            formulir yang Anda butuhkan
          </span>{' '}
          di bawah ini
        </h1>
      </section>
      <div className="pb-[24px] lg:pb-[48px]">
        <SearchBox
          onSearch={(value: string) => {
            setSearch(value);
          }}
          placeHolder="Cari Formulir"
        />
      </div>
      <div className="flex flex-col gap-6">
        {contentData?.length > 0 ? (
          paginatedData.map((item: any, index: number) => (
            <DownloadFileButton
              title={item.title}
              fileType={item.fileType}
              key={index}
              filePath={item.file}
            />
          ))
        ) : (
          <NotFound />
        )}
      </div>
      <div
        className={`flex flex-col gap-4 pt-[44px] lg:flex-row justify-between`}
      >
        <div>
          <p className="text-[20px]">
            Menampilkan{' '}
            <span className="font-bold text-purple_dark">
              {contentData?.length === 0 ? 0 : startIndex + 1}-
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
    </div>
  );
};

export default Formulir;
