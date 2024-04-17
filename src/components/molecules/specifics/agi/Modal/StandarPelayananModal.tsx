'use client';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { CardRainbow } from '../HubungiKami/MainContentComponent/Card';
import CASE from '@/assets/images/common/medicine-box.svg';
import WARNING from '@/assets/images/common/warning-triangle.svg';
import Icon from '@/components/atoms/Icon';

type Props = {
  show: boolean;
  onClose: () => void;
};

const data = [
  {
    text: 'Standar Pelayanan kami untuk metode penjaminan:',
    child: []
  },
  {
    text: 'Komitmen kami dalam penerbitan penjaminan',
    child: [
      {
        text: 'Memberikan Penjaminan sementara sebelum masuk rawat inap (Pre-Admission) dalam waktu 2 hari*.',
        child: []
      },
      {
        text: 'Memberikan Penjaminan awal rawat inap dalam waktu 150 menit*.',
        child: []
      },
      {
        text: 'Memberikan Penjaminan akhir/ penjaminan pulang rawat inap:',
        child: [
          'Dengan total biaya kurang dari sama dengan 500 juta, dalam waktu 150 menit*.',
          'Dengan total biaya lebih dari 500 juta, dalam waktu 240 menit*.',
          'Peserta akan mendapatkan ovo point sebesar Rp 200,000 apabila penjaminan akhir/penjaminan pulang (rawat inap dengan total biaya kurang dari 500 juta) diterbitkan lebih dari 180 menit.*sejak Rumah Sakit mengirimkan semua dokumen lengkap dan apabila diperlukan penelusuran lebih lanjut telah selesai.'
        ]
      },
      {
        text: 'Memberikan Penjaminan akhir rawat jalan setelah rawat inap dalam waktu 75 menit sejak Rumah Sakit mengirimkan semua dokumen lengkap, serta tidak memerlukan penelusuran lebih lanjut.',
        child: []
      }
    ]
  },
  {
    text: 'Standar Pelayanan kami untuk metode penggantian:',
    child: [
      {
        text: 'Pemberitahuan klaim telah diterima oleh Avrist Life Insurance dalam waktu 1 hari kerja;',
        child: []
      },
      {
        text: 'Memberikan keputusan klaim* setelah kami menerima dokumen klaim dalam waktu:',
        child: [
          '5 hari kerja untuk rawat inap',
          '15 hari kerja untuk non-rawat inap*Menginformasikan dibutuhkan dokumen tambahan atau proses investigasi atau keputusan klaim disetujui/ditolak; terhitung dari tanggal dokumen terakhir diterima oleh Prudential.'
        ]
      },
      {
        text: 'Membayarkan klaim dalam waktu:',
        child: [
          '2 hari kerja setelah klaim disetujui (rawat inap)',
          '5 hari kerja setelah klaim disetujui (non-rawat inap)'
        ]
      }
    ]
  }
];

export const StandarPelayananModal = (props: Props) => {
  const { onClose, show } = props;

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
              <Dialog.Panel className="transform transition-all overflow-y-auto">
                <CardRainbow className="bg-white">
                  <div className=" transition p-10 overflow-y-auto">
                    <div className="absolute right-0 p-[24px]">
                      <button onClick={onClose}>
                        <Icon
                          name="close"
                          width={24}
                          height={24}
                          color="black"
                        />
                      </button>
                    </div>
                    <div className="flex flex-col h-[80vh] w-[60vw]">
                      <div className="flex items-left flex-col">
                        <div className="my-[20px] flex flex-col gap-5">
                          <p className="font-karla font-semibold text-purple_dark text-[48px]">
                            Standar Pelayanan Kami
                          </p>
                          <p className="text-[18px]">
                            Pelajari standar pelayanan klaim rawat inap dari
                            Avrist Life Insurance di sini untuk metode
                            penjaminan (cashless) atau penggantian
                            (reimbursement).
                          </p>
                          {data.map((val, idx) => (
                            <div key={idx}>
                              <p className="text-[18px] font-bold w-full">
                                {val.text}
                              </p>
                              {val.child?.length > 0 && (
                                <div>
                                  <ul className="flex flex-col gap-5">
                                    {val.child.map((value, index) => (
                                      <li key={index}>
                                        <div className="flex flex-row gap-2 justify-start items-start">
                                          <Image
                                            className="w-4 mt-1"
                                            src={CASE}
                                            alt="case"
                                          />
                                          {value.text}
                                        </div>
                                        {value.child?.length > 0 && (
                                          <ul className="ml-5 flex flex-col gap-3">
                                            {value.child.map((text) => (
                                              <li key={text}>
                                                <div className="flex flex-row gap-2 justify-start items-start">
                                                  <Image
                                                    className="w-4 mt-1"
                                                    src={WARNING}
                                                    alt="case"
                                                  />
                                                  {text}
                                                </div>
                                              </li>
                                            ))}
                                          </ul>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
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
