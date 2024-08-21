import { GlobalConfigList } from '@/types/global-config.type';
import { httpService } from '@/utils/httpService';

export const getListGlobalConfig = async () => {
  return await httpService<GlobalConfigList>('default', 'global-config', {
    method: 'GET',
    next: {
      revalidate: process.env.NEXT_PUBLIC_REVALIDATE_CACHE
        ? parseInt(process.env.NEXT_PUBLIC_REVALIDATE_CACHE)
        : 60
    },
  });
};
