'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CustomForm from '../../CustomForm/Index';
import { SuccessModal } from '../../Modal';
import { ReportForm } from '../../PenangananPengaduan/MainContentComponent';
import { handleSendEmail } from '@/services/form.api';

type Props = {
  Id?: string;
};

export const RequirementForm = (props: Props) => {
  const router = useRouter();
  const { Id } = props;
  const [dataForm, setDataForm] = useState<any>();
  const [formId, setFormId] = useState<any>();
  const [formPic, setFormPic] = useState<any>();
  const [formValue, setFormValue] = useState([{ name: '', value: '' }]);
  const [formIsValid, setFormIsValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [attachmentFile, setAttachmentFile] = useState('');
  const [maxSizeValidation, setMaxSizeValidation] = useState<boolean>(false);
  const [attachmentFileSize, setAttachmentFileSize] = useState(0);
  useEffect(() => {
    if (Id) {
      const fetchDataForm = async () => {
        try {
          const contentResponse = await fetch(`/api/form?id=${Id}`);
          const dataFormJson = await contentResponse.json();

          setFormId(dataFormJson.data.id);
          setFormPic(dataFormJson.data.pic);
          setDataForm(dataFormJson.data.attributeList);
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

  const onSubmitData = async () => {
    let queryParams = {};
    if (attachmentFile === '') {
      queryParams = {
        id: formId,
        pic: formPic,
        placeholderValue: formValue
      };
    } else {
      queryParams = {
        id: formId,
        pic: formPic,
        placeholderValue: formValue,
        attachment: true,
        attachment_path: attachmentFile
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
        router.refresh();
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

  return (
    <div className="bg-purple_superlight">
      <div className="bg-white mx-auto border rounded-xl border-gray_light overflow-hidden">
        <div className="p-[2.25rem]">
          <p className="font-karla font-bold text-tanya-avgen-detail-title-mobile lg:text-tanya-avgen-detail-title-desktop">
            Diskusikan kebutuhan Anda disini!
          </p>
          <p className="mt-[1.5rem] md:mt-[2.25rem] font-opensans text-[0.875rem] md:text-[1rem] mb-[1rem]">
            isi data berikut dan Kami akan menghubungi Anda.
          </p>
          {dataForm && (
            <CustomForm
              dataForm={dataForm}
              customFormClassname="border-none p-[0rem]"
              title=" "
              type="Hubungi Kami"
              resultData={receiveData}
            />
          )}
          <ReportForm
            maxSizeValidation={maxSizeValidation}
            setMaxSizeValidation={(bool) => setMaxSizeValidation(bool)}
            onChangeData={handleChangeAttachment}
          />
          <div className="flex flex-row mt-[1.5rem] md:mt-[2.25rem]">
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
              saya/kami kepada Avrist Life Insurance untuk mengumpulkan,
              menggunakan dan mengungkapkan data pribadi saya/kami sesuai dengan{' '}
              <span className="font-bold text-purple_dark">
                Deklarasi Privasi *
              </span>
            </span>
          </div>
          {/* submit */}
          <div className="mt-[1.5rem] md:mt-[2.25rem] flex flex-col md:flex-row md:justify-end md:items-center">
            {/* <img src={CaptchaPicture} alt="captha" className="md:w-auto" /> */}
            {/* <Image alt="captcha" src={CaptchaPicture} className="md:w-auto" /> */}
            <button
              type="submit"
              disabled={formIsValid ? (isChecked ? false : true) : true}
              onClick={() => onSubmitData()}
              className={`${formIsValid ? (isChecked ? 'bg-purple_dark' : 'bg-dark-grey') : 'bg-dark-grey'} text-white h-[2.75rem] md:h-[4rem] w-full md:w-[8.25rem] rounded-lg mt-[0.75rem] md:mt-0`}
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
            router.refresh();
          }}
        />
      </div>
    </div>
  );
};
