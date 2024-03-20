import React from 'react';

import Pagination from '../Pagination';
import FundListItem from './components/FundListItem';
import FundListTabHeader from './components/FundListTabHeader';
import SAMPLE_DATA from './dummy-data.json';
import { FundListTabItemType, FundListItemType } from './types';
import { ParamDataType } from '@/utils/globalTypes';

const ITEMS_PER_PAGE = 2;

type MutualFundListProps = {
  searchParams: Record<string, ParamDataType>;
};

const MutualFundList: React.FC<MutualFundListProps> = async ({
  searchParams
}) => {
  const currentPage = (() => {
    const result = searchParams['page'] ?? '1';
    if (Array.isArray(result)) return 1;
    return parseInt(result);
  })();
  const currentCategory = (() => {
    const result = searchParams['cat'] ?? 'Saham';
    if (Array.isArray(result)) return 'Saham';
    return result;
  })();

  const getFundListTabItem = async () => {
    // Simulating the process to get data
    return new Promise<FundListTabItemType[]>((resolve) => {
      setTimeout(() => {
        resolve(SAMPLE_DATA['tabs-list']);
      }, 1000);
    });
  };

  const getFundListItems = async (type?: string) => {
    type CurrentReturnType = {
      totalItem: number;
      data: FundListItemType[];
      hasPrev: boolean;
      hasNext: boolean;
    };

    return new Promise<CurrentReturnType>((resolve) => {
      setTimeout(() => {
        const allData = SAMPLE_DATA['fund-list'] as FundListItemType[];
        if (type) {
          const data = allData.filter((item) => item.type === type);
          resolve({
            totalItem: data.length,
            data: data.slice(
              (currentPage - 1) * ITEMS_PER_PAGE,
              currentPage * ITEMS_PER_PAGE
            ),
            hasPrev: currentPage > 1,
            hasNext: currentPage * ITEMS_PER_PAGE < data.length
          });
        } else {
          const data = allData.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            currentPage * ITEMS_PER_PAGE
          );
          resolve({
            totalItem: allData.length,
            data: data,
            hasPrev: currentPage !== 1,
            hasNext: currentPage * ITEMS_PER_PAGE < allData.length
          });
        }
      }, 1000);
    });
  };

  const tabs = await getFundListTabItem();
  const {
    data: fundListItems,
    totalItem,
    hasNext,
    hasPrev
  } = await getFundListItems(currentCategory);

  return (
    <div className="bg-white p-9 rounded-md shadow-lg flex flex-col gap-4">
      <FundListTabHeader
        items={tabs.map((item) => ({ title: item, value: item }))}
        category={currentCategory}
      />
      <div className="flex flex-col gap-4">
        {fundListItems.map((item, index) => (
          <FundListItem key={index} item={item} />
        ))}
      </div>
      <div className="mt-4 flex justify-between gap-4 flex-wrap">
        <p className="text-lg">
          Menampilkan{' '}
          <span className="font-bold">{`${currentPage * ITEMS_PER_PAGE - (ITEMS_PER_PAGE - 1)}-${ITEMS_PER_PAGE * currentPage > totalItem ? totalItem : ITEMS_PER_PAGE * currentPage}`}</span>{' '}
          dari <span className="font-bold">{totalItem}</span> hasil
        </p>
        <Pagination
          perPage={ITEMS_PER_PAGE}
          totalItem={totalItem}
          hasNext={hasNext}
          hasPrev={hasPrev}
        />
      </div>
    </div>
  );
};

export default MutualFundList;
