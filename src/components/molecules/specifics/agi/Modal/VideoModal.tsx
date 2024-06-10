'use client';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { CardRainbow } from '../HubungiKami/MainContentComponent/Card';

type Props = {
  show: boolean;
  onClose: () => void;
  videoUrl: string;
};
export const VideoModal = (props: Props) => {
  const { onClose, show, videoUrl } = props;

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };

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
                  <YouTube
                    videoId={videoUrl}
                    className="h-[600px] w-[800px]"
                    iframeClassName="-z-1 w-full h-full"
                    onReady={onPlayerReady}
                  />
                </CardRainbow>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
