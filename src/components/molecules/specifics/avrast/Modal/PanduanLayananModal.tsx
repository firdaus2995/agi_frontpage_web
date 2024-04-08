'use client';
import { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import Image from 'next/image';
import CASE from '@/assets/images/common/medicine-box.svg';
import Icon from '@/components/atoms/Icon';
import { CardRainbow } from '@/components/molecules/specifics/avrast/HubungiKami/MainContentComponent/Card';

export const PanduanLayananModal = ({ handleCloseModal, isShowPanduanLayananModal }: { handleCloseModal: () => void, isShowPanduanLayananModal: boolean })  => {
    const assuranceTips = [
        'Pastikan Anda memahami produk asuransi jiwa yang dipilih, sesuai dengan kebutuhan dan kemampuan Anda.',
        'Pastikan Tenaga Pemasar Anda memiliki kartu lisensi AAJI/AASI. Mintalah Tenaga Pemasar Anda untuk menunjukkan kartu lisensinya.',
        'Pahami dan tanyakan manfaat asuransi, pengecualian, biaya, risiko, hak, kewajiban dan tata cara pengajuan klaim secara lengkap kepada Tenaga Pemasar Anda.',
        'Jika memilih produk asuransi jiwa unit link, maka lakukan penilaian profil risiko investasi pribadi sebelumnya, yang akan dibantu oleh Tenaga Pemasar Anda. Profil risiko investasi memberikan gambaran secara umum mengenai toleransi risiko Anda. Sesuaikan dana investasi yang Anda pilih dengan profil risiko Anda.',
        'Pahami terlebih dahulu isi proposal dan ilustrasi asuransi, barulah menandatangani Surat Pengajuan Asurasi Jiwa (SPAJ) yang telah diisi secara lengkap oleh Anda sendiri. Setelahnya, Anda berhak untuk mendapatkan salinan dari SPAJ tersebut.',
        'Pastikan data dan kontak yang tertera di SPAJ termasuk pendaftaran alamat email dan nomor handphone adalah informasi terkini untuk mendapatkan informasi mengenai Polis Anda.',
        'Lakukanlah pembayaran premi / kontribusi secara langsung ke Avrist Life Insurance melalui saluran pembayaran resmi dan tidak melalui Tenaga Pemasar. Pembayaran secara auto debit rekening atau kartu kredit sangat disarankan agar perlindungan asuransi tetap aktif.',
        'Terdapat masa pembelajaran polis (freelook period) selama 14 hari kerja. Pergunakan periode ini untuk membaca syarat dan ketentuan produk secara teliti. Anda dapat melakukan pembatalan pengajuan polis dalam masa freelook.'
    ]

  return (
    <Transition appear show={isShowPanduanLayananModal} as={Fragment}>
        <Dialog as="div" className="relative z-[99]" onClose={handleCloseModal}>
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
                <div className="flex min-h-full items-center justify-center p-4 text-left">
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
                                    <button onClick={handleCloseModal}>
                                        <Icon name="close" width={24} height={24} />
                                    </button>
                                </div>
                                <div className="flex flex-col h-[80vh] w-[60vw]">
                                    <div className="flex items-left flex-col">
                                        <div className="my-[20px] flex flex-col gap-5">
                                            <p className="font-karla font-semibold text-purple_dark text-[48px]">
                                                Panduan Layanan Nasabah (PDF)
                                            </p>
                                            <p className='text-[18px]'>
                                                Mari selalu teliti sebelum membeli produk asuransi jiwa dengan membaca isi proposal dengan baik dan pertimbangkan dengan cermat segala manfaat dan konsekuensinya.
                                            </p>
                                            <p className='text-[18px] font-bold '>
                                                Ini dia hal-hal yang perlu Anda lakukan sebelum membeli produk asuransi jiwa!
                                            </p>                                 
                                            {
                                                assuranceTips.map((item, index) => (
                                                    <div key={index} className="flex items-start gap-2 pt-2">
                                                        <Image src={CASE} alt="case" className="w-4 mt-1" />
                                                        <p className="text-[18px] text-left">{item}</p>
                                                    </div>
                                                ))
                                            }
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
}
