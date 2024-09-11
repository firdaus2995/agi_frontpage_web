'use client';
import React, { useEffect, useState } from 'react';
import Icon from '@/components/atoms/Icon';
import NotFound from '@/components/atoms/NotFound';
import DownloadFileButton from '@/components/molecules/specifics/agi/DownloadFileButton';
import SearchBox from '@/components/molecules/specifics/agi/SearchBox';
import { handleGetContentCategory } from '@/services/content-page.api';
import { BASE_SLUG } from '@/utils/baseSlug';
import {
  contentCategoryTransformer,
  contentStringTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

type WordingPolisProps = {
  pageData: any;
};

const WordingPolis = (props: WordingPolisProps) => {
  const { pageData } = props;
  const [contentData, setContentData] = useState<any>([]);
  const [search, setSearch] = useState('');
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const totalPages = Math.ceil(contentData?.length / ITEMS_PER_PAGE);

  const handleChangePage = (newPage: any) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const paginatedData = contentData?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const fetchContent = async () => {
    try {
      const apiContent = await handleGetContentCategory(
        BASE_SLUG.PUSAT_INFORMASI.CONTENT.WORDING_KLAUSULA,
        {
          includeAttributes: 'true',
          searchFilter: search
        }
      );

      const listData: any = [];
      const transformedData = contentCategoryTransformer(apiContent, '');
      transformedData?.map((item) => {
        const title = item.title;
        const file = singleImageTransformer(item.content['file']).imageUrl;
        const fileType = 'PDF';

        listData.push({
          title,
          file,
          fileType
        });
      });
      setContentData(listData);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchContent();
  }, [search]);

  return (
    <div className="flex flex-col px-[2rem] lg:px-[8.5rem] pb-[6.25rem]">
      <section className="w-full flex flex-col items-center text-center py-[80px]">
        <h1 className="font-karla text-[2.25rem] lg:text-[3.5rem] text-purple_dark font-bold">
          {contentStringTransformer(pageData['body-judul'])}
        </h1>
      </section>

      <div className="pb-[24px] lg:pb-[48px]">
        <SearchBox
          onSearch={(key) => setSearch(key)}
          placeHolder="Cari Formulir"
        />
      </div>
      {paginatedData?.length > 0 ? (
        <div className="flex flex-col gap-6">
          {paginatedData?.map(
            (
              item: {
                title: string;
                fileType: string;
                file: string | undefined;
              },
              index: React.Key | null | undefined
            ) => (
              <DownloadFileButton
                title={item.title}
                fileType={item.fileType}
                key={index}
                filePath={item.file}
              />
            )
          )}
        </div>
      ) : (
        <NotFound />
      )}
      <div className="flex flex-col gap-4 lg:flex-row justify-between mt-[24px]">
        <p className="text-[20px]">
          Menampilkan{' '}
          <span className="font-bold text-purple_dark">
            {contentData?.length === 0 ? 0 : startIndex + 1}-
            {Math.min(endIndex, contentData ? contentData.length : 0)}
          </span>{' '}
          dari <span className="font-bold">{contentData?.length}</span> hasil
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
  );
};

export default WordingPolis;
