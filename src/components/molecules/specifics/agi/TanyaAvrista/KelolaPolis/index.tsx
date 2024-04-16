'use client';

import Image from 'next/image';
import Button from '@/components/atoms/Button/Button';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';

interface IKelolaPolis {
  title: string | React.ReactNode;
  buttonTitle: string;
  image: string;
}

const KelolaPolis = ({ title, buttonTitle, image }: IKelolaPolis) => {
  return (
    <div className="flex flex-col">
      <RoundedFrameBottom />
      <div className="w-full flex justify-center py-[72px] bg-avrast_product_bg -mt-[1px]">
        <div className="grid grid-cols-2 rounded-[24px] bg-white overflow-hidden">
          <div className="flex flex-col gap-[24px] items-start justify-center p-[36px] w-[605px]">
            <div>{title}</div>
            <Button
              customButtonClass="!border-none !bg-purple_dark text-white"
              title={buttonTitle}
            />
          </div>
          <div className="flex">
            <Image
              height={0}
              width={0}
              alt="footerInformationImage"
              className="min-h-[400px] w-full object-cover"
              src={image}
            />
          </div>
        </div>
      </div>
      <RoundedFrameTop />
    </div>
  );
};

export default KelolaPolis;
