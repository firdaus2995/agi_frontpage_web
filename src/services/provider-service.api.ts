import { ProviderResponse } from '@/types/provider.type';
import { QueryParams, httpService } from '@/utils/httpService';

export const handleGetProvider = async (query: QueryParams) => {
  return await httpService<ProviderResponse>('default', 'providers', {
    method: 'GET',
    next: {
      revalidate: process.env.NEXT_PUBLIC_REVALIDATE_CACHE
        ? parseInt(process.env.NEXT_PUBLIC_REVALIDATE_CACHE)
        : 60
    },
    queryParams: query
  });
};
