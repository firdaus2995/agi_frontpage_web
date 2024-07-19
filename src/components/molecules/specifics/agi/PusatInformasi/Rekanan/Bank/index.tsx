'use client';
import React, { useEffect, useState } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import Icon from '@/components/atoms/Icon';
import { handleGetContentCategory } from '@/services/content-page.api';
import { BASE_SLUG } from '@/utils/baseSlug';
import {
  contentCategoryTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

const Bank = () => {
  const [contentData, setContentData] = useState<any>();
  const ITEMS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalItem = contentData?.length;

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
        BASE_SLUG.PUSAT_INFORMASI.CONTENT.BANK,
        {
          includeAttributes: 'true'
        }
      );
      const listData: { image: { imageUrl: string; altText: any } }[] = [];
      const transformedData = contentCategoryTransformer(apiContent, 'Bank');
      transformedData[0]?.content['side-tab']?.contentData.map((item: any) => {
        const image = singleImageTransformer(
          item.details.find(
            (detail: { fieldId: string }) => detail.fieldId === 'gambar'
          )
        );
        listData.push({
          image
        });
      });

      setContentData(listData);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-10">
        {paginatedData?.map(
          (
            item: {
              image: { imageUrl: string | StaticImport; altText: string };
            },
            idx: React.Key | null | undefined
          ) => (
            <Image
              key={idx}
              src={item.image.imageUrl}
              alt={item.image.altText}
              className="rounded-xl w-[140px] h-[100px] object-contain"
              width={0}
              height={0}
            />
          )
        )}
      </div>
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
  );
};

export default Bank;
