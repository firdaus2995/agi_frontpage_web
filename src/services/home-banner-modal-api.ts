import { ContentResponse } from '@/types/content.type';
import { PageResponse } from '@/types/page.type';
import { httpService } from '@/utils/httpService';

export const getPopUpModalHome = async (slug: string) => {
  return await httpService<ContentResponse>('content', slug, {
    method: 'GET',
    next: {
      revalidate: process.env.NEXT_PUBLIC_REVALIDATE_CACHE
        ? parseInt(process.env.NEXT_PUBLIC_REVALIDATE_CACHE)
        : 60
    }
  });
};

export const getHomeData = async (slug: string) => {
  return await httpService<PageResponse>('page', slug, {
    method: 'GET',
    next: {
      revalidate: process.env.NEXT_PUBLIC_REVALIDATE_CACHE
        ? parseInt(process.env.NEXT_PUBLIC_REVALIDATE_CACHE)
        : 60
    }
  });
};
