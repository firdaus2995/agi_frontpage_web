'use client';
import { FC, Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Icon from '@/components/atoms/Icon';
import CustomForm from '@/components/molecules/specifics/agi/CustomForm/Index';
import { handleSendEmail } from '@/services/form.api';

type Props = {
  isOpen: boolean;
  formId: any;
  onClose: () => void;
  setIsSuccess: (value: boolean) => void;
};

export const ApplyJobModal: FC<Props> = ({ isOpen, onClose, formId, setIsSuccess }) => {
  const [dataForm, setDataForm] = useState<any>();
  const [idForm, setFormId] = useState<any>();
  const [formPic, setFormPic] = useState<any>();
  const [formValue, setFormValue] = useState([{ name: '', value: '' }]);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormValue([{ name: '', value: '' }]);
    if (formId) {
      const fetchDataForm = async () => {
        try {
          const contentResponse = await fetch(`/api/form?id=${formId}`);
          const dataFormJson = await contentResponse.json();
          setDataForm(dataFormJson.data.attributeList);
          setFormId(dataFormJson.data.id);
          setFormPic(dataFormJson.data.pic);
        } catch (error: any) {
          throw new Error('Error fetching form data: ', error.message);
        }
      };

      fetchDataForm().then();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const receiveData = (
    data: any,
    isValid: boolean | ((prevState: boolean) => boolean)
  ) => {
    setFormIsValid(isValid);
    setFormValue(data);
  };

  const onSubmitData = async () => {
    const queryParams = {
      id: idForm,
      pic: formPic,
      placeholderValue: formValue
    };

    const data = await handleSendEmail(queryParams);
    if (data.status === 'OK') {
      onClose();
      setIsSuccess(true);
    }

    if (data.status !== 'OK') {
      console.error('Error:', data.errors.message);
      setIsSuccess(false);
      onClose();
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[99]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 z-999" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full rounded-lg sm:w-[792px] transform overflow-hidden transition-all">
                <div className=" bg-white ">
                  <div
                    onClick={onClose}
                    className="cursor-pointer  flex justify-end pr-[30px] pt-[30px]"
                  >
                    <Icon width={24} height={24} name="close" />
                  </div>
                  <div className="flex flex-col items-center sm:px-[72px] sm:py-[100px]">
                    <h2 className="text-[32px] lg:text-[56px] font-karla text-gray_body font-bold">
                      Job Application Form
                    </h2>
                    <div className="w-full">
                      {dataForm && (
                        <CustomForm
                          customFormClassname="border-none p-[0px] rounded-[12px]"
                          onChange={handleChange}
                          dataForm={dataForm}
                          resultData={receiveData}
                          type="Karir"
                          title=" "
                        />
                      )}
                      <div className="bg-white py-[2rem] w-full flex justify-end p-4">
                        <button
                          type="submit"
                          disabled={!formIsValid}
                          onClick={() => onSubmitData()}
                          className={`${formIsValid ? 'bg-purple_dark' : 'bg-dark-grey'} text-white py-[1.125rem] w-full md:w-[132px] rounded-lg mt-[12px] md:mt-0`}
                        >
                          Kirim
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ApplyJobModal;
