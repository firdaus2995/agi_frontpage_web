import React from 'react';
import Button from '@/components/atoms/Button/Button';

interface IDownloadFileButton {
  title: string;
  fileType: string;
  bgColor?: string;
}

const DownloadFileButton: React.FC<IDownloadFileButton> = ({
  title,
  fileType,
  bgColor
}) => {
  return (
    <div
      className={`flex xs:flex-col md:flex-row items-center gap-4 justify-between border border-gray_light rounded-xl p-6 ${bgColor ?? 'bg-white'}`}
    >
      <div className="flex flex-row flex-wrap items-center justify-between w-[65%]">
        <h1 className="font-bold text-xl 2xl:text-2xl">{title}</h1>
        <p className="bg-purple_superlight text-purple_dark text-xs 2xl:text-sm p-1 font-semibold">
          {fileType}
        </p>
      </div>
      <div className="xs:w-full md:w-auto px-5 py-2">
        <Button
          title="Unduh"
          customButtonClass="bg-white rounded-lg w-full md:w-auto"
          customTextClass="text-purple_dark"
        />
      </div>
    </div>
  );
};

export default DownloadFileButton;
