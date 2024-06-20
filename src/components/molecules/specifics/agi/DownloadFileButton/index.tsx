import React from 'react';
import { handleDownload } from '@/utils/helpers';

interface IDownloadFileButton {
  title: string;
  fileType: string;
  bgColor?: string;
  filePath?: string;
}

const DownloadFileButton: React.FC<IDownloadFileButton> = ({
  title,
  fileType,
  bgColor,
  filePath
}) => {
  const handleClickUnduh = () => {
    filePath && handleDownload(filePath);
  };

  return (
    <div
      className={`flex xs:flex-col md:flex-row items-center gap-4 justify-between border border-gray_light rounded-xl p-6 ${bgColor ?? 'bg-white'}`}
    >
      <div className="flex flex-row gap-4 items-center">
        <h1 className="font-bold 2xl:text-2xl">{title}</h1>
        <p className="bg-purple_superlight text-purple_dark text-xs 2xl:text-sm p-1 font-semibold uppercase">
          {fileType}
        </p>
      </div>
      <div className="xs:w-full md:w-auto py-2">
        <button
          className={`xs:w-full ms:w-[8.5rem] h-auto px-[2.594rem] py-[0.5rem] rounded-lg border border-purple_dark text-purple_dark font-opensans font-semibold hover:bg-purple_dark hover:text-white`}
          onClick={handleClickUnduh}
        >
          Unduh
        </button>
      </div>
    </div>
  );
};

export default DownloadFileButton;
