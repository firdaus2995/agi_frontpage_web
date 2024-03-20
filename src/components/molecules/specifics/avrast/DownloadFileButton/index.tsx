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
      className={`flex xs:flex-col md:flex-row items-center gap-4 justify-between border border-gray_light rounded-xl p-4 ${bgColor ?? 'bg-white'}`}
    >
      <div className="flex flex-row gap-4 items-center">
        <h1 className="font-bold text-xl 2xl:text-2xl">{title}</h1>
        <p className="bg-purple_superlight text-purple_dark text-xs 2xl:text-sm p-1 font-semibold">
          {fileType}
        </p>
      </div>
      <div className="xs:w-full md:w-auto">
        <Button
          title="Unduh"
          customButtonClass="bg-purple_dark rounded-lg"
          customTextClass="text-white"
        />
      </div>
    </div>
  );
};

export default DownloadFileButton;
