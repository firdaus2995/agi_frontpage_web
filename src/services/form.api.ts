import { FormResponse, SendEmailResponse } from '@/types/form.type';
import { httpService } from '@/utils/httpService';

export const getFormBy = async (formId: string) => {
  return await httpService<FormResponse>('form', formId, {
    method: 'GET',
    next: {
      revalidate: process.env.NEXT_PUBLIC_REVALIDATE_CACHE
        ? parseInt(process.env.NEXT_PUBLIC_REVALIDATE_CACHE)
        : 60
    }
  });
};

export const handleSendEmail = async (query: any) => {
  return await httpService<SendEmailResponse>('default', 'send/email', {
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
