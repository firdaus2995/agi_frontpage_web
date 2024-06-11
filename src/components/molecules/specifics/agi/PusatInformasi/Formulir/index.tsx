'use client';
import React, { useState, useEffect } from 'react';
import Icon from '@/components/atoms/Icon';
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
  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 5
  });
  const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
  const endIndex = startIndex + pagination.itemsPerPage;
  const paginatedData = contentData
    ? contentData?.slice(startIndex, endIndex)
    : [];
  const totalPages = contentData
    ? Math.ceil(contentData?.length / pagination.itemsPerPage)
    : 0;

  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, currentPage: page });
  };

  const fetchContent = async () => {
    try {
      const apiContent = await handleGetContentCategory(
        BASE_SLUG.PUSAT_INFORMASI.CONTENT.FORMULIR,
        {
          searchFilter: search
        }
      );

      const transformedContent = apiContent.data.categoryList[''];

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
    <div className="flex flex-col gap-4 px-[2rem] md:px-[8.5rem] pb-[3.25rem]">
      <section className="w-full flex flex-col items-center text-center my-[30px] md:my-[60px]">
        <h1 className="font-karla text-[2.25rem] md:text-[3.5rem]">
          Temukan{' '}
          <span className="font-medium text-purple_dark">
            formulir yang Anda butuhkan
          </span>{' '}
          di bawah ini
        </h1>
      </section>

      <SearchBox
        onSearch={(value: string) => {
          setSearch(value);
        }}
        placeHolder="Cari Formulir"
      />
      <div className="flex flex-col gap-3">
        {paginatedData.map((item: any, index: number) => (
          <DownloadFileButton
            title={item.title}
            fileType={item.fileType}
            key={index}
            filePath={item.file}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 sm:flex-row justify-between">
        <div>
          <p className="text-[1.25rem]">
            Menampilkan{' '}
            <span className="font-bold text-purple_dark">
              {contentData ? startIndex + 1 : 0}-
              {Math.min(endIndex, contentData ? contentData.length : 0)}
            </span>{' '}
            dari{' '}
            <span className="font-bold">
              {contentData ? contentData.length : 0}
            </span>{' '}
            hasil
          </p>
        </div>
        <div className="flex flex-row gap-[8px] items-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <div
              key={page}
              role="button"
              onClick={() => handlePageChange(page)}
              className={`w-6 h-6 flex items-center justify-center cursor-pointer ${
                pagination.currentPage === page
                  ? 'text-purple_dark font-bold'
                  : ''
              }`}
            >
              {page}
            </div>
          ))}
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
  );
};

export default Formulir;
