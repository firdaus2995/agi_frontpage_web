'use client';
import React, { useEffect, useState } from 'react';
import Bank from './Bank';
import Bengkel from './Bengkel';
import ButtonMenuVertical from '@/components/molecules/specifics/agi/ButtonMenuVertical';
import SearchBox from '@/components/molecules/specifics/agi/SearchBox';
import {
  handleGetContentDetail,
  handleGetContentFilter
} from '@/services/content-page.api';
import { BASE_SLUG } from '@/utils/baseSlug';
import { QueryParams } from '@/utils/httpService';
import {
  contentDetailTransformer,
  contentStringTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

type RekananProps = {
  pageData: any;
};

const Rekanan = (props: RekananProps) => {
  const { pageData } = props;
  const [tab, setTab] = useState('Bengkel');
  const btnVerticalData = [
    {
      title: 'Bengkel',
      onClick: () => {
        setTab('Bengkel');
      }
    },
    {
      title: 'Bank',
      onClick: () => {
        setTab('Bank');
      }
    }
  ];

  const [contentData, setContentData] = useState<any>();
  const [search, setSearch] = useState('');
  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 5
  });
  const totalPages = contentData
    ? Math.ceil(contentData?.length / pagination.itemsPerPage)
    : 0;

  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, currentPage: page });
  };

  const fetchContent = async () => {
    const queryParams: QueryParams = {
      includeAttributes: true,
      searchRequest: {
        keyword: search || '',
        fieldIds: ['title'],
        postData: true
      },
      category: ''
    };
    try {
      const apiContent = await handleGetContentFilter(
        BASE_SLUG.PUSAT_INFORMASI.CONTENT.BENGKEL,
        queryParams
      );
      const transformedContent = apiContent.data.categoryList[tab] ?? [];
      const transformedData = await Promise.all(
        transformedContent?.map(async (item: any) => {
          const apiDetailContent = await handleGetContentDetail(item.id);
          const { content } = contentDetailTransformer(apiDetailContent);

          const title = item.title;
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
    setPagination({
      currentPage: 1,
      itemsPerPage: 5
    });
    setContentData([]);
    fetchContent();
  }, [search]);

  const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
  const endIndex = startIndex + pagination.itemsPerPage;
  const paginatedData = contentData
    ? contentData?.slice(startIndex, endIndex)
    : [];

  return (
    <div className="flex flex-col px-[2rem] lg:px-[8.5rem] pb-[6.25rem]">
      <section className="w-full flex flex-col items-center text-center py-[80px]">
        <h1
          className="font-karla font-bold text-[2.25rem] lg:text-[3.5rem] leading-[120%] -tracking-[0.04em]"
          dangerouslySetInnerHTML={{
            __html: contentStringTransformer(pageData['nama-section']) ?? ''
          }}
        />
      </section>

      {tab === 'Bengkel' && (
        <div className="pb-[24px] lg:pb-[48px]">
          <SearchBox
            onSearch={(key) => setSearch(key)}
            placeHolder="Cari Formulir"
          />
        </div>
      )}
      <div className="flex xs:flex-col lg:flex-row gap-10">
        <div className="xs:w-[100%] lg:w-[23%] h-full bg-purple_light_bg rounded-xl">
          <ButtonMenuVertical item={btnVerticalData} />
        </div>
        <div className="xs:w-[100%] lg:w-[77%] xs:mt-12 lg:mt-0">
          {tab === 'Bengkel' ? (
            <Bengkel
              contentData={contentData}
              data={paginatedData}
              handlePageChange={handlePageChange}
              totalPages={totalPages}
              currentPage={pagination?.currentPage}
              startIndex={startIndex}
              endIndex={endIndex}
            />
          ) : (
            <Bank />
          )}
        </div>
      </div>
    </div>
  );
};

export default Rekanan;
