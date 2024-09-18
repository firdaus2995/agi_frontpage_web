import { ContentCategoryResponse } from '@/types/content.type';
import { BASE_SLUG } from '@/utils/baseSlug';
import { filterAttributes } from '@/utils/helpers';
import { QueryParams, httpService } from '@/utils/httpService';

export const getBeritaAcara = async (query: QueryParams) => {
  return await httpService<ContentCategoryResponse>(
    'content/category',
    BASE_SLUG.BERITA.CONTENT.BERITA_ACARA,
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

export const getBeritaAcaraNew = async (query: QueryParams) => {
  return await httpService<ContentCategoryResponse>(
    'content/filter',
    BASE_SLUG.BERITA.CONTENT.BERITA_ACARA,
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

export const getPenghargaan = async (query: QueryParams) => {
  return await httpService<ContentCategoryResponse>(
    'content/category',
    BASE_SLUG.BERITA.CONTENT.PENGHARGAAN,
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

export const getPenghargaanNew = async (query: QueryParams) => {
  return await httpService<ContentCategoryResponse>(
    'content/filter',
    BASE_SLUG.BERITA.CONTENT.PENGHARGAAN,
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

export const getCSR = async (query: QueryParams) => {
  return await httpService<ContentCategoryResponse>(
    'content/category',
    BASE_SLUG.BERITA.CONTENT.CSR,
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

export const getCSRNew = async (query: QueryParams) => {
  return await httpService<ContentCategoryResponse>(
    'content/filter',
    BASE_SLUG.BERITA.CONTENT.CSR,
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

export const subscribeApi = async (query: QueryParams) => {
  return await httpService('default', 'subscribe', {
    method: 'POST',
    next: {
      revalidate: process.env.NEXT_PUBLIC_REVALIDATE_CACHE
        ? parseInt(process.env.NEXT_PUBLIC_REVALIDATE_CACHE)
        : 60
    },
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(query)
  });
};
