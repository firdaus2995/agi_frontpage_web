import Image from 'next/image';
import BgImage from '@/assets/images/investment-page-img.svg';
import Button from '@/components/atoms/Button/Button';

const InvestmentPage = () => {
  return (
    <div className="w-full flex flex-col bg-white lg:px-20 xs:p-5 lg:py-10">
      <div className="flex lg:flex-row xs:flex-col justify-between items-center">
        <div className="flex flex-col gap-4 lg:text-[56px] xs:text-[24px] lg:w-1/2 xs:w-[80%] xs:text-center lg:text-left">
          <p className="font-light">
            Masa depan Anda adalah{' '}
            <span className="font-semibold text-purple_dark">
              investasi terpenting
            </span>{' '}
            kami
          </p>
          <div>
            <Button title="Lihat Tim Investasi" />
          </div>
        </div>
        <Image className="h-auto w-[60%]" src={BgImage} alt="sample-4" />
      </div>
    </div>
  );
};

export default InvestmentPage;
