'use client';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import BLANK_IMAGE from '@/assets/images/blank-image.svg';
import Icon from '@/components/atoms/Icon';
import { CardRainbow } from '@/components/molecules/specifics/agi/HubungiKami/MainContentComponent/Card';

type Props = {
  show: boolean;
  onClose: () => void;
  popUpImage?: string;
};
export const SuccessModal = (props: Props) => {
  const { onClose, show, popUpImage } = props;

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
                  <div className="xs:w-full flex flex-col">
                    <div className="absolute right-0 p-[1.5rem]">
                      <button onClick={onClose}>
                        <Icon
                          name="close"
                          width={24}
                          height={24}
                          color="white"
                        />
                      </button>
                    </div>
                    {popUpImage && (
                      <Image
                        alt="success"
                        src={popUpImage ?? BLANK_IMAGE}
                        className="w-full h-[200px] object-cover"
                        width={24}
                        height={24}
                      />
                    )}
                    <div className="w-full h-[240px] lg:h-[440px] text-white flex flex-col items-center text-center justify-center px-[32px] lg:px-[50px]">
                      <h1 className="font-karla xs:text-[2.25rem] md:text-[3.5rem] font-extrabold">
                        Terima Kasih
                      </h1>
                      <p className="xs:text-lg md:text-xl font-opensans">
                        Form telah berhasil dikirim.
                      </p>
                    </div>
                  </div>
                </CardRainbow>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
