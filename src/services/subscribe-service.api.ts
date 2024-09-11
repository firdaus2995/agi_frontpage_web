import { SubscribeResponse } from '@/types/subscribe.type';
import { QueryParams, httpService } from '@/utils/httpService';

export const handleSubscribe = async (query: QueryParams) => {
  return await httpService<SubscribeResponse>('default', 'subscribe', {
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

export const handleVerifySubscribe = async (query: string) => {
  return await httpService<SubscribeResponse>(
    'default',
    `subscribe/verifying?code=${query}`,
    {
      method: 'GET'
    }
  );
};