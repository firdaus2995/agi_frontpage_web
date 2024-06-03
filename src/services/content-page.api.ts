import { notFound } from 'next/navigation';
import {
  ContentCategoryResponse,
  ContentDetailResponse,
  ContentResponse
} from '@/types/content.type';
import { PageResponse } from '@/types/page.type';
import { QueryParams, httpService } from '@/utils/httpService';

export const getContentPage = async (slug: string) => {
  return await httpService<PageResponse>('page', slug, { method: 'GET' });
};

export const getContent = async (slug: string, query: QueryParams) => {
  return await httpService<ContentResponse>('content', slug, {
    method: 'GET',
    queryParams: query
  });
};

export const getContentDetail = async (detailId: string) => {
  return await httpService<ContentDetailResponse>('content-detail', detailId, {
    method: 'GET'
  });
};

export const getContentCategory = async (slug: string, query: QueryParams) => {
  return await httpService<ContentCategoryResponse>('content/category', slug, {
    method: 'GET',
    queryParams: query
  });
};

export const handleGetContentPage = async (slug: string) => {
  try {
    const data = await getContentPage(slug);
    return data;
  } catch (error) {
    return notFound();
  }
};

export const handleGetContent = async (slug: string, query: QueryParams) => {
  try {
    const data = await getContent(slug, query);
    return data;
  } catch (error) {
    return notFound();
  }
};

export const handleGetContentDetail = async (detailId: string) => {
  try {
    const data = await getContentDetail(detailId);
    return data;
  } catch (error) {
    return notFound();
  }
};

export const handleGetContentCategory = async (
  slug: string,
  query: QueryParams
) => {
  try {
    const data = await getContentCategory(slug, query);
    return data;
  } catch (error) {
    return notFound();
  }
};
