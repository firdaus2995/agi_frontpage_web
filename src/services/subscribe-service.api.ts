import { SubscribeResponse } from '@/types/subscribe.type';
import { QueryParams, httpService } from '@/utils/httpService';

export const handleSubscribe = async (query: QueryParams) => {
  return await httpService<SubscribeResponse>('default', 'subscribe', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(query)
  });
};
