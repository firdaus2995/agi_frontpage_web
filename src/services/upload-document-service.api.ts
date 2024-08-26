import { UploadDocumentResponse } from '@/types/upload-document.type';
import { httpService } from '@/utils/httpService';

export const handleUploadDocument = async (formData: FormData) => {
  return await httpService<UploadDocumentResponse>('cms', 'front-page/upload', {
    method: 'POST',
    next: {
      revalidate: process.env.NEXT_PUBLIC_REVALIDATE_CACHE
        ? parseInt(process.env.NEXT_PUBLIC_REVALIDATE_CACHE)
        : 60
    },
    body: formData
  });
};
