'use client';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CardRainbow } from '../HubungiKami/MainContentComponent/Card';
import Icon from '@/components/atoms/Icon';

type Props = {
  show: boolean;
  onClose: () => void;
};
export const EmailSubscribeModal = (props: Props) => {
  const { onClose, show } = props;
  const [isSuccessSubs, setIsSuccessSubs] = useState(false);

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
                <CardRainbow className="bg-[#7e3f96] overflow-hidden">
                  {isSuccessSubs ? (
                    <div className="h-[50vh] w-[50vw] transition">
                      <div className="absolute right-0 p-[24px]">
                        <button onClick={onClose}>
                          <Icon
                            name="close"
                            width={24}
                            height={24}
                            color="white"
                          />
                        </button>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-center h-full text-center px-[72px]">
                        <p className="font-karla font-semibold text-[48px] text-white">
                          Terima kasih atas langganan Anda!
                        </p>
                        <p className="font-opensans font-normal text-[18px] text-white">
                          Anda telah berhasil berlangganan untuk mendapatkan
                          informasi terkini, wawasan eksklusif, tips investasi,
                          dan berita terbaru.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="h-[80vh] w-[60vw] transition">
                      <div className="absolute right-0 p-[24px]">
                        <button onClick={onClose}>
                          <Icon
                            name="close"
                            width={24}
                            height={24}
                            color="white"
                          />
                        </button>
                      </div>
                      <div className="grid grid-rows-2 h-[80vh] w-[60vw]">
                        <div className="bg-white">
                          <img
                            src="https://bertuahpos.com/wp-content/uploads/2023/05/Modus-penipuan-via-email.jpg"
                            alt="modal-home-banner"
                            className="object-cover"
                          />
                        </div>
                        <div className="bg-[#7e3f96] flex items-center flex-col">
                          <div className="mt-[40px]">
                            <p className="font-karla font-extrabold text-[48px] text-white">
                              Subscribe Informasi Terkini!
                            </p>
                            <div className=" w-full grid grid-cols-3 gap-[12px] mt-[40px]">
                              <button className="bg-purple_dark rounded-xl py-[8px] font-opensans font-bold text-[18px] text-white">
                                Life Insurance
                              </button>
                              <button className="bg-white rounded-xl py-[8px] font-opensans font-bold text-[18px] text-grey_video_footer">
                                Life Insurance
                              </button>
                              <button className="bg-white rounded-xl py-[8px] font-opensans font-bold text-[18px] text-avram_green">
                                Asset Management
                              </button>
                            </div>
                            <form
                              className="flex flex-1 flex-row mt-[12px]"
                              onSubmit={(e) => {
                                e.preventDefault();
                                setIsSuccessSubs(true);
                              }}
                            >
                              <input
                                type="email"
                                placeholder="Masukkan email Anda"
                                className="flex-1 rounded-md p-[12px] border-1 border-purple_verylight text-white bg-purple_verylight/20"
                              />

                              <button
                                // type="submit"
                                className="ml-[12px] bg-white rounded-md px-[20px] font-opensans font-semibold text-[16px] text-purple_dark"
                              >
                                Subscribe
                              </button>
                            </form>
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
