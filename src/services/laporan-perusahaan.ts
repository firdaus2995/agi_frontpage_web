import { ContentCategoryResponse } from '@/types/content.type';
import { BASE_SLUG } from '@/utils/baseSlug';
import { filterAttributes } from '@/utils/helpers';
import { QueryParams, httpService } from '@/utils/httpService';

export const getListLaporanPerusahaan = async (query: QueryParams) => {
  return await httpService<ContentCategoryResponse>(
    'content/category',
    BASE_SLUG.TENTANG_AVRIST_LIFE.CONTENT.LAPORAN_PERUSAHAAN,
    {
      method: 'GET',
      queryParams: filterAttributes(query)
    }
  );
};
