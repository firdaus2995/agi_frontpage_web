'use client';
import React, { useEffect, useState } from 'react';
import CustomForm from '../../CustomForm/Index';
import { SuccessModal } from '../../Modal';
import { ReportForm } from '../../PenangananPengaduan/MainContentComponent';
import { handleSendEmail } from '@/services/form.api';

type Props = {
  Id?: string;
};

export const RequirementForm = (props: Props) => {
  const { Id } = props;
  const [dataForm, setDataForm] = useState<any>();
  const [dataUpload, setDataUpload] = useState<any>();
  const [formId, setFormId] = useState<any>();
  const [formPic, setFormPic] = useState<any>();
  const [formValue, setFormValue] = useState([{ name: '', value: '' }]);
  const [formIsValid, setFormIsValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [attachmentFile, setAttachmentFile] = useState('');
  const [maxSizeValidation, setMaxSizeValidation] = useState<boolean>(false);
  const [attachmentFileSize, setAttachmentFileSize] = useState(0);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [emailSubjectSubmitter, setEmailSubjectSubmitter] = useState('');
  const [emailBodySubmitter, setEmailBodySubmitter] = useState('');

  useEffect(() => {
    if (Id) {
      const fetchDataForm = async () => {
        try {
          const contentResponse = await fetch(`/api/form?id=${Id}`);
          const dataFormJson = await contentResponse.json();

          setFormId(dataFormJson.data.id);
          setFormPic(dataFormJson.data.pic);
          setDataForm(
            dataFormJson.data.attributeList.filter(
              (item: { fieldType: string }) =>
                item.fieldType !== 'DOCUMENT' &&
                item.fieldType !== 'IMAGE' &&
                item.fieldType !== 'TNC'
            )
          );

          const uploadList: any[] = [];
          dataFormJson.data.attributeList
            .filter(
              (item: { fieldType: string }) =>
                item.fieldType === 'DOCUMENT' ||
                item.fieldType === 'IMAGE' ||
                item.fieldType === 'TNC'
            )
            .map((item: { componentId: any; value: any }) => {
              uploadList.push({
                name: item.componentId,
                value: item.value
              });
            });
          setDataUpload(uploadList);
          setEmailSubject(dataFormJson.data.emailSubject);
          setEmailBody(dataFormJson.data.emailBody);
          setEmailSubjectSubmitter(dataFormJson.data.emailSubjectSubmitter);
          setEmailBodySubmitter(dataFormJson.data.emailBodySubmitter);
        } catch (error: any) {
          throw new Error('Error fetching form data: ', error.message);
        }
      };

      fetchDataForm().then();
    }
  }, [Id]);

  const receiveData = (
    data: any,
    isValid: boolean | ((prevState: boolean) => boolean)
  ) => {
    setFormIsValid(isValid);
    setFormValue(data);
  };

  useEffect(() => {
    if (dataUpload) {
      setFormIsValid(validateData(dataUpload));
    }
  }, [dataUpload]);

  const onSubmitData = async () => {
    let queryParams = {};

    const dataForm = formValue.concat(dataUpload);
    if (attachmentFile === '') {
      queryParams = {
        id: formId,
        pic: formPic,
        placeholderValue: dataForm,
        emailSubject,
        emailBody,
        emailSubjectSubmitter,
        emailBodySubmitter
      };
    } else {
      queryParams = {
        id: formId,
        pic: formPic,
        placeholderValue: dataForm,
        attachment: true,
        attachmentPath: attachmentFile,
        emailSubject,
        emailBody,
        emailSubjectSubmitter,
        emailBodySubmitter
      };
    }
    const size10Mb = 10 * 1024;
    if (attachmentFileSize > size10Mb) {
      setMaxSizeValidation(true);
    } else {
      const data = await handleSendEmail(queryParams);
      if (data.status === 'OK') {
        setShowSuccess(true);
      }

      if (data.status !== 'OK') {
        console.error('Error:', data.errors.message);
        window.location.reload();
      }
    }
  };

  const handleChangeAttachment = (value: string, files: any, type: string) => {
    setMaxSizeValidation(false);
    if (type === 'delete') {
      const newData = attachmentFile.replace(value, '');
      setAttachmentFile(newData);
      if (files) {
        const filesInKb = Math.round(files.size / 1024);
        setAttachmentFileSize(attachmentFileSize - filesInKb);
      }
    } else {
      if (value) {
        setAttachmentFile(value);
      }
      if (files) {
        const filesInKb = Math.round(files.size / 1024);
        setAttachmentFileSize(filesInKb + attachmentFileSize);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSetFormData = (value: string, title: any) => {
    const newDataUpload = dataUpload.map((item: { name: any }) => {
      if (item.name === title.toLowerCase().replace(' ', '-')) {
        return { ...item, value: value };
      }
      return item;
    });
    setDataUpload(newDataUpload);
  };

  const validateData = (data: any) => {
    for (const item of data) {
      if (item.value === null || item.value === '') {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="bg-purple_superlight">
      <div className="bg-white mx-auto border rounded-xl border-gray_light overflow-hidden">
        <div className="p-[2.25rem]">
          <p className="font-karla font-bold text-tanya-avgen-detail-title-mobile lg:text-tanya-avgen-detail-title-desktop">
            Diskusikan kebutuhan Anda disini!
          </p>
          <p className="mt-[1.5rem] lg:mt-[2.25rem] font-opensans text-[0.875rem] lg:text-[1rem] mb-[1rem]">
            isi data berikut dan Kami akan menghubungi Anda.
          </p>
          {dataForm && (
            <CustomForm
              title=" "
              customFormClassname="border-none p-[0px] rounded-[12px]"
              onChange={handleChange}
              dataForm={dataForm}
              resultData={receiveData}
              type="Hubungi Kami"
              longTextArea
            />
          )}
          <ReportForm
            onChangeData={handleChangeAttachment}
            onSetFormData={handleSetFormData}
            maxSizeValidation={maxSizeValidation}
            setMaxSizeValidation={(bool) => setMaxSizeValidation(bool)}
          />
          <div className="flex flex-row mt-[1.5rem] lg:mt-[2.25rem]">
            <div>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => {
                  setIsChecked(e.target.checked);
                }}
              />
            </div>
            <span className="ml-[0.75rem]">
              Saya /kami telah membaca, memahami dan memberikan persetujuan
              saya/kami kepada Avrist General Insurance untuk mengumpulkan,
              menggunakan dan mengungkapkan data pribadi saya/kami sesuai dengan{' '}
              <span className="font-bold text-purple_dark">
                Deklarasi Privasi *
              </span>
            </span>
          </div>
          {/* submit */}
          <div className="mt-[2.25rem] flex lg:flex-row xs:flex-col justify-end items-center">
            <button
              type="submit"
              disabled={formIsValid ? (isChecked ? false : true) : true}
              onClick={() => onSubmitData()}
              className={`${formIsValid ? (isChecked ? 'bg-purple_dark hover:bg-purple_light' : 'bg-dark-grey') : 'bg-dark-grey'} text-white lg:h-[64px] w-full lg:w-[132px] rounded-lg mt-[12px] lg:mt-0 py-[12px] px-[40px] font-opensans text-[20px] font-semibold lg:leading-[28px]`}
            >
              Kirim
            </button>
          </div>
        </div>
        <div className="h-[0.5rem] bg-purple_dark" />
      </div>
      <div className="absolute">
        <SuccessModal
          show={showSuccess}
          onClose={() => {
            setShowSuccess(false);
            window.location.reload();
          }}
        />
      </div>
    </div>
  );
};
