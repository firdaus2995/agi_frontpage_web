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
            accept="application/pdf"
          />
        </div>
      ) : (
        <div
          className="border cursor-pointer border-light-grey rounded-[14px] flex flex-col items-center justify-center h-[120px] py-[10px] px-[1rem] gap-[8px]"
          onClick={() => onDeleteData()}
        >
          <Icon name="close" height={24} width={24} color="purple_dark" />
          <p className="font-opensans font-normal text-[14px] text-center line-clamp-2 break-all">
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
            accept="application/pdf"
          />
        </div>
      )}
    </div>
  );
};

type ReportFormProps = {
  onChangeData: (value: string, uploadedFile: any, type: string) => void;
  onSetFormData: (value: string, title: any) => void;
  maxSizeValidation?: boolean;
  setMaxSizeValidation: (value: boolean) => void;
};

export const ReportForm = (props: ReportFormProps) => {
  const {
    onChangeData,
    maxSizeValidation,
    setMaxSizeValidation,
    onSetFormData
  } = props;
  const [attachmentFiles, setAttachmentFiles] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState({});
  const [fileKtp, setFileKtp] = useState<any>('');
  const [fileFormulir, setFileFormulir] = useState<any>('');
  const [fileDocument, setFileDocument] = useState<any>('');
  const [status, setStatus] = useState<any>('');

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

    setAttachmentFiles((prevFiles) => {
      const newFiles = prevFiles.filter((file) => file !== value);
      return [...newFiles, value];
    });
    setStatus('add');

    onSetFormData(uploadedFile.name, title);
  };

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleDeleteData = (value: string, file: any, fileStateSetter: Function) => {
    setAttachmentFiles((prevFiles) => prevFiles.filter((file) => file !== value));
    fileStateSetter('');
    onChangeData(value, file, 'delete');
    setStatus('delete');
  };

  useEffect(() => {
    if (attachmentFiles.length > 0 && status === 'add') {
      const combinedFiles = attachmentFiles.join('|');
      onChangeData(combinedFiles, selectedFile, 'add');
    }
  }, [attachmentFiles, status]);

  return (
    <div>
      <form className="mt-[2.25rem]">
        <div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-8 mt-[2.25rem]">
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
            <div className="grid lg:grid-cols-3 xs:grid-cols-1 gap-2 mt-[0.5rem]">
              <UploadBox
                title="Upload KTP"
                fileType="DOCUMENT"
                onChangeData={handleChangeData}
                value={fileKtp?.file}
                onDeleteData={() => handleDeleteData(fileKtp?.value, fileKtp?.file, setFileKtp)}
                setMaxSizeValidation={(bool) => setMaxSizeValidation(bool)}
              />
              <UploadBox
                title="Upload Formulir"
                fileType="DOCUMENT"
                onChangeData={handleChangeData}
                value={fileFormulir?.file}
                onDeleteData={() => handleDeleteData(fileFormulir?.value, fileFormulir?.file, setFileFormulir)}
                setMaxSizeValidation={(bool) => setMaxSizeValidation(bool)}
              />
              <UploadBox
                title="Dokumen Pendukung"
                fileType="DOCUMENT"
                onChangeData={handleChangeData}
                value={fileDocument?.file}
                onDeleteData={() => handleDeleteData(fileDocument?.value, fileDocument?.file, setFileDocument)}
                setMaxSizeValidation={(bool) => setMaxSizeValidation(bool)}
              />
            </div>
          </div>
          {/* contact support */}
          <div className="border border-gray_light rounded-xl flex flex-col justify-between overflow-hidden gap-[12px] p-[1rem] lg:p-[1.5rem] border-b-8 border-b-purple_dark">
            <div className="flex lg:flex-row xs:flex-col xs:items-start lg:items-center justify-between lg:gap-[24px] xs:gap-[0px]">
              <div className="flex flex-row gap-[12px] lg:gap-[24px]">
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
              <span className="lg:w-1/2 xs:w-full text-purple_dark font-normal text-[1rem] leading-[23.68px] xs:ml-[36px] lg:ml-0">
                021 5740 0381
              </span>
            </div>
            {/*  */}
            <div className="flex lg:flex-row xs:flex-col xs:items-start lg:items-center justify-between lg:gap-[24px] xs:gap-[0px]">
              <div className="flex flex-row gap-[12px] lg:gap-[24px]">
                <Image width={24} height={24} alt="symbol" src={EMAIL} />
                <span className="font-opensans font-bold text-[1rem]">
                  Email
                </span>
              </div>
              <span className="w-1/2 text-purple_dark font-normal text-[1rem] xs:ml-[36px] lg:ml-0 break-all">
                avrist.general@avrist.com
              </span>
            </div>
            {/*  */}
            <div className="flex lg:flex-row xs:flex-col xs:items-start lg:items-center justify-between lg:gap-[24px] xs:gap-[0px]">
              <div className="flex flex-row gap-[12px] lg:gap-[24px]">
                <Image width={24} height={24} alt="symbol" src={CLOCK} />
                <span className="font-opensans font-bold text-[1rem]">
                  Waktu Operasional
                </span>
              </div>
              <span className="lg:w-1/2 xs:w-full text-purple_dark font-normal text-[1rem] xs:ml-[36px] lg:ml-0">
                Senin - Jumat, 08.00 - 17.00 WIB
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
