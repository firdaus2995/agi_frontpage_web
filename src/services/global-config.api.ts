import { GlobalConfigList } from '@/types/global-config.type';
import { httpService } from '@/utils/httpService';

export const getListGlobalConfig = async () => {
  return await httpService<GlobalConfigList>('default', 'global-config', {
    method: 'GET'
  });
};
