'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import CLOCK from '@/assets/images/agi/hubungi-kami/clock.svg';
import CUSTOMER_SERVICE from '@/assets/images/common/customer-service.svg';
import EMAIL from '@/assets/images/common/email.svg';
import Icon from '@/components/atoms/Icon';
import { handleUploadDocument } from '@/services/upload-document-service.api';

type UploadBoxProps = {
  title: string;
  fileType: string;
  onChangeData: (value: string, uploadedFile: any, title: string) => void;
  value?: any;
  onDeleteData: () => void;
  setMaxSizeValidation: (value: boolean) => void;
};

const UploadBox = (props: UploadBoxProps) => {
  const {
    title,
    fileType,
    onChangeData,
    value,
    onDeleteData,
    setMaxSizeValidation
  } = props;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const files = Array.from(event.target.files);
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
      }
      formData.append('fileType', fileType);
      formData.append('fileName', files[0].name);

      try {
        const size10Mb = 10 * 1024 * 1024;
        if (files[0].size > size10Mb) {
          setMaxSizeValidation(true);
        } else {
          setMaxSizeValidation(false);
        }
        const response = await handleUploadDocument(formData);
        const uploadedFile: any = event.target?.files[0];

        onChangeData(response.data, uploadedFile, title);
      } catch (error) {
        console.error('Error uploading files:', error);
      }
    }
  };

  return (
    <div>
      {!value ? (
        <div
          className="border border-light-grey rounded-[14px] flex flex-col items-center justify-center h-[120px] py-[10px] px-[1rem] gap-[8px] cursor-pointer"
          onClick={handleUploadClick}
        >
          <Icon name="UploadIcon" height={24} width={24} color="purple_dark" />
          <p className="font-opensans font-normal text-[16px] text-center">
            {title}
          </p>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
            multiple
          />
        </div>
      ) : (
        <div
          className="border cursor-pointer border-light-grey rounded-[14px] flex flex-col items-center justify-center h-[120px] py-[10px] px-[1rem] gap-[8px]"
          onClick={() => onDeleteData()}
        >
          <Icon name="close" height={24} width={24} color="purple_dark" />
          <p className="font-opensans font-normal text-[14px] text-center">
            {value?.name}
          </p>
          <p className="font-opensans font-normal text-[14px] text-center">
            {Math.round(value?.size / 1024)} Kb
          </p>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
            multiple
          />
        </div>
      )}
    </div>
  );
};

type ReportFormProps = {
  onChangeData: (value: string, uploadedFile: any, type: string) => void;
  maxSizeValidation?: boolean;
  setMaxSizeValidation: (value: boolean) => void;
};

