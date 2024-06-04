import { ContentCategoryResponse } from '@/types/content.type';
import { PageResponse } from '@/types/page.type';
import { QueryParams, httpService } from '@/utils/httpService';

export const getTanyaAvgen = async (slug: string) => {
  return await httpService<PageResponse>('page', slug, { method: 'GET' });
};

export const getListFaq = async (slug: string, query: QueryParams) => {
  return await httpService<ContentCategoryResponse>('content/category', slug, {
    method: 'GET',
    queryParams: query
  });
};
