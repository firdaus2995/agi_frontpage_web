import { ProviderResponse } from '@/types/provider.type';
import { QueryParams, httpService } from '@/utils/httpService';

export const handleGetProvider = async (query: QueryParams) => {
  return await httpService<ProviderResponse>('default', 'providers', {
    method: 'GET',
    queryParams: query
  });
};
