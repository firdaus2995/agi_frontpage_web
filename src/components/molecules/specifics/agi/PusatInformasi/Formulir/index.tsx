'use client';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
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
  const [isEmpty, setIsEmpty] = useState(false);
  const [itemsPerPage] = useState(5);

  // PAGINATION STATE
  const [paginatedData, setPaginatedData] = useState<any[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  // PAGINATION LOGIC HOOK
  useEffect(() => {
    if (!contentData?.length) return; // check if contentaData already present

    const endOffset = itemOffset + itemsPerPage;
    setPaginatedData(contentData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(contentData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, contentData]);

  // PAGINATION LOGIC HANDLER
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % contentData.length;
    setItemOffset(newOffset);
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

      setIsEmpty(false);
      setContentData(transformedData);
    } catch (error: any) {
      setIsEmpty(true);
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
        {!isEmpty ? (
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
        className={`flex flex-col gap-4 md:flex-row justify-between ${isEmpty && 'hidden'}`}
      >
        <div>
          <p className="text-[20px]">
            Menampilkan{' '}
            <span className="font-bold text-purple_dark">
              {contentData?.length === 0 || contentData === undefined
                ? 0
                : itemOffset + 1}
              -
              {Math.min(
                (itemOffset + 1) * itemsPerPage,
                contentData ? contentData.length : 0
              )}
            </span>{' '}
            dari{' '}
            <span className="font-bold">
              {contentData && contentData.length}
            </span>{' '}
            hasil
          </p>
        </div>
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          nextLabel={<Icon name="chevronRight" color="purple_dark" />}
          previousLabel={<Icon name="chevronLeft" color="purple_dark" />}
          containerClassName="flex flex-row gap-[8px] items-center"
          activeClassName="text-purple_dark font-bold"
          pageClassName="w-6 h-6 flex items-center justify-center cursor-pointer text-xl"
        />
      </div>
    </div>
  );
};

export default Formulir;
