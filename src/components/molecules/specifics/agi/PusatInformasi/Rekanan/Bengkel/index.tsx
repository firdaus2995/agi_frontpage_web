import React from 'react';
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
  return (
    <div className="flex flex-col gap-3">
      {PDFData.map((item, index) => (
        <DownloadFileButton
          title={item.title}
          fileType={item.fileType}
          key={index}
        />
      ))}
    </div>
  );
};

export default Bengkel;