export const ReportForm = (props: ReportFormProps) => {
  const { onChangeData, maxSizeValidation, setMaxSizeValidation } = props;
  const [attachmentFile, setAttachmentFile] = useState('');
  const [selectedFile, setSelectedFile] = useState({});
  const [fileKtp, setFileKtp] = useState<any>('');
  const [fileFormulir, setFileFormulir] = useState<any>('');
  const [fileDocument, setFileDocument] = useState<any>('');

  const handleChangeData = (
    value: string,
    uploadedFile: any,
    title: string
  ) => {
    setSelectedFile(uploadedFile);
    if (title === 'Upload KTP') {
      setFileKtp({ file: uploadedFile, value });
    } else if (title === 'Upload Formulir') {
      setFileFormulir({ file: uploadedFile, value });
    } else {
      setFileDocument({ file: uploadedFile, value });
    }
    if (attachmentFile === '') {
      setAttachmentFile(value);
    } else {
      setAttachmentFile(attachmentFile + '|' + value);
    }
  };

  useEffect(() => {
    if (attachmentFile) {
      onChangeData(attachmentFile, selectedFile, 'add');
    }
  }, [attachmentFile]);

  return (
    <div>
      <form className="mt-[2.25rem]">
        <div className="grid sm:grid-cols-2 xs:grid-cols-1 gap-8 mt-[2.25rem]">
          {/* upload */}
          <div>
            <div className="">
              <p className="font-opensans font-bold text-[1rem]">
                Upload Dokumen
              </p>
              {maxSizeValidation && (
                <p className="text-xs text-error">
                  Maksimal total ukuran file yang dapat diunggah adalah 10MB
                </p>
              )}
            </div>
            <div className="grid sm:grid-cols-3 xs:grid-cols-1 gap-2 mt-[0.5rem]">
              <UploadBox
                title="Upload KTP"
                fileType="DOCUMENT"
                onChangeData={handleChangeData}
                value={fileKtp?.file}
                onDeleteData={() => {
                  onChangeData(fileKtp?.value, fileKtp?.file, 'delete');
                  setFileKtp('');
                }}
                setMaxSizeValidation={(bool) => setMaxSizeValidation(bool)}
              />
              <UploadBox
                title="Upload Formulir"
                fileType="DOCUMENT"
                onChangeData={handleChangeData}
                value={fileFormulir?.file}
                onDeleteData={() => {
                  onChangeData(
                    fileFormulir?.value,
                    fileFormulir?.file,
                    'delete'
                  );
                  setFileFormulir('');
                }}
                setMaxSizeValidation={(bool) => setMaxSizeValidation(bool)}
              />
              <UploadBox
                title="Dokumen Pendukung"
                fileType="DOCUMENT"
                onChangeData={handleChangeData}
                value={fileDocument?.file}
                onDeleteData={() => {
                  onChangeData(
                    fileDocument?.value,
                    fileDocument?.file,
                    'delete'
                  );
                  setFileDocument('');
                }}
                setMaxSizeValidation={(bool) => setMaxSizeValidation(bool)}
              />
            </div>
          </div>
          {/* contact support */}
          <div className="border border-gray_light rounded-xl flex flex-col justify-between overflow-hidden gap-[12px] pb-[1.5rem] px-[1.5rem] pt-[1.5rem] border-b-8 border-b-purple_dark">
            <div className="flex sm:flex-row xs:flex-col xs:items-start sm:items-center justify-between sm:gap-[24px] xs:gap-[0px]">
              <div className="flex flex-row gap-[24px]">
                <Image
                  width={24}
                  height={24}
                  alt="symbol"
                  src={CUSTOMER_SERVICE}
                />
                <span className="font-opensans font-bold text-[1rem]">
                  Layanan Nasabah
                </span>
              </div>
              <span className="sm:w-1/2 xs:w-full text-purple_dark font-normal text-[1rem] leading-[23.68px] xs:ml-[48px] sm:ml-0">
                021 5789 8188
              </span>
            </div>
            {/*  */}
            <div className="flex sm:flex-row xs:flex-col xs:items-start sm:items-center justify-between sm:gap-[24px] xs:gap-[0px]">
              <div className="flex flex-row gap-[24px]">
                <Image width={24} height={24} alt="symbol" src={EMAIL} />
                <span className="font-opensans font-bold text-[1rem]">
                  Email
                </span>
              </div>
              <span className="w-1/2 text-purple_dark font-normal text-[1rem] xs:ml-[48px] sm:ml-0">
                customer@avrist.com
              </span>
            </div>
            {/*  */}
            <div className="flex sm:flex-row xs:flex-col xs:items-start sm:items-center justify-between sm:gap-[24px] xs:gap-[0px]">
              <div className="flex flex-row gap-[24px]">
                <Image width={24} height={24} alt="symbol" src={CLOCK} />
                <span className="font-opensans font-bold text-[1rem]">
                  Waktu Operasional
                </span>
              </div>
              <span className="sm:w-1/2 xs:w-3/4 text-purple_dark font-normal text-[1rem] xs:ml-[48px] sm:ml-0">
                Senin - Jumat, 08.00 - 17.00 WIB
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
