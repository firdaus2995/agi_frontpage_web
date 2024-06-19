import { UploadDocumentResponse } from '@/types/upload-document.type';
import { httpService } from '@/utils/httpService';

export const handleUploadDocument = async (formData: FormData) => {
  return await httpService<UploadDocumentResponse>('cms', 'front-page/upload', {
    method: 'POST',
    body: formData
  });
};
