import { ContentCategoryResponse } from '@/types/content.type';
import { BASE_SLUG } from '@/utils/baseSlug';
import { filterAttributes } from '@/utils/helpers';
import { QueryParams, httpService } from '@/utils/httpService';

export const getBeritaAcara = async (query: QueryParams) => {
  return await httpService<ContentCategoryResponse>(
    'content/category',
    BASE_SLUG.BERITA.CONTENT.BERITA_ACARA,
    {
      method: 'GET',
      queryParams: filterAttributes(query)
    }
  );
};

export const getPenghargaan = async (query: QueryParams) => {
  return await httpService<ContentCategoryResponse>(
    'content/category',
    BASE_SLUG.BERITA.CONTENT.PENGHARGAAN,
    {
      method: 'GET',
      queryParams: filterAttributes(query)
    }
  );
};
// export const getAvriStory = async (query: QueryParams) => {
//   return await httpService<ContentCategoryResponse>(
//     'content/category',
//     BASE_SLUG.BERITA.CONTENT.AVRISTORY,
//     {
//       method: 'GET',
//       queryParams: filterAttributes(query)
//     }
//   );
// };

// export const getAvristLifeGuide = async (query: QueryParams) => {
//   return await httpService<ContentCategoryResponse>(
//     'content/category',
//     BASE_SLUG.BERITA.CONTENT.AVRIST_LIFE_GUIDE,
//     {
//       method: 'GET',
//       queryParams: filterAttributes(query)
//     }
//   );
// };

// export const getBeritaPers = async (query: QueryParams) => {
//   return await httpService<ContentCategoryResponse>(
//     'content/category',
//     BASE_SLUG.BERITA.CONTENT.KUMPULAN_BERITA_PERS_NEW,
//     {
//       method: 'GET',
//       queryParams: filterAttributes(query)
//     }
//   );
// };

// export const getTestimoni = async (query: QueryParams) => {
//   return await httpService<ContentCategoryResponse>(
//     'content/category',
//     BASE_SLUG.BERITA.CONTENT.TESTIMONI,
//     {
//       method: 'GET',
//       queryParams: filterAttributes(query)
//     }
//   );
// };

// export const getPenawaran = async (query: QueryParams) => {
//   return await httpService<ContentCategoryResponse>(
//     'content/category',
//     BASE_SLUG.BERITA.CONTENT.PENAWARAN,
//     {
//       method: 'GET',
//       queryParams: filterAttributes(query)
//     }
//   );
// };

export const subscribeApi = async (query: QueryParams) => {
  return await httpService('default', 'subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(query)
  });
};
