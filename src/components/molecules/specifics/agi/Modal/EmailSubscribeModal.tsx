'use client';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CardRainbow } from '../HubungiKami/MainContentComponent/Card';
import Icon from '@/components/atoms/Icon';
import { handleGetContentCategory } from '@/services/content-page.api';
import { handleSubscribe } from '@/services/subscribe-service.api';
import {
  contentCategoryTransformer,
  contentStringTransformer
} from '@/utils/responseTransformer';

type Props = {
  show: boolean;
  onClose: () => void;
};
export const EmailSubscribeModal = (props: Props) => {
  const { onClose, show } = props;
  const [isSuccessSubs, setIsSuccessSubs] = useState(false);
  const [contentData, setContentData] = useState<any>({});
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await handleGetContentCategory('Subscribe-AGI', {
          includeAttributes: 'true'
        });
        const transformedContent = contentCategoryTransformer(data, '');

        setContentData(transformedContent[0].content);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setEmail('');
    setEmailError('');
  }, [onClose]);

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setEmailError('Masukkan alamat email yang valid');
      return;
    }

    setEmailError('');

    const queryParams = {
      email: email,
      entity: 'AGI'
    };
    const data = await handleSubscribe(queryParams);
    if (data.status === 'OK') {
      setIsSuccessSubs(true);
    }

    if (data.status !== 'OK') {
      console.error('Error:', data.errors.message);
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  useEffect(() => {
    if (show) {
      setIsSuccessSubs(false);
    }
  }, [show, setIsSuccessSubs]);
  return (
    <Transition appear show={show} as={Fragment}>
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
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="transform transition-all overflow-hidden">
                <CardRainbow className="bg-[#7e3f96] overflow-hidden w-full h-full lg:w-[580px] lg:h-[460px]">
                  {isSuccessSubs ? (
                    <div className="transition">
                      <div className="absolute right-0 top-0 p-[24px]">
                        <button onClick={onClose}>
                          <Icon
                            name="close"
                            width={24}
                            height={24}
                            color="white"
                          />
                        </button>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-center h-full text-center lg:px-[4.5rem] lg:py-[6.25rem] xs:px-[2rem] xs:py-[3.125rem] gap-[36px]">
                        <p className="font-karla font-extrabold xs:text-[2.25rem] lg:text-[3.5rem] text-white xs:leading-[43.2px] lg:leading-[57.6px] -tracking-[1.92px] mb-2">
                          Terima kasih atas langganan Anda!
                        </p>
                        <p className="font-opensans font-normal text-[1.125rem] text-white leading-[25.2px]">
                          Cek email untuk konfirmasi email Anda
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="p-12 lg:px-[72px] lg:py-[100px] transition">
                      <div className="absolute right-0 top-0 p-[24px]">
                        <button onClick={onClose}>
                          <Icon
                            name="close"
                            width={24}
                            height={24}
                            color="white"
                          />
                        </button>
                      </div>
                      <div className="">
                        <div className="bg-[#7e3f96] flex items-center flex-col">
                          <div className="flex items-center flex-col">
                            <p
                              className="font-karla font-extrabold text-[24px] lg:text-[48px] leading-[36.3px] lg:leading-[57.6px] -tracking-[0.04em] text-white text-center"
                              dangerouslySetInnerHTML={{
                                __html:
                                  contentStringTransformer(
                                    contentData['teks-judul']
                                  ) ?? ''
                              }}
                            />
                            <p
                              className="font-opensans font-normal lg:text-[18px] lg:leading-[25.2px] text-white text-center"
                              dangerouslySetInnerHTML={{
                                __html:
                                  contentStringTransformer(
                                    contentData['teks-deskripsi']
                                  ) ?? ''
                              }}
                            />
                            <form
                              className="w-full   flex flex-1 xs:flex-col xm:flex-row mt-[40px] items-center gap-3"
                              onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit();
                              }}
                            >
                              <input
                                type="email"
                                placeholder="Masukkan email Anda"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="w-full flex rounded-md p-[12px] h-[45px] border-1 border-purple_verylight text-white bg-purple_verylight/20"
                              />

                              <button
                                // type="submit"
                                className="py-[8px] bg-white rounded-md px-[20px] h-[45px] font-opensans font-semibold text-[16px] text-purple_dark"
                              >
                                {contentStringTransformer(
                                  contentData['label-button']
                                )}
                              </button>
                            </form>
                            {emailError && (
                              <p className="text-red-500 ml-2">{emailError}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardRainbow>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
