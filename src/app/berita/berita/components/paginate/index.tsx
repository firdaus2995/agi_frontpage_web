import { FC, Dispatch, SetStateAction } from 'react';
import Icon from '@/components/atoms/Icon';

interface IPagination {
  currentPage: number;
  itemsPerPage: number;
}

interface IPaginate {
  data: any;
  startIndex: number;
  endIndex: number;
  totalPages: number;
  pagination: IPagination;
  setPagination: Dispatch<SetStateAction<IPagination>>;
}

const Paginate: FC<IPaginate> = ({
  data,
  startIndex,
  endIndex,
  totalPages,
  pagination,
  setPagination
}) => {
  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, currentPage: page });
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row justify-between">
      <div>
        <p className="text-[1.25rem]">
          Menampilkan{' '}
          <span className="font-bold text-purple_dark">
            {data ? startIndex + 1 : 0}-
            {Math.min(endIndex, data ? data.length : 0)}
          </span>{' '}
          dari <span className="font-bold">{data ? data.length : 0}</span> hasil
        </p>
      </div>
      <div className="flex flex-row gap-[8px] items-center">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <div
            key={page}
            role="button"
            onClick={() => handlePageChange(page)}
            className={`w-6 h-6 flex items-center justify-center cursor-pointer ${
              pagination.currentPage === page
                ? 'text-purple_dark font-bold'
                : ''
            }`}
          >
            {page}
          </div>
        ))}
        <span
          className="mt-[3px]"
          role="button"
          onClick={() => handlePageChange(totalPages)}
        >
          <Icon name="chevronRight" color="purple_dark" />
        </span>
      </div>
    </div>
  );
};

export default Paginate;
