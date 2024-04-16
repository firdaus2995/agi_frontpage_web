import Image from 'next/image';

import { DividerPurple } from './Divider';

import CLOCK from '@/assets/images/common/clock-gray.svg';
import CUSTOMER_SERVICE from '@/assets/images/common/customer-service-gray.svg';
import EMAIL from '@/assets/images/common/email-gray.svg';
import PHONE from '@/assets/images/common/phone-gray.svg';

export const ContactSupport = () => {
  return (
    <div className="my-[80px] mx-[136px] grid grid-cols-5 gap-6">
      <div className="h-[323px] col-span-2 border bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
        <div className="p-[36px]">
          <Image src={PHONE} alt="phone" width={100} height={100} />
          <p className="font-karla font-extrabold text-[48px] leading-[50px] mt-[24px]">
            Hubungi Kami
          </p>
        </div>
        <DividerPurple />
      </div>
      <div className="h-[323px]  border bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
        <div className="h-full font-opensans font-bold text-[20px] flex flex-col items-center mt-[36px]">
          <Image src={CUSTOMER_SERVICE} alt="cs" width={100} height={100} />
          <p className="mt-[24px]">Layanan Nasabah</p>
          <p className="text-purple_dark">021 5789 8188</p>
        </div>
        <DividerPurple />
      </div>
      <div className="h-[323px]  border bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
        <div className="h-full font-opensans font-bold text-[20px] flex flex-col items-center mt-[36px]">
          <Image src={EMAIL} alt="email" width={100} height={100} />
          <p className="mt-[24px]">Email</p>
          <p className="text-purple_dark">customer@avrist.com</p>
        </div>
        <DividerPurple />
      </div>
      <div className="h-[323px]  border bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
        <div className="h-full font-opensans font-bold text-[20px] flex flex-col items-center mt-[36px] text-center">
          <Image src={CLOCK} alt="clock" width={100} height={100} />
          <p className="mt-[24px]">Waktu Operasional</p>
          <p className="text-purple_dark">Senin - Jumat, 08.00 - 17.00 WIB</p>
        </div>
        <DividerPurple />
      </div>
    </div>
  );
};
