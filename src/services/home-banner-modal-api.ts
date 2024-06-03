import { ContentResponse } from '@/types/content.type';
import { PageResponse } from '@/types/page.type';
import { httpService } from '@/utils/httpService';

export const getPopUpModalHome = async (slug: string) => {
  return await httpService<ContentResponse>('content', slug, { method: 'GET' });
};

export const getHomeData = async (slug: string) => {
  return await httpService<PageResponse>('page', slug, { method: 'GET' });
};