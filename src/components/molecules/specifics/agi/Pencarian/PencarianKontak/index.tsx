import React from 'react';
import Image from 'next/image';
import CUSTOMER_SERVICE from '@/assets/images/common/customer-service.svg';
import DOCUMENT_SEARCH from '@/assets/images/common/document-search.svg';
import EMAIL from '@/assets/images/common/email.svg';
import MESSAGE from '@/assets/images/common/message.svg';

const PencarianKontak = () => {
  return (
    <div className="bg-purple_dark">
      <div className="bg-[#F7F4F8] rounded-t-[80px] py-20 flex justify-center">
        <div className="w-[78%] h-auto grid grid-cols-4 gap-10">
          <div className="w-auto h-[274px] flex flex-col justify-center items-center bg-white rounded-xl border border-gray_light">
            <Image alt="logo" src={CUSTOMER_SERVICE} className="mb-10" />
            <p className="font-opensans font-bold md:text-xl 2xl:text-2xl">
              Layanan Nasabah
            </p>
            <p className="font-opensans font-bold md:text-xl 2xl:text-2xl text-purple_dark">
              021 5789 8188
            </p>
          </div>
          <div className="w-auto h-[274px] flex flex-col justify-center items-center bg-white rounded-xl border border-gray_light">
            <Image alt="logo" src={MESSAGE} className="mb-10" />
            <p className="font-opensans font-bold md:text-xl 2xl:text-2xl">
              Tanya Avrista
            </p>
            <p className="font-opensans font-bold md:text-xl 2xl:text-2xl text-purple_dark">
              Lebih Lanjut
            </p>
          </div>
          <div className="w-auto h-[274px] flex flex-col justify-center items-center bg-white rounded-xl border border-gray_light">
            <Image alt="logo" src={EMAIL} className="mb-10" />
            <p className="font-opensans font-bold md:text-xl 2xl:text-2xl">
              Tanya Lewat Email
            </p>
            <p className="font-opensans font-bold md:text-xl 2xl:text-2xl text-purple_dark">
              Kirim Email
            </p>
          </div>
          <div className="w-auto h-[274px] flex flex-col justify-center items-center bg-white rounded-xl border border-gray_light">
            <Image
              alt="logo"
              src={DOCUMENT_SEARCH}
              className="mb-10 w-[100px] h-[100px]"
            />
            <p className="font-opensans font-bold md:text-xl 2xl:text-2xl">
              Prosedur Pengaduan
            </p>
            <p className="font-opensans font-bold md:text-xl 2xl:text-2xl text-purple_dark">
              Lihat Prosedur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PencarianKontak;
