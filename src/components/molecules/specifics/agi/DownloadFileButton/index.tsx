import React from 'react';
import Button from '@/components/atoms/Button/Button';

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
    filePath && window.open(filePath, '_blank');
  };

  return (
    <div
      className={`flex xs:flex-col md:flex-row items-center gap-4 justify-between border border-gray_light rounded-xl p-6 ${bgColor ?? 'bg-white'} relative`}
    >
      <div className="w-full flex flex-row xm:gap-4 xs:gap-0 xs:items-start xm:items-center justify-between ">
        <p className="w-auto font-bold lg:text-[24px] font-opensanspro">{title}</p>
        <p className="bg-purple_superlight text-purple_dark text-[12px] 2xl:text-sm p-1 font-semibold uppercase xm:relative xs:absolute right-2">
          {fileType}
        </p>
      </div>
      <div className="xs:w-full md:w-auto">
        <Button
          title="Unduh"
          customButtonClass="bg-purple_dark rounded-lg px-6 py-1"
          customTextClass="text-white text-[16px] font-semibold leading-[23.68px] font-opensans"
          onClick={handleClickUnduh}
        />
      </div>
    </div>
  );
};

export default DownloadFileButton;
