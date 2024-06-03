import { FormResponse, SendEmailResponse } from '@/types/form.type';
import { httpService } from '@/utils/httpService';

export const getFormBy = async (formId: string) => {
  return await httpService<FormResponse>('form', formId, {
    method: 'GET'
  });
};

export const handleSendEmail = async (query: any) => {
  return await httpService<SendEmailResponse>('default', 'send/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(query)
  });
};
