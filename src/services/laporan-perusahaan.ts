import { ContentCategoryResponse } from '@/types/content.type';
import { BASE_SLUG } from '@/utils/baseSlug';
import { filterAttributes } from '@/utils/helpers';
import { QueryParams, httpService } from '@/utils/httpService';

export const getListLaporanPerusahaan = async (query: QueryParams) => {
  return await httpService<ContentCategoryResponse>(
    'content/category',
    BASE_SLUG.TENTANG_AVRIST_LIFE.CONTENT.LAPORAN_PERUSAHAAN,
    {
      method: 'GET',
      next: {
        revalidate: process.env.NEXT_PUBLIC_REVALIDATE_CACHE
          ? parseInt(process.env.NEXT_PUBLIC_REVALIDATE_CACHE)
          : 60
      },
      queryParams: filterAttributes(query)
    }
  );
};

export const getListLaporanPerusahaanNew = async (query: QueryParams) => {
  return await httpService<ContentCategoryResponse>(
    'content/filter',
    BASE_SLUG.TENTANG_AVRIST_LIFE.CONTENT.LAPORAN_PERUSAHAAN,
    {
      method: 'POST',
      body: JSON.stringify(query),
      headers: {
        'Content-Type': 'application/json'
      },
      next: {
        revalidate: process.env.NEXT_PUBLIC_REVALIDATE_CACHE
          ? parseInt(process.env.NEXT_PUBLIC_REVALIDATE_CACHE)
          : 60
      }
    },
    'body'
  );
};