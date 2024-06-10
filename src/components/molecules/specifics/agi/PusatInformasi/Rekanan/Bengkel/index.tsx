import React, { useState } from 'react';
import Icon from '@/components/atoms/Icon';
import DownloadFileButton from '@/components/molecules/specifics/agi/DownloadFileButton';

const PDFData = [
  {
    title: 'Daftar Bengkel Rekanan Jabodetabek_2',
    fileType: 'PDF'
  },
  {
    title: 'Daftar Bengkel Rekanan Jabodetabek_1',
    fileType: 'PDF'
  },
  {
    title: 'Daftar Bengkel Rekanan Derek_2',
    fileType: 'PDF'
  },
  {
    title: 'Daftar Bengkel Rekanan Specialist Truck',
    fileType: 'PDF'
  },
  {
    title: 'Daftar Bengkel Rekanan Specialist Truck',
    fileType: 'PDF'
  }
];

const Bengkel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const totalPages = PDFData ? Math.ceil(PDFData.length / itemsPerPage) : 0;
  return (
    <div className="flex flex-col gap-3">
      {PDFData.map((item, index) => (
        <DownloadFileButton
          title={item.title}
          fileType={item.fileType}
          key={index}
        />
      ))}
      <div className="flex flex-col gap-4 sm:flex-row justify-between">
        <div>
          <p className="text-[20px]">
            Menampilkan{' '}
            <span className="font-bold text-purple_dark">
              {PDFData?.length === 0 ? 0 : startIndex + 1}-
              {Math.min(endIndex, PDFData ? PDFData.length : 0)}
            </span>{' '}
            dari <span className="font-bold">{PDFData?.length}</span> hasil
          </p>
        </div>
        <div className="flex flex-row gap-[12px] items-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <div
              key={page}
              role="button"
              onClick={() => setCurrentPage(page)}
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
            // onClick={() => handlePageChange(totalPages)}
          >
            <Icon name="chevronRight" color="purple_dark" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Bengkel;
