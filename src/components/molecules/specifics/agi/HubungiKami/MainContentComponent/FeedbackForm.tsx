'use client';
import React, { useEffect, useState } from 'react';
import CustomForm from '../../CustomForm/Index';
import { SuccessModal } from '../../Modal';
import { DividerPurple } from './Divider';
import { handleSendEmail } from '@/services/form.api';

type Props = {
  Id?: string;
};
export const FeedbackForm = (props: Props) => {
  const { Id } = props;
  const [dataForm, setDataForm] = useState<any>();
  const [formId, setFormId] = useState<any>();
  const [formPic, setFormPic] = useState<any>();
  const [formValue, setFormValue] = useState([{ name: '', value: '' }]);
  const [formIsValid, setFormIsValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
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
          setDataForm(dataFormJson.data.attributeList);
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

  const emailSubmitterComponent =
    dataForm?.find((item: any) => item.fieldId === 'EMAIL_SUBMITTER')
      ?.componentId ?? '';

  const onSubmitData = async () => {
    const dataForm = [...formValue];

    const queryParams = {
      id: formId,
      pic: formPic,
      placeholderValue: dataForm,
      emailSubject,
      emailBody,
      emailSubmitter: emailSubmitterComponent
        ? formValue.find((item: any) => item.name === emailSubmitterComponent)
            ?.value
        : '',
      emailSubjectSubmitter,
      emailBodySubmitter
    };

    const data = await handleSendEmail(queryParams);
    if (data.status === 'OK') {
      setShowSuccess(true);
    }

    if (data.status !== 'OK') {
      console.error('Error:', data.errors.message);
      window.location.reload();
    }
  };

  return (
    <div className="bg-purple_superlight lg:px-[8.5rem] py-[5rem] xs:px-[1.3125rem]">
      <div className="bg-white border rounded-xl flex flex-col justify-between overflow-hidden">
        <div className="p-[2.25rem]">
          <p className="font-bold font-karla text-tanya-avgen-detail-title-mobile lg:text-tanya-avgen-detail-title-desktop text-purple_dark mb-[1rem]">
            Bagikan Saran Anda
          </p>
          {dataForm && (
            <CustomForm
              dataForm={dataForm}
              customFormClassname="border-none p-[0rem]"
              title=" "
              type="Form Saran"
              resultData={receiveData}
            />
          )}
          <div className="mt-[2.25rem]">
            <button
              disabled={formIsValid ? false : true}
              onClick={() => onSubmitData()}
              className={`${
                formIsValid ? 'bg-purple_dark' : 'bg-dark-grey'
              } text-white h-[2.75rem] lg:h-[4rem] w-full lg:w-[8.25rem] rounded-lg mt-[0.75rem] lg:mt-0`}
            >
              Kirim
            </button>
          </div>
        </div>
        <DividerPurple />
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
