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
    <div className="flex flex-col md:flex-row gap-4 sm:flex-row justify-between mb-10 md:mb-0">
      <div>
        <p className="text-[1.25rem]">
          Menampilkan{' '}
          <span className="font-bold text-purple_dark">
            {data?.length === 0 ? 0 : startIndex + 1}-
            {Math.min(endIndex, data ? data.length : 0)}
          </span>{' '}
          dari <span className="font-bold">{data ? data.length : 0}</span> hasil
        </p>
      </div>
      <div className="flex flex-row gap-[12px] items-center">
        <span
          className="mt-[3px] rotate-180"
          role="button"
          onClick={() =>
            handlePageChange(
              pagination.currentPage > 1 ? pagination.currentPage - 1 : 1
            )
          }
        >
          <Icon name="chevronRight" color="purple_dark" />
        </span>
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
          onClick={() =>
            handlePageChange(
              pagination.currentPage === totalPages
                ? pagination.currentPage
                : pagination.currentPage + 1
            )
          }
        >
          <Icon name="chevronRight" color="purple_dark" />
        </span>
      </div>
    </div>
  );
};

export default Paginate;
