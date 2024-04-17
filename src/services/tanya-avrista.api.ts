import { PageResponse } from '@/types/page.type';
import { httpService } from '@/utils/httpService';

export const getTanyaAvrista = async (slug: string) => {
  return await httpService<PageResponse>('page', slug, { method: 'GET' });
};
