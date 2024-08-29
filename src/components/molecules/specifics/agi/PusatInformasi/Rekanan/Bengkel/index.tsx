import React, { useState } from 'react';
import Icon from '@/components/atoms/Icon';
import NotFound from '@/components/atoms/NotFound';
import DownloadFileButton from '@/components/molecules/specifics/agi/DownloadFileButton';

type BengkelProps = {
  data: Array<any>;
  handlePageChange: (page: number) => void;
  totalPages: any;
};

const Bengkel: React.FC<BengkelProps> = ({
  data,
  handlePageChange,
  totalPages
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return (
    <div className="flex flex-col gap-6 mt-5">
      {data?.length > 0 ? (
        data?.map((item, index) => (
          <DownloadFileButton
            title={item.title}
            fileType={item.fileType}
            key={index}
            filePath={item.file}
          />
        ))
      ) : (
        <NotFound />
      )}
      <div className="flex flex-col gap-4 sm:flex-row justify-between">
        <div>
          <p className="text-[20px]">
            Menampilkan{' '}
            <span className="font-bold text-purple_dark">
              {data?.length === 0 ? 0 : startIndex + 1}-
              {Math.min(endIndex, data ? data.length : 0)}
            </span>{' '}
            dari <span className="font-bold">{data?.length}</span> hasil
          </p>
        </div>
        <div className="flex flex-row gap-[12px] items-center">
          <span
            className="mt-[3px] rotate-180"
            role="button"
            onClick={() => {
              if (currentPage > 1) {
                handlePageChange(currentPage - 1);
              } else {
                handlePageChange(1);
              }
            }}
          >
            <Icon name="chevronRight" color="purple_dark" />
          </span>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <div
              key={page}
              role="button"
              onClick={() => {
                setCurrentPage(page);
                handlePageChange(page);
              }}
              className={`w-6 h-6 flex items-center justify-center cursor-pointer ${
                currentPage === page ? 'text-purple_dark font-bold' : ''
              }`}
            >
              {page}
            </div>
          ))}
          <span
            className="mt-[3px]"
            role="button"
            onClick={() => {
              if (currentPage === data?.length) {
                handlePageChange(currentPage);
              } else {
                handlePageChange(currentPage + 1);
              }
            }}
          >
            <Icon name="chevronRight" color="purple_dark" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Bengkel;
